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
  Circle,
} from "./Partner.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./style.css";
import { EffectCards } from "swiper/modules";

function Partner({ position, photo, pad, data }) {
  let paddingLeft = 'auto';
  let initialSlide = 0;
  if (pad) {
    paddingLeft = pad;
    initialSlide = 4;
  }
  
    return (
      <Section style={{ paddingTop: "160px", paddingBottom: "160px" }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: paddingLeft,
          }}
        >
          {position === "left" && (
            <WrapSwiper style={{ marginRight: "33px" }}>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="partnerSwiper"
                cardsEffect={{
                  perSlideOffset: 8,
                  rotate: false,
                }}
                initialSlide={initialSlide}
              >
                <SwiperSlide>
                  <PhotoCard src={photo.monzo3} alt="Logo monzo" />
                </SwiperSlide>
                <SwiperSlide>
                  <PhotoCard src={photo.monzo2} alt="Logo monzo" />
                </SwiperSlide>
                <SwiperSlide>
                  <PhotoCard src={photo.monzo1} alt="Logo monzo" />
                </SwiperSlide>
                <SwiperSlide>
                  <PhotoCard src={photo.monzoDave} alt="Partner monzo" />
                </SwiperSlide>
              </Swiper>
              <Circle src={photo.circle} alt="circle" />
              <Arrow
                src={photo.arrow}
                alt="arrow"
                style={{ right: "-617px", bottom: "-161px" }}
              />
            </WrapSwiper>
          )}

          <Wrap>
            <Name>{data.name}</Name>
            <Position>{data.position}</Position>
            <Descr>{data.description}</Descr>
            <Text>{data.text}</Text>
            <Logo src={photo.monzoLogo} alt="" />
          </Wrap>

          {position === "right" && (
            <WrapSwiper style={{ marginRight: "16px" }}>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="partnerSwiper"
                cardsEffect={{
                  perSlideOffset: 8,
                  rotate: false,
                }}
                initialSlide={initialSlide}
              >
                <SwiperSlide>
                  <PhotoCard src={photo.googleJames} alt="Logo monzo" />
                </SwiperSlide>
                <SwiperSlide>
                  <PhotoCard src={photo.google3} alt="Logo monzo" />
                </SwiperSlide>
                <SwiperSlide>
                  <PhotoCard src={photo.google2} alt="Logo monzo" />
                </SwiperSlide>
                <SwiperSlide>
                  <PhotoCard src={photo.google1} alt="Partner monzo" />
                </SwiperSlide>
              </Swiper>
              <Circle src={photo.circle} alt="circle" />
              <Arrow
                src={photo.arrow}
                alt="arrow"
                style={{ right: "107px", bottom: "-274px" }}
              />
            </WrapSwiper>
          )}
        </Container>
      </Section>
    );
}

export default Partner;
