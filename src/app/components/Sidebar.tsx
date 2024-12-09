'use client'

import { useState } from 'react'

interface FilterState {
  types: string[]
  capacities: string[]
  maxPrice: number
}

interface SidebarProps {
  onFilterChange: (filters: FilterState) => void
}

export default function Sidebar({ onFilterChange }: SidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    capacities: [],
    maxPrice: 100
  })

  const typeOptions = [
    { label: 'Sport', count: 10 },
    { label: 'SUV', count: 12 },
    { label: 'MPV', count: 16 },
    { label: 'Sedan', count: 20 },
    { label: 'Coupe', count: 14 },
    { label: 'Hatchback', count: 14 }
  ]

  const capacityOptions = [
    { label: '2 Person', count: 10 },
    { label: '4 Person', count: 14 },
    { label: '6 Person', count: 12 },
    { label: '8 or More', count: 16 }
  ]

  const handleTypeChange = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type]
    
    const newFilters = { ...filters, types: newTypes }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleCapacityChange = (capacity: string) => {
    const newCapacities = filters.capacities.includes(capacity)
      ? filters.capacities.filter(c => c !== capacity)
      : [...filters.capacities, capacity]
    
    const newFilters = { ...filters, capacities: newCapacities }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceChange = (price: number) => {
    const newFilters = { ...filters, maxPrice: price }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="w-64 space-y-6 p-4">
      {/* Type Section */}
      <div>
        <h3 className="mb-4 text-sm font-medium text-gray-500">TYPE</h3>
        <div className="space-y-2">
          {typeOptions.map((option) => (
            <label key={option.label} className="flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={filters.types.includes(option.label)}
                  onChange={() => handleTypeChange(option.label)}
                />
              </div>
              <span className="flex-1 text-sm text-gray-600">{option.label}</span>
              <span className="text-sm text-gray-400">({option.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Capacity Section */}
      <div>
        <h3 className="mb-4 text-sm font-medium text-gray-500">CAPACITY</h3>
        <div className="space-y-2">
          {capacityOptions.map((option) => (
            <label key={option.label} className="flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={filters.capacities.includes(option.label)}
                  onChange={() => handleCapacityChange(option.label)}
                />
              </div>
              <span className="flex-1 text-sm text-gray-600">{option.label}</span>
              <span className="text-sm text-gray-400">({option.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div>
        <h3 className="mb-4 text-sm font-medium text-gray-500">PRICE</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={filters.maxPrice}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-600">
            Max. ${filters.maxPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

