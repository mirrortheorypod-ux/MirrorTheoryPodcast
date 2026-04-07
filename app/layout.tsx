import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <nav className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Mirror Theory
          </Link>

          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/episodes" className="hover:text-white">Episodes</Link>
            <Link href="/about" className="hover:text-white">About</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
