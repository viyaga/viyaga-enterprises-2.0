import { slugify } from "@/lib/utils";
import { CollectionBeforeValidateHook, CollectionSlug } from "payload";

export const generateSlug = (
  sourceField: string = 'title',
  targetField: string = 'slug'
): CollectionBeforeValidateHook => {
  return ({ data }) => {
    const source = data?.[sourceField];

    // Only generate slug if source exists and slug is not already set
    if (source && !data?.[targetField]) {
      data[targetField] = slugify(source);
    }

    return data;
  };
};

const readableSuffixes = [
  'alpha', 'beta', 'gamma', 'delta', 'omega',
  'one', 'two', 'three', 'four', 'five',
];

export const generateAndEnsureUniqueSlug = (
  collectionSlug: CollectionSlug,
  sourceField: string = 'title',
  targetField: string = 'slug'
): CollectionBeforeValidateHook => {
  return async ({ data, req, originalDoc }) => {
    const { payload } = req;
    if (!data) return data;

    // Generate base slug if not set
    let baseSlug = data?.[targetField];
    if (!baseSlug && data?.[sourceField]) {
      baseSlug = slugify(data[sourceField]);
    }

    if (!baseSlug) return data;

    const isUpdate = req.method === 'PATCH';
    const originalSlug = originalDoc?.[targetField];
    const slugChanged = !originalSlug || originalSlug !== baseSlug;

    // If update but slug hasn't changed, skip uniqueness check
    if (isUpdate && !slugChanged) {
      data[targetField] = baseSlug;
      return data;
    }

    // Ensure uniqueness
    let uniqueSlug = baseSlug;
    let suffixIndex = 0;

    while (true) {
      const existing = await payload.find({
        collection: collectionSlug,
        where: { slug: { equals: uniqueSlug } },
        limit: 1,
      });

      const doc = existing.docs[0];
      const isSameDoc = doc && data?.id && doc.id === data.id;
      const noConflict = existing.docs.length === 0 || isSameDoc;

      if (noConflict) break;

      const suffix = readableSuffixes[suffixIndex] || `custom-${Date.now()}`;
      uniqueSlug = `${baseSlug}-${suffix}`;
      suffixIndex++;
    }

    data[targetField] = uniqueSlug;
    return data;
  };
};