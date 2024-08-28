import FeaturedProducts from "@/components/home/featured-products/FeaturedProducts";
import Link from "next/link";

export default function Shop() {
  return (
    <div>
      <header className="bg-white">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
        </div>
      </header>

      <div className="">
        <div className="px-4 sm:px-0">
          <div className="">
            <h2 className="text-3xl font-extralight text-center mt-6">
              Welcome to Our Shop
            </h2>
            <p className="text-center mt-4 text-lg max-w-[768px] mx-auto">
              Welcome to The Family Butcher! Since 1935, we have been a
              cherished part of the community, providing top-quality meats that
              you can trust. Our selection includes the finest lamb, pork, beef,
              chicken, and more, perfect for any meal or occasion. Whether you
              are planning a cozy family dinner or a festive celebration, you
              will find the perfect cut here. Our commitment to excellence means
              you always get the best. Come and experience the warmth and
              tradition of The Family Butcher - where quality meats meet genuine
              service.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/shop/category1">
                <div className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">
                  Category 1
                </div>
              </Link>
              <Link href="/shop/category2">
                <div className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">
                  Category 2
                </div>
              </Link>
              <Link href="/shop/category3">
                <div className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">
                  Category 3
                </div>
              </Link>
            </div>
          </div>
        </div>
        <FeaturedProducts />
      </div>
    </div>
  );
}
