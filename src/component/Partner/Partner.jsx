import { Section, Container } from "component/Helpers/Helpers.styled";
import {
  Wrap,
  WrapSwiper,
  Name,
  Position,
  Descr,
  Text,
  Logo,
  Arrow,
  PhotoCard,
} from "./Partner.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./style.css";
import { EffectCards } from "swiper/modules";
import monzoPhoto from 'assets/img/monzo'
function Partner() {
  return (
    <Section style={{ paddingTop: "185px", paddingBottom: "166px" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "70px",
        }}
      >
        <WrapSwiper>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="partnerSwiper"
            cardsEffect={{
              perSlideOffset: 8,
              rotate: false,
            }}
            initialSlide={4}
          >
            <SwiperSlide>
              <PhotoCard src={monzoPhoto.monzo3} alt="Logo monzo" />
            </SwiperSlide>
            <SwiperSlide>
              <PhotoCard src={monzoPhoto.monzo2} alt="Logo monzo" />
            </SwiperSlide>
            <SwiperSlide>
              <PhotoCard src={monzoPhoto.monzo1} alt="Logo monzo" />
            </SwiperSlide>
            <SwiperSlide>
              <PhotoCard src={monzoPhoto.monzoDave} alt="Partner monzo" />
            </SwiperSlide>
          </Swiper>
        </WrapSwiper>

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
          <Logo src={monzoPhoto.monzoLogo} alt="" />
          <Arrow src={monzoPhoto.arrow} alt="arrow" />
        </Wrap>
      </Container>
    </Section>
  );
}

export default Partner;
