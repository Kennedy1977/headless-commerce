import ProductCard from "@/components/ui/product-card/ProductCard";

const products = [
  {
    image: "/meat.webp", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-promo-red", label: "special offer" }, // optional
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
  {
    image: "/meat.webp", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-white", label: "-" },
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
  {
    image: "/meat.webp", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-promo-blue", label: "most popular" },
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
  {
    image: "/meat.webp", // replace with the actual image path
    description: "Beef Ribeye Steak",
    promotion: { promo: "bg-promo-green", label: "new" },
    price: "£19.00",
    pricePerKg: "£14.00/kg",
  },
];

function FeaturedProducts({ heading, background, width = "450" }) {
  return (
    <section className={`px-4 py-16 ${background}`}>
      <div className="flex w-full flex-row lg:flex-row place-content-center">
        <h2
          className={`text-center font-extralight text-4xl/normal mb-12 max-w-[${width}px]`}
        >
          {heading}
        </h2>
      </div>
      <div className="px-12 lg:px-24 xl:px-48">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-6">
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

export default FeaturedProducts;
