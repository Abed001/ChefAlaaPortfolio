import { Scrollbar, A11y } from "swiper/modules";
import alaaKitchen from "../assets/alaakitchen.jpg";
import nuclearalaa from "../assets/nuclearalaa.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

function SliderComponent() {
  return (
    <Swiper
      className="rounded-md w-[90%] mt-5 lg:mt-0 lg:w-[50%]"
      // install Swiper modules
      modules={[Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={alaaKitchen} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={nuclearalaa} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={alaaKitchen} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={nuclearalaa} />
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderComponent;
