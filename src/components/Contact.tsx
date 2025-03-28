import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <Image src="/logo.png" alt="Contact Us" width={110} height={110} className="mb-4"/>
          <h2 className="text-3xl font-bold mb-4">Better tools mean better results.</h2>
          <p className="text-lg mb-6">
            Our numbers speak for themselves (but we'd rather speak with you).  
            Connect with our team, and let's talk about your unique goals.
          </p>
          <Link href="#" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700">
            Contact Us
          </Link>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <Image src="/feedonomics-logo.svg" alt="feedonomics" width={110} height={110} className="mb-4"/>
            <p className="text-gray-700 mb-4">
              The market leader in product feed management. Reach more people, drive more sales, sync, automate,  
              and optimize your data across 150+ leading marketplaces, social commerce, and advertising channels.
            </p>
            <Link href="#" className=" flex gap-2 text-black font-semibold">
              Learn More <ArrowRight size={20} className="text-blue-600" />
            </Link>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <Image src="/makeswift.svg" alt="makeswift" width={110} height={110} className="mb-4"/>
            <p className="text-gray-700 mb-4">
              The intuitive visual editor that your whole team will love. Use your design system and custom components  
              in our drag-and-drop builder to create stunning websites, landing pages, and digital experiences.
            </p>
            <Link href="#" className="flex gap-2 text-black font-semibold">
              Learn More  <ArrowRight size={20} className="text-blue-600" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
