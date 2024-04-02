import {
  Title,
  WrapText,
  SubTitle,
  Posiition,
  Descr,
  Text,
  Logo,
  WrapPhoto,
  Photo,
} from "./Maintaining.styled";
import { Section, Container } from "component/Helpers/Helpers.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style-swiper.css";
import vivienne from "assets/img/vivienne.jpg";
import img from "assets/img/IMAGE-07.jpg";
import logo from "assets/img/bumble.png";
function Maintaining() {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      switch (index) {
        case 0:
          return '<span class="' + className + '">' + "Product" + "</span>";

        case 1:
          return '<span class="' + className + '">' + "Engineering" + "</span>";
      }
    },
  };

  return (
    <Section style={{ padding: "161px 0 0 0" }}>
      <Container>
        <Title>
          bloom support and enable early stage startups, scaleups and leading
          global tech giants to build and nurture high-performing
        </Title>

        <Swiper
          effect={"fade"}
          // spaceBetween={50}
          pagination={pagination}
          modules={[Pagination, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <WrapText>
              <SubTitle>Vivienne Sung</SubTitle>
              <Posiition>VP Product</Posiition>
              <Descr>Mum of 2, Peloton junkie and bibliophile</Descr>
              <Text>
                Sam worked across a mix of Senior and Staff product manager
                roles, bringing in extremely high quality candidates across the
                board, several of which we hired. Sam was an absolute
              </Text>
              <Logo src={logo} alt="bumble" />
            </WrapText>
            <WrapPhoto>
              <Photo src={vivienne} alt="person" />
            </WrapPhoto>
          </SwiperSlide>
          <SwiperSlide>
            <WrapText>
              <SubTitle>Lorem, ipsum.</SubTitle>
              <Posiition>Lorem, ipsum dolor.</Posiition>
              <Descr>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Descr>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptatem aspernatur sed amet magni! Repellat ducimus dolorum
                consequatur ex expedita!
              </Text>
              <Logo src={logo} alt="bumble" />
            </WrapText>
            <WrapPhoto>
              <Photo src={img} alt="person" />
            </WrapPhoto>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Section>
  );
}

export default Maintaining;
