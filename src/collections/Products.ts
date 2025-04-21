import { CollectionConfig, CollectionSlug } from 'payload';

const Products: CollectionConfig = {
    slug: 'products',
    admin: { useAsTitle: 'title' },
    fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'description', type: 'richText' },
        { name: 'features', type: 'richText' },
        { name: 'price', type: 'number', required: true },
        { name: 'discount_price', type: 'number' },
        { name: 'version', type: 'text' },
        { name: 'changelog', type: 'richText' },
        { name: 'isFeatured', type: 'checkbox' },
        { name: 'isFree', type: 'checkbox' },
        { name: 'demo_url', type: 'text' },
        { name: 'documentation_url', type: 'text' },
        { name: 'category', type: 'relationship', relationTo: 'categories' as CollectionSlug },
        { name: 'tags', type: 'relationship', relationTo: 'tags' as CollectionSlug, hasMany: true },
        { name: 'thumbnail', type: 'upload', relationTo: 'media' },
        {
            name: 'screenshots',
            type: 'array',
            fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
        },
        { name: 'file', type: 'upload', relationTo: 'media', required: true },
    ],
};

export default Products;
