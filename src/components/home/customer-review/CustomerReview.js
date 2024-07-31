import React from "react";

const CustomerReview = () => {
  const reviews = [
    {
      name: "John Doe",
      image: "/path/to/john-image.jpg",
      review:
        "Absolutely the best leg of lamb I've ever tasted! The quality and flavour are unmatched. I highly recommend Edmund Howdle Butchers.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "/path/to/jane-image.jpg",
      review:
        "Fantastic service and top-quality ribeye steaks. You can really taste the dedication in every bite. I'll definitely be coming back!",
      rating: 4.5,
    },
    {
      name: "Alex Brown",
      image: "/path/to/alex-image.jpg",
      review:
        "Brilliant quality and superb taste. Their filet mignon is exceptional, with attention to detail in every cut. Love Edmund Howdle Butchers!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-[#5e524a] px-8 md:px-12 lg:px-16 text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-3/12 flex items-center justify-center">
          <h2 className="text-4xl font-extralight text-center">
            Customer Reviews and Testimonials
          </h2>
        </div>
        <div className="w-full lg:w-9/12 space-y-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg leading-relaxed font-medium">
                  <span className="text-2xl font-bold text-yellow-500">“</span>
                  {review.review}
                  <span className="text-2xl font-bold text-yellow-500">”</span>
                </p>
                <div className="flex items-center mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(review.rating)
                          ? "text-yellow-500"
                          : "text-gray-500"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
