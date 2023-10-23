"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

interface Props {
  data: {
    title: string;
    image: string;
  }[];
}

const Slider: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Swiper
        breakpoints={{
          520: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="pb-12">
            <div className="relative aspect-square w-full">
              <Image
                fill
                src={item.image}
                alt={item.title}
                className="object-cover object-center rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
