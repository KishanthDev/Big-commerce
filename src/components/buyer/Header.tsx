import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          <a
            href="#"
            className="logo flex items-center text-blue-600 text-xl font-semibold"
          >
            <ShoppingBag className="w-6 h-6 mr-2" />
            <span>MarketHub</span>
          </a>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="font-medium hover:text-blue-600 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium hover:text-blue-600 transition"
                >
                  Browse
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium hover:text-blue-600 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium hover:text-blue-600 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition flex items-center">
            Sign Up <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
}
