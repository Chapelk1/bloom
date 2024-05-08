import { Section, Container } from "component/Helpers/Helpers.styled";
import { Text, Name, Position, Descr,Title, Btn, Icon } from "./Support.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import cards from 'assets/data/supportCards.json'
import sprite from 'assets/img/symbol-defs.svg'
function Support() {
  return (
    <Section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Container>
        <Text>
          We discover and nurture ambitious people to help grow their careers,
          matching them to incredible businesses and mentors, so that together
          they can bloom.
        </Text>
      </Container>

      <Swiper
        grabCursor={true}
        loop={true}
        className="supportSwiper"
        breakpoints={{
          320: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 24,
            slidesPerView: 3,
          },
          1440: {
            spaceBetween: 24,
            slidesPerView: 4,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.name}>
            <Name>{card.name}</Name>
            <Position>{card.position}</Position>
            <Descr>{card.description}</Descr>
          </SwiperSlide>
        ))}
      </Swiper>

      <Title id="founders">Right people, right place, right time.</Title>
      <Btn>
        Meet Sam & Alex
        <Icon>
          <use href={sprite + "#icon-arrow"}></use>
        </Icon>
      </Btn>
    </Section>
  );
}
export default Support;
