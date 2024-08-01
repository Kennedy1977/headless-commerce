/* eslint-disable @next/next/no-img-element */
import React from "react";

const CustomerReview = () => {
  const reviews = [
    {
      name: "John Doe",
      image: "john.webp",
      review:
        "Absolutely the best leg of lamb I've ever tasted! The quality and flavour are unmatched. I highly recommend Edmund Howdle Butchers.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "jane.webp",
      review:
        "Fantastic service and top-quality ribeye steaks. You can really taste the dedication in every bite. I'll definitely be coming back!",
      rating: 4.5,
    },
    {
      name: "Alex Brown",
      image: "alex.webp",
      review:
        "Brilliant quality and superb taste. Their filet mignon is exceptional, with attention to detail in every cut. Love Edmund Howdle Butchers!",
      rating: 5,
    },
  ];

  const renderReview = (review, index) => (
    <div
      key={index}
      className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
        index === 1 ? "lg:justify-end" : ""
      }`}
    >
      <div className="flex w-full justify-center sm:initial sm:w-auto">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
          <img
            src={review.image}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 max-w-sm relative">
        <span className="text-5xl text-white font-extrablack absolute -left-2 -top-2 leading-none">
          “
        </span>
        <p className="text-lg leading-relaxed font-medium ml-8 pr-4">
          {review.review}
        </p>

        <div className="flex items-center mt-2 ml-8">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-6 h-6 ${
                i < Math.floor(review.rating)
                  ? "text-yellow-500"
                  : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c-.656 0-1.312.417-1.563 1.125l-1.94 5.75-5.997.125c-.688.013-1.304.498-1.5 1.188-.196.688.042 1.407.563 1.875l4.72 3.063-1.407 5.75c-.156.688.042 1.437.563 1.875.521.438 1.333.542 1.937.25l5.28-3.25 5.28 3.25c.604.292 1.417.188 1.937-.25.521-.438.719-1.187.563-1.875l-1.406-5.75 4.72-3.063c.521-.469.759-1.188.563-1.875-.196-.688-.812-1.175-1.5-1.188l-5.998-.125-1.94-5.75c-.251-.708-.906-1.125-1.562-1.125z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#5e524a] px-8 md:px-12 lg:px-16 text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-6/12 flex items-center justify-center">
          <h2 className="text-5xl/snug font-extralight text-center">
            Customer Reviews and Testimonials
          </h2>
        </div>
        <div className="flex flex-col w-full lg:w-9/12 space-y-8 max-w-2xl gap-16">
          {reviews.map((review, index) => renderReview(review, index))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
