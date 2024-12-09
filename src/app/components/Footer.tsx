import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t  bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MORENT
            </Link>
            <p className="text-sm text-gray-500">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-gray-500 hover:text-gray-900">How it works</Link></li>
              <li><Link href="/featured" className="text-gray-500 hover:text-gray-900">Featured</Link></li>
              <li><Link href="/partnership" className="text-gray-500 hover:text-gray-900">Partnership</Link></li>
              <li><Link href="/business-relation" className="text-gray-500 hover:text-gray-900">Business Relation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/events" className="text-gray-500 hover:text-gray-900">Events</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/podcast" className="text-gray-500 hover:text-gray-900">Podcast</Link></li>
              <li><Link href="/invite" className="text-gray-500 hover:text-gray-900">Invite a friend</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Socials</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/discord" className="text-gray-500 hover:text-gray-900">Discord</Link></li>
              <li><Link href="/instagram" className="text-gray-500 hover:text-gray-900">Instagram</Link></li>
              <li><Link href="/twitter" className="text-gray-500 hover:text-gray-900">Twitter</Link></li>
              <li><Link href="/facebook" className="text-gray-500 hover:text-gray-900">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">©2024 MORENT. All rights reserved</p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900">
              Privacy & Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-900">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

