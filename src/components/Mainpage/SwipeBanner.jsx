import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import A from "../../assets/Mainpage/Banner/chicago.jpg";
import B from "../../assets/Mainpage/Banner/aqa.jpg";
import C from "../../assets/Mainpage/Banner/lucy.jpg";
import D from "../../assets/Mainpage/Banner/epl.jpg";

const Swiper = styled(SwiperComponent)`
  .banner {
    width: 100%;
    height: 100%;
    border-radius: 20px; 
    overflow: hidden;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 8px;
    height: 8px;
    color: black;
  }

  .swiper-pagination-bullet {
    background-color: black;
  }

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}
`;

const SlideImage = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
`;

function SwipeBanner() {
  return (
    <>
      <Swiper
        className="banner"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
      >
        <SwiperSlide>
          <SlideImage src={A} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={B} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={C} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage src={D} alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );

}

export default SwipeBanner;
