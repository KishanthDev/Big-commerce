import React from "react";

const FAQSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-black py-16">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="font-semibold text-lg mb-4 relative pl-8">
              <span className="absolute left-0 text-[#4051ED] font-bold">
                Q
              </span>
              How do I sign up as a seller?
            </div>
            <div className="text-gray-500 text-sm relative pl-8 dark:text-gray-400">
              <span className="absolute left-0 text-green-500 font-bold">
                A
              </span>
              To become a seller on MarketHub, click the "Become a Seller"
              button in the top navigation bar. Complete the application form,
              verify your identity, and set up your payment information. Once
              approved, you can start listing your products right away.
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="font-semibold text-lg mb-4 relative pl-8">
              <span className="absolute left-0 text-[#4051ED] font-bold">
                Q
              </span>
              What payment methods do you accept?
            </div>
            <div className="text-gray-500 text-sm relative pl-8 dark:text-gray-400">
              <span className="absolute left-0 text-green-500 font-bold">
                A
              </span>
              MarketHub accepts all major credit cards including Visa,
              MasterCard, American Express, and Discover. We also support PayPal
              and direct bank transfers. For sellers, we offer secure direct
              deposits to your linked bank account.
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="font-semibold text-lg mb-4 relative pl-8">
              <span className="absolute left-0 text-[#4051ED] font-bold">
                Q
              </span>
              How can I track my order?
            </div>
            <div className="text-gray-500 text-sm relative pl-8 dark:text-gray-400">
              <span className="absolute left-0 text-green-500 font-bold">
                A
              </span>
              You can track your order by logging into your MarketHub account
              and navigating to the "Orders" section. There you'll find
              real-time tracking information and delivery status updates for all
              your purchases.
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="font-semibold text-lg mb-4 relative pl-8">
              <span className="absolute left-0 text-[#4051ED] font-bold">
                Q
              </span>
              What is your return policy?
            </div>
            <div className="text-gray-500 text-sm relative pl-8 dark:text-gray-400">
              <span className="absolute left-0 text-green-500 font-bold">
                A
              </span>
              MarketHub offers a 30-day return policy for most items. Products
              must be returned in their original condition with all packaging
              intact. Some product categories may have different return
              policies, which will be clearly noted on the product page.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
