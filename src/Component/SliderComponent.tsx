import alaaKitchen from "../assets/SliderAlbum/alaakitchen.webp";
import nuclearalaa from "../assets/SliderAlbum/nuclearalaa.webp";
import slider1 from "../assets/SliderAlbum/slider1.webp";
import slider2 from "../assets/SliderAlbum/slider2.webp";
import slider3 from "../assets/SliderAlbum/slider3.webp";
import slider4 from "../assets/SliderAlbum/slider4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function SliderComponent() {
  return (
    <Swiper
      className="rounded-md w-[90%] md:w-full h-[600px] mt-5 lg:mt-0 lg:w-[100%]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src={alaaKitchen}
          className="w-full h-full object-cover object-center"
          alt="Alaa's Kitchen"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={nuclearalaa}
          className="w-full h-full object-cover object-center"
          alt="Nuclear Alaa"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider1}
          className="w-full h-full object-cover object-top"
          alt="Slider 1"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          className="w-full h-full object-cover object-center"
          alt="Slider 2"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          className="w-full h-full object-cover object-center"
          alt="Slider 3"
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider4}
          className="w-full h-full object-cover object-center"
          alt="Slider 4"
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderComponent;
