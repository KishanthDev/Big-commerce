import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <Image
            src="/logo.png"
            alt="Contact Us"
            width={110}
            height={110}
            className="mb-4"
          />
          <h2 className="text-3xl font-bold mb-4">
            Better tools mean better results.
          </h2>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Our numbers speak for themselves (but we'd rather speak with you).
            Connect with our team, and let's talk about your unique goals.
          </p>
          <Link
            data-testid="contact-us-main"
            href="#"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          {[
            {
              img: "/feedonomics-logo.svg",
              alt: "feedonomics",
              text: `The market leader in product feed management. Reach more people, drive more sales, sync, automate,  
              and optimize your data across 150+ leading marketplaces, social commerce, and advertising channels.`,
            },
            {
              img: "/makeswift.svg",
              alt: "makeswift",
              text: `The intuitive visual editor that your whole team will love. Use your design system and custom components  
              in our drag-and-drop builder to create stunning websites, landing pages, and digital experiences.`,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
            >
              <Image
                src={item.img}
                alt={item.alt}
                width={110}
                height={110}
                className="mb-4"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4">{item.text}</p>
              <Link
                href="#"
                className="flex items-center gap-2 font-semibold text-blue-600 hover:underline"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
