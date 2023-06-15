import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Slider = () => {
  const slides = [
    {
      musicName: "Violin",
      imageSrc: "https://i.ibb.co/DYZvZGm/mandarin.jpg",
      quote: "Discover the rhythm of drums",
    },
    {
      musicName: "Guitar",
      imageSrc: "https://i.ibb.co/rb0xnV4/gabriel-gurrola-2-Uuh-MZEChdc-unsplash.jpg",
      quote: "Express your creativity through guitar",
    },
    {
      musicName: "Piano",
      imageSrc: "https://i.ibb.co/F7pPjRr/jonathan-chng-QKIc-W-4-Qlqw-unsplash.jpg",
      quote: "Unlock the magic of piano melodies",
    },
    {
      musicName: "Banjo",
      imageSrc: "https://i.ibb.co/WxWHTVp/hannah-busing-Vl-VAlw-AH2-E-unsplash.jpg",
      quote: "Explore the soulful sounds of the banjo",
    },
    {
      musicName: "Drum Lesson",
      imageSrc: "https://i.ibb.co/4fQ4nDT/drum.jpg",
      quote: "Feel the groove with drum beats",
    },
  ];
  return (
    <div className="my-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img src={slide.imageSrc} alt="" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                <h2 className="text-xl text-white font-extrabold text-center mb-3"> {slide.musicName}</h2>
                <p className="text-white text-2xl font-bold">
                 {slide.quote}
                </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
