import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import A from "../../assets/check.png";
import B from "../../assets/community.png";
import C from "../../assets/typetest.png";
import D from "../../assets/logo.png";

const StyledSwiper = styled(SwiperComponent)`
  .banner {
    width: 600px; 
    height: 300px;
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
`;

function SwipeBanner() {
  return (
    <>
      <StyledSwiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <img src={A} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={B} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={C} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={D} alt="Slide 4" />
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
}

export default SwipeBanner;
