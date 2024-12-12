import React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import Logo from '../images/Logo.png'

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Features', href: '#' },
      { name: 'Solutions', href: '#' },
      { name: 'Resources', href: '#' },
      { name: 'Pricing', href: '#' }
    ],
    secondary: [
      { name: 'About Us', href: '#' },
      { name: 'Company', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Career', href: '#' }
    ],
    legal: [
      { name: 'Term of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Language', href: '#' }
    ]
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 justify-center md:grid-cols-3  lg:grid-cols-3 gap-20">
          <div className="space-y-8 w-1/2 mx-auto">
          <img src={Logo} alt="logo" className=" w-full bg-cover h-8" />
            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0B3B5B]"></div>
              <span className="text-2xl font-bold text-[#0B3B5B]">Trustco.</span>
            </div> */}
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-1">
            <p className="text-gray-600">
              An awesome & poweful tools for your business, increase business revenue. with evaluating in depth variety of data sets and including the speed of tech adaptation we can build bridges between any companies and their customers.
            </p>
          </div>

          {/* Main Navigation */}
          <div className='flex justify-between mx-auto text-center gap-20'>
            <div className=''>
              <ul className="space-y-4">
                <li className='text-xl font-bold'>Home</li>
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Navigation */}
            <div>
              <ul className="space-y-4">
                <li className='text-xl font-bold'>About Us</li>
                {navigation.secondary.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">©2022-2023 Trustco.</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              {navigation.legal.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-gray-900">
                  {item.name}
                </a>
              ))}
              <div className="flex items-center">
                <span className="text-gray-500">English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}