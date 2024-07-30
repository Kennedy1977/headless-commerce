/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageAsset from "../image-asset/ImageAsset";
import { ProductPromo } from "../product-promo/ProductPromo";

const ProductCard = ({ image, description, promotion, price, pricePerKg }) => {
  return (
    <div className="min-w-[260px] max-w-[320px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
      <ImageAsset src={image} alt={description} />
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2 text-left">{description}</h4>
        <ProductPromo props={promotion} />
        <div className="text-2xl font-bold text-gray-900">{price}</div>
        <div className="text-gray-600 text-sm">({pricePerKg})</div>
        <button className="w-full mt-4 py-2 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
