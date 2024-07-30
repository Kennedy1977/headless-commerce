import ProductCard from "@/components/ui/product-card/ProductCard";

const products = [
  {
    image: "/path/to/image1.jpg", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-promo-red", label: "special offer" }, // optional
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
  {
    image: "/path/to/image2.jpg", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-white", label: "-" },
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
  {
    image: "/path/to/image3.jpg", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-promo-blue", label: "most popular" },
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
  {
    image: "/path/to/image4.jpg", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-promo-green", label: "new" },
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
];

function BestSellers() {
  return (
    <section className="py-16  bg-orange-100">
      <div className="flex w-full flex-row lg:flex-row place-content-center">
        <h2 className="text-4xl/normal mulish-500 max-w-[450px] mb-12">
          Experience the Excellence of Our Top-Selling Meats
        </h2>
      </div>
      <div className="px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              description={product.description}
              promotion={product.promotion}
              price={product.price}
              pricePerKg={product.pricePerKg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
