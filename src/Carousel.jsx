import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "/clg_b.jpg";
import image2 from "/gits_nba.jpeg";
import image3 from "/Slide_Corporate.jpeg";
import image4 from "/Slide_Placement.jpeg";
import image5 from "/slide5.jpg";
import image6 from "/slide14.jpg";
import image7 from "/m_banner.jpeg";




const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <i className="fa fa-arrow-right text-3xl sm:xl text-white text-opacity-60  bg-[#706b5d] bg-opacity-40 lg:p-2 sm:p-1"></i>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <i className="fa fa-arrow-left text-3xl sm:xl text-white text-opacity-60 bg-[#706b5d]  bg-opacity-40 lg:p-2 sm:p-1"></i>
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
            <img src={src} alt={`Slide ${index + 1}`} className="w-full  sm:h-[40rem]  h-72" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SimpleCarousel;




