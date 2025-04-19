"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockProducts = [
  { id: 1, name: "Invoice Generator", category: "Finance", description: "", price: 29 },
  { id: 2, name: "Task Manager Pro", category: "Productivity", description: "", price: 39 },
  { id: 3, name: "ChatBot AI", category: "AI", description: "", price: 59 },
]

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
