import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./assets/gits1.avif";
import image2 from "./assets/gits3.jpeg";
import image3 from "./assets/gits2.jpeg";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <i className="fa fa-arrow-right text-3xl text-white bg-yellow-300 bg-opacity-40 p-2"></i>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <i className="fa fa-arrow-left text-3xl text-white bg-yellow-300 bg-opacity-40 p-2"></i>
    </div>
  );
};

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const images = [image1, image2, image3];

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full sm:h-[40rem]  h-72" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SimpleCarousel;




