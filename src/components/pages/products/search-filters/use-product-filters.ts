'use client'

import { useQueryState } from 'nuqs'
import { useCallback, useMemo } from 'react'
import { searchParams } from '@/lib/searchparams'

export function useProductFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'q',
    searchParams.q.withOptions({ shallow: false, throttleMs: 500 }).withDefault('')
  )

  const [category, setCategory] = useQueryState(
    'category',
    searchParams.category.withOptions({ shallow: false }).withDefault('')
  )

  const [tagId, setTagId] = useQueryState(
    'tagId',
    searchParams.tagId.withOptions({ shallow: false }).withDefault(0)
  )

  const [sort, setSort] = useQueryState(
    'sort',
    searchParams.sort.withOptions({ shallow: false }).withDefault('createdAt')
  )

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withOptions({ shallow: false }).withDefault(1)
  )

  const [limit, setLimit] = useQueryState(
    'limit',
    searchParams.limit.withOptions({ shallow: false }).withDefault(10)
  )

  const resetFilters = useCallback(() => {
    setSearchQuery(null)
    setCategory(null)
    setTagId(null)
    setSort(null)
    setPage(1)
    setLimit(10)
  }, [setSearchQuery, setCategory, setTagId, setSort, setPage, setLimit])

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!category || tagId !== 0 || sort !== 'createdAt'
  }, [searchQuery, category, tagId, sort])

  return {
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
    tagId,
    setTagId,
    sort,
    setSort,
    page,
    setPage,
    limit,
    setLimit,
    resetFilters,
    isAnyFilterActive,
  }
}
