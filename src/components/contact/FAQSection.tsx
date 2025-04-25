import React from 'react'
import FAQItem from './FAQItem'
import  faqs  from "../../../data/faq.json"


function FAQSection() {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-black py-16">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default FAQSection