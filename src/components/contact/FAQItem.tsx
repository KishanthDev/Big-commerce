import React from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
  }

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="font-semibold text-lg mb-4 relative pl-8">
        <span className="absolute left-0 text-[#4051ED] font-bold">Q</span>
        {question}
      </div>
      <div className="text-gray-500 text-sm relative pl-8 dark:text-gray-400">
        <span className="absolute left-0 text-green-500 font-bold">A</span>
        {answer}
      </div>
    </div>
  );

export default FAQItem;