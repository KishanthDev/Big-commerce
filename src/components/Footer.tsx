import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-10 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Company Name</h2>
          <p className="mt-2 text-sm">Providing quality services with excellence and dedication.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        
        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Customer Support</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="#" className="hover:text-white text-xl"><FaFacebook /></Link>
            <Link href="#" className="hover:text-white text-xl"><FaTwitter /></Link>
            <Link href="#" className="hover:text-white text-xl"><FaInstagram /></Link>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
}
