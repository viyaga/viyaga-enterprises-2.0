'use client'

import { searchParams } from '@/lib/searchparams'
import { useQueryState } from 'nuqs'
import { useCallback, useMemo } from 'react'

function useProductFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'q',
    searchParams.q.withOptions({ shallow: false, throttleMs: 500 })
  )

  const [category, setCategory] = useQueryState(
    'category',
    searchParams.category.withOptions({ shallow: false })
  )

  const [sort, setSort] = useQueryState(
    'sort',
    searchParams.sort.withOptions({ shallow: false }).withDefault('createdAt')
  )

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  )

  const [limit, setLimit] = useQueryState(
    'limit',
    searchParams.limit.withDefault(10)
  )

  const [tagId, setTagId] = useQueryState(
    'tagId',
    searchParams.tagId.withOptions({ shallow: false }).withDefault(0)
  )

  const [country, setCountry] = useQueryState(
    'country',
    searchParams.country.withOptions({ shallow: false })
  )

  const [currency, setCurrency] = useQueryState(
    'currency',
    searchParams.currency.withOptions({ shallow: false })
  )

  const [isFree, setIsFree] = useQueryState(
    'isFree',
    searchParams.isFree.withOptions({ shallow: false })
  )

  const [isFeatured, setIsFeatured] = useQueryState(
    'isFeatured',
    searchParams.isFeatured.withOptions({ shallow: false })
  )

  const resetFilters = useCallback(() => {
    setSearchQuery(null)
    setCategory(null)
    setSort('createdAt')
    setTagId(0)
    setCountry(null)
    setCurrency(null)
    setIsFree(false)
    setIsFeatured(false)
    setPage(1)
  }, [
    setSearchQuery,
    setCategory,
    setSort,
    setTagId,
    setCountry,
    setCurrency,
    setIsFree,
    setIsFeatured,
    setPage
  ])

  const isAnyFilterActive = useMemo(() => {
    return (
      !!searchQuery ||
      !!category ||
      !!country ||
      !!currency ||
      !!isFree ||
      !!isFeatured ||
      tagId !== 0
    )
  }, [searchQuery, category, country, currency, isFree, isFeatured, tagId])

  return {
    searchQuery,
    setSearchQuery,
    category,
    setCategory,
    sort,
    setSort,
    page,
    setPage,
    limit,
    setLimit,
    tagId,
    setTagId,
    country,
    setCountry,
    currency,
    setCurrency,
    isFree,
    setIsFree,
    isFeatured,
    setIsFeatured,
    resetFilters,
    isAnyFilterActive,
  }
}

export default useProductFilters
