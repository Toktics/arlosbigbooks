'use client'

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0 order-1">
          <img
            src="/images/ArloLogo.png"
            alt="Arlo Logo"
            className="h-16 md:h-20 w-auto"
          />
        </Link>
        
        {/* Center: Colorful text */}
        <div className="flex-1 text-center px-4 order-2">
          <h1 className="text-xl md:text-3xl font-bold font-[var(--font-fredoka)] leading-tight">
            <span className="text-red-500">Welcome</span>{" "}
            <span className="text-blue-500">to</span>{" "}
            <span className="text-yellow-500">Arlo's</span>{" "}
            <span className="text-green-500">BIG</span>{" "}
            <span className="text-purple-500">Book</span>{" "}
            <span className="text-orange-500">Series</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 flex-shrink-0 order-3">
          <li>
            <Link href="/" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/characters" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
              CHARACTERS
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/author" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
              AUTHOR
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex-shrink-0 order-3 text-gray-800 p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col py-4">
            <li>
              <Link 
                href="/" 
                className="block px-4 py-3 text-gray-800 font-semibold hover:bg-red-50 hover:text-red-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/characters" 
                className="block px-4 py-3 text-gray-800 font-semibold hover:bg-red-50 hover:text-red-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CHARACTERS
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="block px-4 py-3 text-gray-800 font-semibold hover:bg-red-50 hover:text-red-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="/author" 
                className="block px-4 py-3 text-gray-800 font-semibold hover:bg-red-50 hover:text-red-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                AUTHOR
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="block px-4 py-3 text-gray-800 font-semibold hover:bg-red-50 hover:text-red-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
