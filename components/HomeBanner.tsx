import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
        <Title className="text-3xl md:text-4xl font-integral font-bold text-center max-w-[800px]">
          Find Your Style, Embrace Your Confidence!
        </Title>
        <p className="text-sm text-center text-lightColor/80 font-medium font-agrandir max-w-[480px]">Elevate your fashion game with our latest collection. From trendy essentials to timeless classics, find everything you need to express your unique style. Shop now and step into a world of fashion!</p>
    </div>
  );
};

export default HomeBanner;