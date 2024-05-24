import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import your images
import image1 from '/Wipro_Logo.png';
import image2 from '/byjus.png';
import image3 from '/Honeywell.png';
import image4 from '/ICICI_Bank.png';
import image5 from '/Reliance-Jio.png';
import image6 from '/TCI_logo.png';
import image7 from '/MetaCube_logo.png';
// Import other images as needed...

// SwiperCore.use([Autoplay]);

const Patner = () => {
  const settings = {
    spaceBetween: 60,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    className: "mySwiper",
    loop: true
  }

  // Array of imported images
  const slideData = [
    // "/byjus.png",
    // "/byjus.png",
    // "/byjus.png",
    // "/byjus.png",
    // "/byjus.png",
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,


    // Add other imported images here...
  ];

  return (
    <>
      <div className="w-full bg-white flex overflow-x-auto">
        <Swiper {...settings} slidesPerView={5}>
          {slideData.map((imageUrl, idx) => (
            <SwiperSlide key={idx}>
              <img src={imageUrl} alt={`Slide ${idx}`} className="w-auto max-w-xs sm:max-w-sm sm:w-[250px] h-[120px] sm:h-[16rem] sm:gap-4  mx-auto pt-4 pb-10" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Patner;


