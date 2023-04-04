import React from "react";
import Image from "next/image";

const Banner = (props) => {
  return (
    <div className=" mx-auto relative lg:mb-20 z-20">
      <div className="p-4">
        <h1 className="text-6xl font-bold">
          <span className="">Coffee</span>{" "}
          <span className="text-cyan-600">Connoisseur</span>
        </h1>
        <p className="py-2 text-black md:text-black  font-bold text-2xl">
          Discover Your Local Shops!
        </p>
        <button
          className="bg-cyan-600 rounded-md text-white py-3 px-3 my-3 hover:opacity-80 font-bold"
          onClick={props.onButtonClick}
        >
          {props.buttonText}
        </button>
      </div>
      <div className="absolute -z-30 rounded-b-md rounded-tl-lg top-0  right-0 md:right-[0] opacity-60 lg:opacity-90">
        <Image
          className=""
          src="/static/coffee.jpg"
          alt="coffee shop  hero image"
          width={500}
          height={400}
          priority={true}
        />
      </div>
    </div>
  );
};

export default Banner;
