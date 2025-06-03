import {
    createSearchParamsCache,
    createSerializer,
    parseAsBoolean,
    parseAsInteger,
    parseAsString
} from 'nuqs/server';

export const searchParams = {
    page: parseAsInteger.withDefault(1),
    limit: parseAsInteger.withDefault(12),
    q: parseAsString.withDefault(''),
    sort: parseAsString.withDefault('createdAt'),
    category: parseAsString.withDefault(''),
    tagId: parseAsInteger.withDefault(0),
    country: parseAsString.withDefault(''),
    currency: parseAsString.withDefault(''),
    isFree: parseAsBoolean.withDefault(false),
    isFeatured: parseAsBoolean.withDefault(false),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);