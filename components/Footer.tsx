'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import Image from 'next/image';

interface FooterProps {
  companyName: string;
  logoUrl?: string;
  email?: string;
  phone?: string;
  address?: string;
  family?:string
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    
  };
  quickLinks?: Array<{
    title: string;
    href: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  logoUrl,
  email,
  phone,
  address,
  socialLinks = {},
  quickLinks = [],
  family
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${family} py-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informacje o firmie */}
          <div>
            <div className="mb-4">
              {logoUrl ? (
                 <Image
                          src='/images/logo.png'
                          alt='Logo'
                          width={50}
                          height={50}
                        />
              ) : (
                <h3 className="text-2xl font-bold">{companyName}</h3>
              )}
            </div>
            <div className="space-y-2">
              {address && <p className="text-gray-600 text-xl">{address}</p>}
              {phone && <p className="text-gray-600 text-xl">Tel: {phone}</p>}
              {email && (
                <p className="text-gray-600 text-xl flex items-center">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${email}`} className="hover:text-gray-100">
                    {email}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* Szybkie linki */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xl text-gray-600 hover:text-gray-500 transition duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media społecznościowe */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Śledź nas</h3>
            <div className="flex space-x-4">
              {socialLinks.facebook && (
                <a 
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 transition duration-200"
                >
                  <Facebook size={24} />
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 transition duration-200"
                >
                  <Twitter size={24} />
                </a>
              )}
              {socialLinks.instagram && (
                <a 
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 transition duration-200"
                >
                  <Instagram size={24} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 transition duration-200"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {socialLinks.youtube && (
                <a 
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 transition duration-200"
                >
                  <Youtube size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Prawa autorskie */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xl text-gray-500">
          <p>© {currentYear} {companyName}. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;