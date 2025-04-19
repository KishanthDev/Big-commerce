import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons/buyer/SocialIcons";

export default function Footer() {
  const links = {
    quickLinks: [
      "Home",
      "Browse Stores",
      "Categories",
      "Featured",
      "Become a Seller",
    ],
    help: [
      "FAQ",
      "Shipping Info",
      "Returns Policy",
      "Payment Options",
      "Contact Support",
    ],
    legal: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Seller Guidelines",
    ],
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-100">
              MarketHub
            </h3>
            <p className="text-gray-400 text-sm mb-5">
              Connecting shoppers with unique independent stores and creators
              since 2023
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-100">Help</h3>
            <ul className="space-y-3">
              {links.help.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-100">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 MarketHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
