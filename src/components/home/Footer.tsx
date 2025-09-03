"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ECECEC] rounded-2xl mt-16 ">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Intro Text */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-gray-700 text-sm leading-relaxed ">
            Members save traveler profiles, earn rewards, and get price alerts. Be part of our members to get the best
            of tours, travels and a memorable time!
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-4 font-Ruska">ABOUT US</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/promo" className="hover:text-purple-600">
                Promo
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-purple-600">
                Help
              </Link>
            </li>
            <li>
              <Link href="/order" className="hover:text-purple-600">
                Order
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-4 font-Ruska">RESOURCES</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/docs" className="hover:text-purple-600">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-purple-600">
                Carrier
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-purple-600">
                Work With Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-purple-600">
                Blog & News
              </Link>
            </li>
            <li>
              <Link href="/affiliate" className="hover:text-purple-600">
                Affiliate
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-extrabold text-gray-900 mb-4 font-Ruska">LEGAL</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link href="/terms" className="hover:text-purple-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-purple-600">
                Private Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-purple-600">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/developers" className="hover:text-purple-600">
                Developers & Designers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © 2025 Ivy Club. All Rights Reserved
      </div>
    </footer>
  );
}
