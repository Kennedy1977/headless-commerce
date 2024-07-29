import React from "react";

const lg =
  "lg:fixed lg:top-16 lg:left-0 lg:w-full lg:bg-gray-50 lg:flex-row lg:gap-12 lg:p-12 lg:border-t-2 lg:shadow-md";

function ShopNav() {
  return (
    <section className={`flex flex-col px-2 py-3 space-y-3 ${lg}`}>
      <div className="lg:basis-32 lg:flex-grow space-y-3">
        <h2 className="lg:font-bold">Beef</h2>
        <ul className="hidden lg:block">
          <li>Steaks</li>
          <li>Roasts</li>
          <li>Mince</li>
          <li>Other Cuts</li>
        </ul>
      </div>
      <div className="lg:basis-32 lg:flex-grow">
        <h2 className="lg:font-bold">Beef</h2>
        <ul className="hidden lg:block">
          <li>Steaks</li>
          <li>Roasts</li>
          <li>Mince</li>
          <li>Other Cuts</li>
        </ul>
      </div>
      <div className="lg:basis-32 lg:flex-grow">
        <h2 className="lg:font-bold">Beef</h2>
        <ul className="hidden lg:block">
          <li>Steaks</li>
          <li>Roasts</li>
          <li>Mince</li>
          <li>Other Cuts</li>
        </ul>
      </div>
      <div className="lg:basis-32 lg:flex-grow">
        <h2 className="lg:font-bold">Beef</h2>
        <ul className="hidden lg:block">
          <li>Steaks</li>
          <li>Roasts</li>
          <li>Mince</li>
          <li>Other Cuts</li>
        </ul>
      </div>
      <div className="lg:basis-32 lg:flex-grow">
        <h2 className="lg:font-bold">Beef</h2>
        <ul className="hidden lg:block">
          <li>Steaks</li>
          <li>Roasts</li>
          <li>Mince</li>
          <li>Other Cuts</li>
        </ul>
      </div>
      {/* Add other categories similarly */}
    </section>
  );
}

export default ShopNav;
