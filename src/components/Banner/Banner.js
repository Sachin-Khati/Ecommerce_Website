import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from "../../assets/images";
import Image from "../designLayouts/Image";

const Banner = () => {
  const [activeDot, setActiveDot] = useState(0);

  const images = [bannerImgOne, bannerImgTwo, bannerImgThree];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setActiveDot(next),

    appendDots: (dots) => (
      <div className="absolute top-1/2 left-5 -translate-y-1/2">
        <ul className="m-0 p-0">{dots}</ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        className={`w-8 cursor-pointer py-2 ${
          i === activeDot ? "text-black border-r-4 border-black" : "text-transparent border-r-4 border-white"
        }`}
      >
        0{i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 576,
        settings: {
          appendDots: (dots) => (
            <div className="absolute top-1/2 left-2 -translate-y-1/2">
              <ul>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-6 text-xs cursor-pointer ${
                i === activeDot ? "text-black border-r-4 border-black" : "text-transparent border-r-4 border-white"
              }`}
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {images.map((src, index) => (
          <Link key={index} to="/offer">
            <div>
              <Image imgSrc={src} />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
