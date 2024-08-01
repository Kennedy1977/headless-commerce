import React, { useState } from "react";
import Link from "next/link";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Where do you source your meat from?",
      answer:
        "We source our meat from trusted local farms that follow ethical and sustainable farming practices. Each farm is carefully selected to ensure the highest quality and freshness for our customers.",
    },
    {
      question: "What are your delivery options?",
      answer:
        "We offer a range of delivery options to suit your needs, including next-day delivery for orders placed before 2 PM. We also provide free delivery for orders over a certain amount.",
    },
    {
      question: "Do you offer custom meat cuts?",
      answer:
        "Yes, we offer custom meat cuts to meet your specific requirements. Please contact us with your preferences, and we will be happy to assist you.",
    },
    {
      question: "How should I store my meat?",
      answer:
        "To ensure the best quality, store your meat in the refrigerator at a temperature of 0-4°C. For longer storage, you can freeze the meat, ensuring it is properly sealed to prevent freezer burn.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-24 bg-gray-900 px-8 md:px-12 lg:px-16 text-white">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extralight mb-6 sm:mb-12">
          Frequently Asked Questions:
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl">{open === index ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="mt-4 text-gray-300 pr-12">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/faq/"
            className="inline-block px-6 py-2 border border-white text-base font-medium rounded-full shadow-sm text-white  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            More Frequently Asked Questions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
