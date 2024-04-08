import styled from "@emotion/styled";

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
  position: absolute;
  right: 68px;
  bottom: -161px;
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