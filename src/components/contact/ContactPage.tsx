import React from "react";

const ContactPage = () => {
  return (
    <section className="py-16 dark:bg-black">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white shadow-xl border-black dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block font-medium mb-2 text-sm dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block font-medium mb-2 text-sm dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block font-medium mb-2 text-sm dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-medium mb-2 text-sm dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please describe your question or issue in detail"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm min-h-[150px] dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#4051ED] text-white rounded-md px-6 py-3 font-medium hover:bg-[#3444CB] transition-colors inline-flex items-center"
              >
                Send Message <span className="ml-2">→</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow-xl  dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="flex items-start mb-6">
              <div className="bg-[#ECF2FE] dark:bg-[#2A3B59] w-10 h-10 rounded-full flex items-center justify-center mr-4 text-[#4051ED] dark:text-white">
                📧
              </div>
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  support@markethub.com
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-[#ECF2FE] dark:bg-[#2A3B59] w-10 h-10 rounded-full flex items-center justify-center mr-4 text-[#4051ED] dark:text-white">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-sm">Phone</h3>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  (555) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-[#ECF2FE] dark:bg-[#2A3B59] w-10 h-10 rounded-full flex items-center justify-center mr-4 text-[#4051ED] dark:text-white">
                🕒
              </div>
              <div>
                <h3 className="font-semibold text-sm">Business Hours</h3>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Monday - Friday: 9AM - 5PM EST
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#ECF2FE] dark:bg-[#2A3B59] w-10 h-10 rounded-full flex items-center justify-center mr-4 text-[#4051ED] dark:text-white">
                🌐
              </div>
              <div>
                <h3 className="font-semibold text-sm">Social Media</h3>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Follow us @MarketHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
