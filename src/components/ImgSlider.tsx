/**
 * 
 * TODO:
 * 
 * 1. fix autoplay not running on startup
 * 
 */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface ImgItem {
  id: number,
  path: string,
  alt?: string,
}

interface IImgSliderProps {
  images: ImgItem[],
}

const ImgSlider: React.FC<IImgSliderProps> = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      modules={[Autoplay]}
      autoplay
      centeredSlides
      loop
      allowTouchMove={false}
    >
      {images.map(img =>
        <SwiperSlide key={img.id} style={{ width: "fit-content" }}>
          <img
            src={img.path}
            alt={img.alt}
            style={{ maxHeight: "600px", objectFit: "contain" }}
            width={"100%"}
            height={"100%"}
          />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default ImgSlider;