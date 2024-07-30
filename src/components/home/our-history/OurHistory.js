import ImageAsset from "@/components/ui/image-asset/ImageAsset";

function OurHistory() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="flex w-full flex-col lg:flex-row place-content-center">
          <h2 className="text-4xl/normal mulish-500 max-w-[450px] mb-12">
            Our history and values...
          </h2>
        </div>
        <div className="w-4/12 min-4/12">
          <ImageAsset
            
            src="/family.webp"
            alt="1935 butchers in old-fashioned shop with hanging meats and tools"
          />
        </div>
      </section>
    </>
  );
}

export default OurHistory;
