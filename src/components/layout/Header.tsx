'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gameplay', label: 'Gameplay' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group"
          >
            <span className="text-xl sm:text-2xl md:text-3xl" aria-hidden="true">🐝</span>
            <span className="font-heading text-base sm:text-lg md:text-xl font-semibold text-primary group-hover:text-primary-light transition-colors">
              The Hive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/IshKevin/the_hive"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-background font-semibold px-4 py-2 rounded-md transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              Play Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-gray-300 hover:text-primary transition-colors touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[400px] pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-primary hover:bg-white/5 px-4 py-3.5 rounded-md transition-all duration-200 text-sm font-medium uppercase tracking-wider touch-manipulation"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/IshKevin/the_hive"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-background font-semibold px-4 py-3.5 rounded-md transition-colors duration-200 text-sm uppercase tracking-wider text-center mt-2 touch-manipulation"
            >
              Play Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
