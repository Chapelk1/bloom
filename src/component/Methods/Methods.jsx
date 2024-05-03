import { Section } from "component/Helpers/Helpers.styled";
import { Title, SubTitle, Descr, Btn, Icon } from "./Methods.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import sprite from "assets/img/symbol-defs.svg";
import cards from "assets/data/cards.json";

function Methods() {
  return (
    <Section style={{ paddingTop: "160px" }}>
      <Title id="hello">the method to our madness</Title>
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween={24}
        className="methodSwiper"
        slidesPerView={3}
        centeredSlides={true}
        breakpoints={{
          320: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={card.title + index}>
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
