import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  overflow: hidden;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    width: 1246px;
    display: flex;
    justify-content: space-between;
    padding-left: ${(prop) => prop.paddingLeft};
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
    right: 68px;
    bottom: -161px;
    .partnerSwiper {
      width: 346px;
      height: 451px;
      margin: 0;
    }
  }
`;
export const PhotoCard = styled.img`
  border-radius: 2px;
  width: 317px;
  height: 385px;
`;
export const WrapSwiper = styled.div`
  position: relative;
`;

export const Circle = styled.img`
  position: absolute;
  right: -40px;
  bottom: -40px;
  z-index: 10;
`;