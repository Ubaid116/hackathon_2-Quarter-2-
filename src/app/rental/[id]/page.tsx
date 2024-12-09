export default function RentalPage({ params }: { params: { id: string } }) {
    return (
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Car Details</h1>
            <p className="text-gray-600">Car ID: {params.id}</p>
            {/* Add more car details here */}
          </div>
          <div className="rounded-lg bg-gray-100 p-6">
            <h2 className="mb-4 text-xl font-semibold">Booking Details</h2>
            {/* Add booking form here */}
          </div>
        </div>
      </div>
    )
  }
  
  