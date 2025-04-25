import {
    createSearchParamsCache,
    createSerializer,
    parseAsInteger,
    parseAsString
} from 'nuqs/server';
import { number } from 'zod';

export const searchParams = {
    page: parseAsInteger.withDefault(1),
    limit: parseAsInteger.withDefault(10),
    q: parseAsString.withDefault(''),
    sort: parseAsString.withDefault('createdAt'),
    category: parseAsString.withDefault(''),
    tagId: parseAsInteger.withDefault(0),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serialize = createSerializer(searchParams);