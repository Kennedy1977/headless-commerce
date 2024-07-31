/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";

const ImageAsset = ({ src, alt, constrain }) => {
  const imgRef = useRef();

  const handleError = () => {
    imgRef.current.src = "/no-image.svg";
  };

  return (
    <img
      ref={imgRef}
      className={`w-full object-cover rounded-t-lg ${constrain && "h-48"}`}
      src={src}
      alt={alt}
      onError={() => handleError()}
      loading="lazy"
      aria-label={alt}
    />
  );
};

export default ImageAsset;
