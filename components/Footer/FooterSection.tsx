import React from 'react';
import Link from 'next/link';

const FooterSection = () => {

    const socialLinks = [
        { href: "/linkedin", label: "LinkedIn" },
        { href: "/github", label: "GitHub" },
        { href: "/twitter", label: "Twitter" },
      ];

  return (
    <div>
        <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 FortuneConnect. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="cursor-pointer hover:bg-sky-700">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
    </div>
  )
}

export default FooterSection