import ImageAsset from "@/components/ui/image-asset/ImageAsset";
import { Button } from "@/components/ui/button/Button";

function OurHistory() {
  return (
    <>
      <section className="py-16 bg-slate-800 px-8 md:px-12 lg:px-16 text-white xl:min-h-[768px]">
        <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-16 place-content-start">
          <div className="w-full lg:w-6/12 image-mask opacity-70 order-last lg:order-first">
            <ImageAsset
              src="/family-3.webp"
              alt="1935 butchers in old-fashioned shop with hanging meats and tools"
            />
          </div>
          <div className="mt-8 w-full lg:w-5/12 xl:w-6/12 flex flex-col justify-start lg:max-h-96 xl:max-h-fit overflow-y-auto">
            <h2 className="text-5xl font-extralight mb-6">
              Our history and values...
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-medium">
              Established in 1935, Edmund Howdle Butchers is a family-run
              business that takes pride in upholding traditional values while
              serving the finest quality meats to our valued customers at
              exceptional prices.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-medium">
              Based in the village of Clayhanger, Brownhills near Walsall, we
              have established a loyal following from over 80 years of service.
              We use time-honored methods to provide tender, delicious meat and
              poultry. We specialize in all of the traditional meats, including
              naturally reared beef, pork, and lamb, alongside contemporary cuts
              for the emerging gourmet market. Our price promise means that we
              guarantee to be cheaper than all other butchers and major
              retailers.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-medium">
              We supply and deliver to many reputable hotels, restaurants, pubs,
              cafes, and garden centers based in and around the West Midlands,
              including Birmingham, Walsall, Wolverhampton, and Stafford.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Discover the finest meats at Edmund Howdle Butchers and taste the
              difference that tradition and quality make. Visit us in
              Clayhanger, Brownhills, or contact us to learn more about our
              products and services.
            </p>
            <div className="mt-8">
              <Button type="link" label="Explore our Range" callback="/shop/" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurHistory;
