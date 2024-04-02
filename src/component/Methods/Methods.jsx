import { Section } from "component/Helpers/Helpers.styled";
import { Title, SubTitle, Descr, Btn, Icon } from "./Methods.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import sprite from "assets/img/symbol-defs.svg";
import cards from "assets/data/cards.json";

function Methods() {
  return (
    <Section style={{ paddingTop: "160px" }}>
      <Title>the method to our madness</Title>
      <Swiper
        loop={true}
        spaceBetween={24}
        className="methodSwiper"
        slidesPerView={3}
        centeredSlides={true}
      >
        {cards.map((card) => (
          <SwiperSlide>
            <SubTitle>{card.title}</SubTitle>
            <Descr>{card.text}</Descr>
            <Btn>
              <Icon>
                <use href={sprite + "#icon-add"}></use>
              </Icon>
            </Btn>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default Methods;
