'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CarCardProps {
  name: string
  category: string
  image: string
  fuelCapacity: string
  transmission: string
  capacity: string
  price: number
  originalPrice: number
  liked?: boolean
}

function CarCard({
  name,
  category,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  originalPrice,
  liked = false
}: CarCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
        <button className="rounded-full p-1 hover:bg-gray-100">
          <svg
            className={`h-6 w-6 ${liked ? 'fill-red-500 stroke-red-500' : 'stroke-current'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      
      <div className="relative mb-3 h-40">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <div className="mb-3 flex justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span>{fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>{transmission}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>{capacity}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-bold">${price}</span>
          <span className="text-sm text-gray-500">/day</span>
          {originalPrice && (
            <p className="text-sm text-gray-500 line-through">${originalPrice}</p>
          )}
        </div>
        <Link href="/DetailCar" target='_blank' className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Rent Now
        </Link>
      </div>
    </div>
  )
}

interface FilterState {
  types: string[]
  capacities: string[]
  maxPrice: number
}

export default function CarSection() {
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    capacities: [],
    maxPrice: 100
  })

  const popularCars = [
    {
      name: 'Koenigsegg',
      category: 'Sport',
      image: '/asset/car.png',
      fuelCapacity: '90L',
      transmission: 'Manual',
      capacity: '2 People',
      price: 99.00,
      originalPrice: 0,
      liked: true
    },
    {
      name: 'Nissan GT - R',
      category: 'Sport',
      image: '/asset/car2.png',
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '2 People',
      price: 80.00,
      originalPrice: 100.00,
    },
    {
      name: 'Rolls - Royce',
      category: 'Sedan',
      image: '/asset/car3.png',
      fuelCapacity: '70L',
      transmission: 'Manual',
      capacity: '4 People',
      price: 96.00,
      originalPrice: 0,
      liked: true
    },
    {
      name: 'Nissan GT - R',
      category: 'Sport',
      image: '/asset/car2.png',
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '2 People',
      price: 80.00,
      originalPrice: 100.00,
    }
  ]

  const recommendedCars = [
    {
      name: 'All New Rush',
      category: 'SUV',
      image: '/asset/car4.png',
      fuelCapacity: '70L',
      transmission: 'Manual',
      capacity: '6 People',
      price: 72.00,
      originalPrice: 80.00,
    },
    {
      name: 'CR - V',
      category: 'SUV',
      image: '/asset/car5.png',
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: 80.00,
      originalPrice: 0,
      liked: true
    },
    {
      name: 'All New Terios',
      category: 'SUV',
      image: '/asset/car2.png',
      fuelCapacity: '90L',
      transmission: 'Manual',
      capacity: '6 People',
      price: 74.00,
      originalPrice: 0,
    },
    {
      name: 'CR - V',
      category: 'SUV',
      image: '/asset/car5.png',
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: 80.00,
      originalPrice: 0,
      liked: true
    },
    {
      name: 'MG ZX Exclusice',
      category: 'Hatchback',
      image: '/asset/car4.png',
      fuelCapacity: '70L',
      transmission: 'Manual',
      capacity: '4 People',
      price: 76.00,
      originalPrice: 80.00,
      liked: true
    },
    {
      name: 'New MG ZS',
      category: 'SUV',
      image: '/asset/car5.png',
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: 80.00,
      originalPrice: 0,
    },
    {
      name: 'MG ZX Excite',
      category: 'Hatchback',
      image: '/asset/car6.png',
      fuelCapacity: '90L',
      transmission: 'Manual',
      capacity: '4 People',
      price: 74.00,
      originalPrice: 0,
      liked: true
    },
    {
      name: 'New MG ZS',
      category: 'SUV',
      image: '/asset/car7.png',
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: 80.00,
      originalPrice: 0,
    }
  ]

  const filterCars = (cars: typeof popularCars) => {
    return cars.filter(car => {
      const matchesType = filters.types.length === 0 || filters.types.includes(car.category)
      const matchesCapacity = filters.capacities.length === 0 || filters.capacities.includes(car.capacity)
      const matchesPrice = car.price <= filters.maxPrice
      
      return matchesType && matchesCapacity && matchesPrice
    })
  }

  const filteredPopularCars = filterCars(popularCars)
  const filteredRecommendedCars = filterCars(recommendedCars)

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      {/* Recommendation Cars Section */}
      <div className="mb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPopularCars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>

      {/* Recommendation Cars Section */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-600"></h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredRecommendedCars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center">
        <button className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
          Show more car
        </button>
        <span className="ml-2 self-center text-sm text-gray-500">
          {filteredPopularCars.length + filteredRecommendedCars.length} Car
        </span>
      </div>
    </div>
  )
}

