"use client";
import BestSellers from "@/components/home/best-sellers/BestSellers";
import Hero from "@/components/home/hero/Hero";
import OurHistory from "@/components/home/our-history/OurHistory";
import CustomerReview from "../components/home/customer-review/CustomerReview";

export default function Home() {
  return (
    <>
      <main>
        <Hero className="px-12 py-12" />
        <BestSellers />
        <OurHistory />
        <CustomerReview />
      </main>
    </>
  );
}
