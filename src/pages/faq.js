import Link from "next/link";
import React, { useState } from "react";

const FAQs = () => {
  const [open, setOpen] = useState(null);

  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "Where do you source your meat from?",
          answer:
            "We source our meat from trusted local farms across the UK that follow ethical and sustainable farming practices. Each farm is carefully selected to ensure the highest quality and freshness for our customers.",
        },
        {
          question: "Do you offer custom meat cuts?",
          answer:
            "Yes, we offer custom meat cuts to meet your specific requirements. Please contact us with your preferences, and we will be happy to assist you.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, your personal information is secure. We use advanced encryption technologies and follow strict data protection regulations to ensure your privacy is maintained.",
        },
      ],
    },
    {
      category: "Shipping and Delivery",
      questions: [
        {
          question: "What are your delivery options?",
          answer:
            "We offer a range of delivery options to suit your needs, including next-day delivery for orders placed before 2 PM. We also provide free delivery for orders over a certain amount. Please note that delivery times may vary based on your location within the UK.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, you can track your order. Once your order is dispatched, you will receive a tracking number via email, which you can use to monitor the delivery status.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Currently, we only offer shipping within the UK. We are working on expanding our services to international customers in the near future.",
        },
      ],
    },
    {
      category: "Returns and Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 14-day return policy for non-perishable items. For perishable goods, please contact our customer service team within 24 hours of delivery if there is an issue with your order. We strive to ensure all our products meet the highest quality standards.",
        },
        {
          question: "How do I return a defective item?",
          answer:
            "If you receive a defective item, please contact our customer service team immediately. We will arrange for a replacement or a refund as per your preference.",
        },
        {
          question: "Can I exchange my order?",
          answer:
            "Yes, you can exchange your order. Please contact our customer service team with your order details, and we will guide you through the process.",
        },
      ],
    },
    {
      category: "Payment and Security",
      questions: [
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept various payment methods, including Visa, MasterCard, American Express, PayPal, and Apple Pay. All transactions are securely processed to ensure your personal information is protected.",
        },
        {
          question: "Is your site secure?",
          answer:
            "Yes, our site is secure. We use advanced SSL encryption to protect your data and ensure your transactions are safe.",
        },
      ],
    },
    {
      category: "Customer Support",
      questions: [
        {
          question: "How do I contact customer support?",
          answer:
            "You can contact our customer support team via email at support@edmundhowdlebutchers.co.uk or call us at 0800 123 456 during our business hours, Monday to Friday, 9 AM to 5 PM.",
        },
        {
          question: "Do you have a physical store location?",
          answer:
            "Yes, we have a physical store located at 123 High Street, Clayhanger, Brownhills. Feel free to visit us during our business hours.",
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-24 bg-white px-8 md:px-12 lg:px-16 text-gray-900">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extralight mb-6 sm:mb-12">
          Frequently Asked Questions:
        </h2>
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h3 className="text-xl sm:text-3xl font-light mb-4">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.questions.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <button
                    onClick={() => toggleFAQ(`${catIndex}-${index}`)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="text-2xl">
                      {open === `${catIndex}-${index}` ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      open === `${catIndex}-${index}`
                        ? "max-h-screen"
                        : "max-h-0"
                    }`}
                  >
                    <div className="mt-4 text-gray-600 pr-12">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-12">
          <p className="text-lg font-medium text-gray-700">
            If you have a specific question not covered above, please contact us
            directly on{" "}
            <Link
              href="tel:01543375046"
              className="font-extrabold hover:underline"
            >
              01543 375046
            </Link>
            . We are here to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
