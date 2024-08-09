"use client";
import { Button } from "@/components/ui/button/Button";
import React from "react";
import HeroVideo from "@/components/home/hero-video/HeroVideo";

export default function Hero() {
  const hero = Math.floor(Math.random() * 5) + 1;

  return (
    <>
      <section className="lg:mb-16 flex w-full flex-col lg:flex-row lg:py-12 gap-12 place-content-center">
        <div className="lg:w-5/12 px-4 sm:px-12 pt-6 lg:px-0">
          <h1 className="text-center sm:text-left text-6xl font-light">
            Savour Our Premium Quality Meats...
          </h1>
          <p className="text-3xl mt-10 font-light">
            Welcome to Edmund Howdle Butchers, where heritage meets quality. We
            offer the finest cuts of meat, sourced from trusted farms and
            prepared with care. Experience the difference dedication brings to
            your table.
          </p>
          <div className="mt-8">
            <Button type="link" label="Explore our Range" callback="/shop/" />
          </div>
        </div>
        <div className="lg:w-5/12">
          <HeroVideo hero={hero} />
        </div>
      </section>
    </>
  );
}
