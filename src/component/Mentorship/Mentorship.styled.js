import styled from "@emotion/styled";

export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 40px;
  line-height: 1.3;
  color: var(--text-color-second);
  margin-bottom: 40px;

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 174px;
    font-size: 50px;
    span {
      display: block;
    }
  }
`;
export const Block = styled.div`
  background: var(--accent-color);
  border-radius: 32px;
  padding: 52px 32px 52px 48px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    display: flex;

    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const Wrap = styled.div``;
export const Title = styled.h2`
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--text-color-second);
  margin-bottom: 18px;
`;
export const Descr = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: var(--text-color-second);
  margin-bottom: 60px;

  span {
    display: block;
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;
export const Btn = styled.button`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.37;
  color: var(--text-color-second);
  background: transparent;
  overflow: hidden;
  border-radius: 999px;
  border: 2px solid var(--text-color-second);
  padding: 12px 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 250ms linear;
  margin-bottom: 30px;
  :hover {
    background: var(--text-color-second);
    color: var(--accent-color);
  }
  :hover svg {
    fill: var(--accent-color);
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Photo = styled.img``;
export const Icon = styled.svg`
  width: 15px;
  height: 14px;
  margin-left: 20px;
  transition: all 250ms linear;
`;