import Image from 'next/image'
import Link from 'next/link'

export default function ContentAd() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      {/* Hero Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Hero */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 p-6 text-white">
          <div className="mb-8 max-w-md">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">The Best Platform for Car Rental</h2>
            <p className="mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <Link
              href="/dashboard"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Rental Car
            </Link>
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/asset/car.png"
              alt="Sports Car"
              width={512}
              height={256}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Hero */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="mb-8 max-w-md">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Easy way to rent a car at a low price</h2>
            <p className="mb-6">Providing cheap car rental services and safe and comfortable facilities.</p>
            <Link
              href="/dashboard"
              className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Rental Car
            </Link>
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/asset/car2.png"
              alt="GT-R Car"
              width={512}
              height={256}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Booking Form */}
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
    </div>
  )
}


