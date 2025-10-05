import plates from "../../plates.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function PlatesSlider() {
  return (
    <Swiper
      className=" h-[400px] lg:h-[500px] mb-10 flex justify-items-center lg:bg-button-bg rounded-md w-[100%] md:w-full mt-5 lg:w-[100%]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      breakpoints={{
        320: { slidesPerView: 1 }, // phones
        640: { slidesPerView: 2 }, // small tablets
        1024: { slidesPerView: 3 }, // desktops
        1440: { slidesPerView: 4 }, // large screens
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {plates.map((plate, index) => (
        <SwiperSlide key={index}>
          <img
            src={plate.src}
            className="size-full rounded-4xl p-4 object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PlatesSlider;
