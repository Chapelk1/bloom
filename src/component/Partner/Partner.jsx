import {Section,
  Container,
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

function Partner({ position, photo, data }) {
  let initialSlide = 0;
  if (position === 'left') {
    initialSlide = 4;
  }
  
    return (
      <Section>
        <Container position={position}>
          <WrapSwiper position={position}>
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
                <PhotoCard src={photo[5]} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <PhotoCard src={photo[4]} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <PhotoCard src={photo[3]} alt="Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <PhotoCard src={photo[2]} alt="Partner" />
              </SwiperSlide>
            </Swiper>
            <Circle src={photo[6]} alt="circle" />
            <Arrow src={photo[1]} alt="arrow" position={position} />
          </WrapSwiper>

          <Wrap>
            <Name>{data.name}</Name>
            <Position>{data.position}</Position>
            <Descr>{data.description}</Descr>
            <Text>{data.text}</Text>
            <Logo src={photo[0]} alt="" />
          </Wrap>
        </Container>
      </Section>
    );
}

export default Partner;
