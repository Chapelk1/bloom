import styled from "@emotion/styled";

export const Title = styled.h2`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 30px;
  line-height: 1.3;
  text-align: center;
  color: var(--text-color-second);
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;
export const SubTitle = styled.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 34px;
  line-height: 1.3;
  color: var(--primary-color);
  margin-bottom: 29px;
`;
export const Descr = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: var(--primary-color);
  max-width: 309px;
`;
export const Btn = styled.button`
  position: absolute;
  right: 15px;
  bottom: 17px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: transform 150ms linear;
`;
export const Icon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: white;
  fill: transparent;
`;
