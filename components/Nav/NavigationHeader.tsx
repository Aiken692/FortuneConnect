import Link from 'next/link';
import React from 'react'

const NavigationHeader = () => {

    const navItems = [
        { name: 'Home', href: '#', condition: true },
        { name: 'Features', href: '#', condition: true },
        { name: 'Pricing', href: '#', condition: true },
        { name: 'Sign Up', href: '#', condition: true }
      ];

    return (
        <div>
          <header className="bg-white shadow-md">
            <div className="container mx-auto p-6 flex justify-between items-center">
                <h1 className="text-xl font-bold text-red-800">
                    FortuneConnect
                </h1>
              <nav>
                <ul className="flex space-x-4">
                  {navItems.map((item, index) => (
                    item.condition && (
                      <li key={index}>
                        <Link href={item.href} className="text-gray-800 hover:text-indigo-600">{item.name}</Link>
                      </li>
                    )
                  ))}
                </ul>
              </nav>
            </div>
          </header>
        </div>
      );
}

export default NavigationHeader