import { Section,Container, Title, Text, Wrap,WrapLogo, PartnerLogo } from "./Hero.styled";
import photo from "assets/img/Hero";
function Hero() {
  return (
    <Section bgi={[photo.heroPhotoOne, photo.heroPhotoTwo]}>
      <Container>
        <Title>
          Discover, <span>nurture, bloom</span>
        </Title>
        <Text>
          Product & Engineering Recruitment
          <span>va va bloom, with a human touch and a dash of</span>
        </Text>
      </Container>
      <Wrap>
        <WrapLogo>
          <PartnerLogo src={photo.partner1} alt="" />
          <PartnerLogo src={photo.partner2} alt="" />
          <PartnerLogo src={photo.partner3} alt="" />
          <PartnerLogo src={photo.partner4} alt="" />
          <PartnerLogo src={photo.partner5} alt="" />
          <PartnerLogo src={photo.partner6} alt="" />
        </WrapLogo>
      </Wrap>
    </Section>
  );
}

export default Hero;
