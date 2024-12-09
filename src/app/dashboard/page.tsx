'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import CarSection from '../components/CarSection'

interface FilterState {
  types: string[]
  capacities: string[]
  maxPrice: number
}

export default function Dashboard() {
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    capacities: [],
    maxPrice: 100
  })

  return (
    <div className="flex min-h-screen">
      <Sidebar onFilterChange={setFilters} />
      <div className="flex-1 p-8">
        
        {/* Removed h1 tag and comment */}
        <div className="w-full mb-8"> {/* Updated CarSection wrapper div */}
        <div className="mt-8 grid gap-6 rounded-lg bg-white p-6 shadow-lg md:grid-cols-2">
        {/* Pick-up Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-blue-600" />
            <span className="font-semibold">Pick - Up</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Locations</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Date</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>Select your date</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Time</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Drop-off Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-blue-600" />
            <span className="font-semibold">Drop - Off</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Locations</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Date</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>Select your date</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Time</label>
              <select className="w-full rounded-lg border border-gray-200 p-2 text-sm">
                <option>Select your time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-blue-600 p-3 text-white shadow-lg md:block">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>
      </div>
          <CarSection />
        </div>
      </div>
    </div>
  )
}

