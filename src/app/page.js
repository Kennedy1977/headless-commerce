"use client";
import BestSellers from "@/components/home/best-sellers/BestSellers";
import Hero from "@/components/home/hero/Hero";
import OurHistory from "@/components/home/our-history/OurHistory";
import CustomerReview from "../components/home/customer-review/CustomerReview";
import FAQ from "../components/home/faq/FAQ";

export default function Home() {
  return (
    <>
      <main>
        <Hero className="p-4 sm:p-12" />
        <BestSellers
          heading="Experience the Excellence of Our Top-Selling Meats"
          background="bg-[#e0d0c6]"
        />
        <OurHistory />
        <CustomerReview />
        <BestSellers
          heading="Discover the Delight
of Our Specialty Meats"
          background="bg-white"
        />
        <FAQ />
      </main>
    </>
  );
}
