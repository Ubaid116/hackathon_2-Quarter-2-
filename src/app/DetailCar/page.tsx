'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import CarSection from '../components/CarSection'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

export default function CarDetailPage() {
  return (
    <div>
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_300px] gap-6">
      {/* Filters Sidebar */}
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-muted-foreground mb-4">TYPE</h3>
          <div className="space-y-2">
            <div className="flex  items-center space-x-2">
              <Checkbox id="sport" checked />
              <label htmlFor="sport" className="text-sm">Sport (10)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="suv" checked />
              <label htmlFor="suv" className="text-sm">SUV (12)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="mpv" />
              <label htmlFor="mpv" className="text-sm">MPV (16)</label>
            </div>
            {/* Add more car types */}
          </div>
        </div>

        <div>
          <h3 className="text-sm text-muted-foreground mb-4">CAPACITY</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="2person" checked />
              <label htmlFor="2person" className="text-sm">2 Person (10)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="4person" />
              <label htmlFor="4person" className="text-sm">4 Person (14)</label>
            </div>
            {/* Add more capacity options */}
          </div>
        </div>

        <div>
          <h3 className="text-sm text-muted-foreground mb-4">PRICE</h3>
          <Slider
            defaultValue={[100]}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="mt-2">
            <p className="text-sm">Max. $100.00</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6 ">
        <Card className="bg-blue-600 text-primary-foreground overflow-hidden">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Sports car with the best design and acceleration</h2>
                <p>Safety and comfort while driving a futuristic and elegant sports car</p>
              </div>
              <div className="relative h-[200px] md:h-[300px]">
                <Image
                  src="/asset/car2.png   "
                  alt="Nissan GT-R"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

       <div className="grid grid-cols-3 gap-4">
  <Card className="ring-2 ring-primary">
    <CardContent className="p-2">
      <div className="relative h-[100px]">
        <Image
          src="/asset/v1.png"  
          alt="Car view 1"
          fill
          className="object-cover rounded"
        />
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-2">
      <div className="relative h-[100px]">
        <Image
          src="/asset/v2.png"  
          alt="Car view 2"
          fill
          className="object-cover rounded"
        />
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-2">
      <div className="relative h-[100px]">
        <Image
          src="/asset/v3.png"  
          alt="Car view 3"
          fill
          className="object-cover rounded"
        />
      </div>
    </CardContent>
  </Card>
</div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            Reviews <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded">13</span>
          </h3>

          {/* Review Items */}
          <div className="space-y-4">
            {[
              {
                name: "Alex Stanton",
                role: "CEO at Bukalapak",
                date: "21 July 2022",
                content: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
              },
              {
                name: "Skylar Dias",
                role: "CEO at Amazon",
                date: "20 July 2022",
                content: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."
              }
            ].map((review, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-muted rounded-full" />
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm">{review.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">Nissan GT - R</h2>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-primary"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 fill-muted stroke-muted-foreground"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <span className="text-sm text-muted-foreground ml-1">440+ Reviewer</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-muted-foreground">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Type Car", value: "Sport" },
            { label: "Capacity", value: "2 Person" },
            { label: "Steering", value: "Manual" },
            { label: "Gasoline", value: "70L" },
          ].map((spec, i) => (
            <div key={i}>
              <p className="text-muted-foreground">{spec.label}</p>
              <p className="font-semibold">{spec.value}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">$80.00/<span className="text-muted-foreground text-sm">days</span></p>
            <p className="text-muted-foreground line-through">$100.00</p>
          </div>
          <Link href="/RentNow">
            <Button className="px-8 bg-blue-600">Rent Now</Button>
          </Link>
        </div>
      </div>
      
    </div>
    <h2 className="text-2xl text-center font-bold">Recent Car</h2>

    <CarSection />
    
    </div>
    
  )
}

