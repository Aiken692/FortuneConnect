import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';

const NavigationHeader = () => {

    const navItems = [
        { name: 'Home', href: '#hero-section', condition: true },
        { name: 'Features', href: '#feature-section', condition: true },
        { name: 'Pricing', href: '#dashboard', condition: true },
        { name: 'Dash Board', href: '#', condition: true }
      ];

    return (

          
            <div className="mx-auto p-4 flex justify-between items-center bg-gray-950">
                <h1 className="text-3xl font-bold text-rose-400">
                    FortuneConnect
                </h1>
              <nav>
                <ul className="flex space-x-4">
                  {navItems.map((item, index) => (
                    item.condition && (
                      <li key={index}>
                        
                        <Button variant="link" className="text-white hover:scale-110 ease-in duration-200">
                          <Link href={item.href}>{item.name}</Link>
                        </Button>
                      </li>
                    )
                  ))}
                </ul>
              </nav>

            </div>
          

      );
}

export default NavigationHeader