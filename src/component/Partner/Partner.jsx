import { Section, Container } from "component/Helpers/Helpers.styled";
import {
  Wrap,
  Name,
  Position,
  Descr,
  Text,
  Logo,
  Arrow,
} from "./Partner.styled";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./style.css";
import { EffectCards } from "swiper/modules";
import logo from "assets/img/monzo.png";
import arrow from "assets/img/arrow-bottom-1.png";
function Partner() {
  return (
    <Section style={{ paddingTop: "166px", paddingBottom: "57px" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "70px",
        }}
      >

        <Swiper
          loop={true}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="partnerSwiper"
          cardsEffect={{
            perSlideOffset: 8,
            rotate: false,
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        
        <Wrap>
          <Name>Dave Richardson</Name>
          <Position>Director of Recruitment</Position>
          <Descr>Collector of Vinyls & Exterior Decorator</Descr>
          <Text>
            I've partnered with bloom twice, at Deliveroo and Monzo, & both
            times they have been really successful. Partnering with bloom is
            effortless, seamless and most importantly{" "}
            <span>fun, they just get it !</span>
          </Text>
          <Logo src={logo} alt="" />
          <Arrow src={arrow} alt="arrow" />
        </Wrap>
      </Container>
    </Section>
  );
}

export default Partner;
