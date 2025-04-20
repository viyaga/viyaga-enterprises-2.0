"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SearchFilters() {
  const [query, setQuery] = useState("")
  // You could lift state up here for full integration

  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Input
          placeholder="Search products..."
          className="w-full md:flex-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="Finance">Finance</TabsTrigger>
            <TabsTrigger value="Productivity">Productivity</TabsTrigger>
            <TabsTrigger value="AI">AI</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}
