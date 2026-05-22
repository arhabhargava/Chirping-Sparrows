"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV, img, SITE } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-sun-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={img("/images/logo.png")}
              alt={SITE.name}
              width={56}
              height={56}
              className="h-12 w-auto group-hover:animate-wiggle"
              unoptimized
            />
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-semibold text-ink-900 text-lg">
                {SITE.name}
              </div>
              <div className="text-xs text-ink-500">{SITE.tagline}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setSubmenu(item.label)}
                  onMouseLeave={() => setSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-full text-ink-700 hover:bg-sun-50 hover:text-ink-900 transition font-medium"
                  >
                    {item.label}
                    <span className="ml-1 text-xs">▾</span>
                  </Link>
                  {submenu === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-soft p-2 border border-sun-100">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-3 py-2 rounded-xl text-ink-700 hover:bg-sun-50 hover:text-ink-900 text-sm"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-full text-ink-700 hover:bg-sun-50 hover:text-ink-900 transition font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/admission"
              className="px-5 py-2.5 rounded-full bg-blush-500 text-white font-semibold hover:bg-blush-400 transition shadow-pop"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-full bg-sun-100 text-ink-900"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-sun-100 p-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {NAV.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-xl font-semibold text-ink-900"
              >
                {item.label}
              </Link>
              {item.children?.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-1.5 text-sm text-ink-700"
                >
                  • {c.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/admission"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center px-5 py-3 rounded-full bg-blush-500 text-white font-semibold"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
