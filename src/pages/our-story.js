import Link from "next/link";

export default function OurStory() {
  return (
    <>
      <article className="max-w-screen-xl mx-auto px-12 py-16 text-lg leading-relaxed bg-gray-50 rounded-lg shadow-md">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">
            Welcome to Edmund Howdle Butchers
          </h1>
          <p className="text-gray-700">
            Established in 1935, Edmund Howdle Butchers is a family-run business
            that takes pride in upholding traditional values while serving the
            finest quality meats to our valued customers at exceptional prices.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Choose Edmund Howdle Butchers?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Quality Produce:</strong> Our reputation is built on
              providing tender, delicious meat and poultry using time-honored
              methods.
            </li>
            <li>
              <strong>Traditional and Contemporary Cuts:</strong> We specialize
              in traditional meats like naturally reared beef, pork, and lamb,
              as well as contemporary cuts for the emerging gourmet market.
            </li>
            <li>
              <strong>Price Promise:</strong> We guarantee to be cheaper than
              all other butchers and major retailers.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Location and Service Area
          </h2>
          <p className="text-gray-700">
            Based in the picturesque village of Clayhanger, Brownhills, near
            Walsall, we have proudly served the community for over 80 years. Our
            loyal customers come from across the West Midlands, including
            Birmingham, Walsall, Wolverhampton, and Stafford.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Our Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Supply and Delivery:</strong> We supply and deliver to
              many reputable hotels, restaurants, pubs, cafes, and garden
              centers throughout the West Midlands.
            </li>
            <li>
              <strong>Free Local Delivery:</strong> Enjoy FREE LOCAL DELIVERY
              within 20 miles of our shop.
            </li>
            <li>
              <strong>Click and Collect:</strong> Convenient click and collect
              service available.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Do you have questions about our produce or need a quote? Our
            friendly, experienced butchers are here to help!
          </p>
          <ul className="text-gray-700 space-y-4">
            <li>
              <strong>Phone:</strong> Call us at{" "}
              <Link
                href="tel:01543375046"
                className="text-blue-500 hover:underline"
              >
                01543 375 046
              </Link>
            </li>
            <li>
              <strong>Visit Us:</strong> Drop by our shop: 38 High St,
              Clayhanger, Walsall WS8 7EA, UK
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:sales@edmundhowdle.co.uk"
                className="text-blue-500 hover:underline"
              >
                Contact Us (sales@edmundhowdle.co.uk)
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          <dl className="text-gray-700 space-y-8">
            <div>
              <dt className="font-semibold">
                What types of meat do you offer?
              </dt>
              <dd className="ml-6">
                We offer a wide range of traditional meats including beef, pork,
                and lamb, alongside contemporary cuts.
              </dd>
            </div>

            <div>
              <dt className="font-semibold">Do you deliver?</dt>
              <dd className="ml-6">
                Yes, we offer FREE LOCAL DELIVERY within 20 miles of our shop
                and a convenient click and collect service.
              </dd>
            </div>

            <div>
              <dt className="font-semibold">How do I get a quote?</dt>
              <dd className="ml-6">
                Simply give us a call or send an email, and one of our
                experienced butchers will be happy to assist you.
              </dd>
            </div>
          </dl>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Customer Testimonials
          </h2>
          <blockquote className="border-l-4 border-gray-500 pl-4 mb-8 text-gray-700">
            <p className="italic">
              &lquote;The best butcher in the West Midlands! Quality meats at
              great prices.&rquote;
            </p>
            <footer>- Sarah, Birmingham</footer>
          </blockquote>
          <blockquote className="border-l-4 border-gray-500 pl-4 text-gray-700">
            <p className="italic">
              &lquote;Edmund Howdle Butchers never disappoints. Their service
              and produce are top-notch.&rquote;
            </p>
            <footer>- Mark, Wolverhampton</footer>
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Stay Connected
          </h2>
          <p className="text-gray-700">
            Follow us on social media for the latest updates and special offers:
          </p>
          <ul className="flex space-x-4 mt-6 text-gray-700">
            <li>
              <Link
                href="https://facebook.com"
                className="text-blue-500 hover:underline"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                className="text-blue-500 hover:underline"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Accessibility
          </h2>
          <p className="text-gray-700">
            We strive to make our services accessible to everyone. If you have
            any special requirements, please let us know, and we will do our
            best to accommodate you.
          </p>
        </section>

        <footer className="text-center text-gray-600 mt-12">
          <p>
            Edmund Howdle Butchers - Proudly serving the West Midlands since
            1935.
          </p>
        </footer>
      </article>
    </>
  );
}
