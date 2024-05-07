import styled from "@emotion/styled";
export const Section = styled.div`
  padding: 80px 0;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 160px 0;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    overflow: unset;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1246px;
    display: flex;
    justify-content: space-between;
    padding-left: ${(prop) => {
      // if (prop.position === 'left') {
      //   return 'auto';
      // } else {
      //   return 'auto';
      // }
    }};
  }
`;
export const Wrap = styled.div`
  position: relative;
`;
export const Name = styled.h2`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 34px;
  line-height: 1.3;
  color: var(--text-color-second);
`;
export const Position = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: var(--text-color-second);
`;
export const Descr = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  color: var(--text-color-second);
  margin-bottom: 33px;
`;
export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: var(--text-color-second);
  max-width: 794px;
  margin-bottom: 33px;

  span {
    display: block;
  }
`;
export const Logo = styled.img``;
export const Arrow = styled.img`
  display: none;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    display: unset;
    position: absolute;
    right: ${({ position }) => {
      if (position === "left") {
        return "-617px";
      } else {
        return "107px";
      }
    }};
    bottom: ${({ position }) => {
      if (position === "left") {
        return "-161px";
      } else {
        return "-274px";
      }
    }};
  }
`;
export const PhotoCard = styled.img`
  border-radius: 2px;

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    width: 317px;
    height: 385px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const WrapSwiper = styled.div`
  position: relative;
  margin-bottom: 40px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    order: ${(prop) => {
      if (prop.position === "left") {
        return "0";
      } else {
        return "2";
      }
    }};
    margin: ${(prop) => {
      if (prop.position === "left") {
        return "0 33px 0 0";
      } else {
        return "0 16px 0 0";
      }
    }};
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Circle = styled.img`
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 80px;
  height: 80px;
  z-index: 10;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    right: -40px;
    bottom: -40px;
    width: 100px;
    height: 100px;
  }
`;


