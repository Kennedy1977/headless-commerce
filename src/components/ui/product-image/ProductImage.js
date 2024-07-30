/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";

const ProductImage = ({ src, alt }) => {
  const imgRef = useRef();

  const handleError = () => {
    imgRef.current.src = "/no-image.svg";
  };

  return (
    <img
      ref={imgRef}
      className="w-full h-48 object-cover rounded-t-lg"
      src={src}
      alt={alt}
      onError={() => handleError()}
      loading="lazy"
      aria-label={alt}
    />
  );
};

export default ProductImage;
