import alaaKitchen from "../assets/SliderAlbum/alaakitchen.jpg";
import nuclearalaa from "../assets/SliderAlbum/nuclearalaa.jpg";
import slider1 from "../assets/SliderAlbum/slider1.jpg";
import slider2 from "../assets/SliderAlbum/slider2.jpg";
import slider3 from "../assets/SliderAlbum/slider3.jpg";
import slider4 from "../assets/SliderAlbum/slider4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function SliderComponent() {
  return (
    <Swiper
      className="rounded-md w-[90%] h-[600px] mt-5 lg:mt-0 lg:w-[100%]"
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
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider1}
          className="w-full h-full object-cover object-top"
          alt="Slider 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          className="w-full h-full object-cover object-center"
          alt="Slider 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          className="w-full h-full object-cover object-center"
          alt="Slider 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider4}
          className="w-full h-full object-cover object-center"
          alt="Slider 4"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderComponent;
