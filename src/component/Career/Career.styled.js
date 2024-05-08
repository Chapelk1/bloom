import styled from "@emotion/styled";
export const Section = styled.section`
  z-index: -1;
`;
export const ContainerTop = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (min-width: 1024px) {
    align-items: normal;
  }
  @media screen and (min-width: 1440px) {
    width: 1246px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;
export const Container = styled.div`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 1246px;
    padding: 0 15px;
    margin: 0 auto;
  }
`;
export const TopBlock = styled.div`
  background: var(--second-color);
  padding: 35px 0 54px 0;
  margin-bottom: 30px;

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 35px 0 90px 0;
    margin-bottom: 0;
  }
  
  @media screen and (min-width: 1440px) {
    padding: 35px 0 154px 0;
  }
`;
export const Title = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 28px;
  line-height: 1.3;
  color: var(--text-color-second);
  margin-bottom: 24px;
  
  @media screen and (min-width: 768px) {
    font-weight: 400;
  }
  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;
export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 1.3;
  color: var(--text-color-second);
  margin-bottom: 60px;
  & span {
    display: block;
  }
  
  @media screen and (min-width: 768px) {

    margin-bottom: 143px;
  }
  
  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;
export const WrapPerson = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
  
`;
export const Person = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 600px) {
    display: flex;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const WrapPhoto = styled.div`
  border-radius: 4px;
  width: 195px;
  height: 258px;
  background: var(--primary-color);
  padding: 8px 8px 32px 8px;

  @media screen and (min-width: 600px) {
    margin-right: 15px;
  }
`;
export const WrapName = styled.div``;
export const Photo = styled.img`
  border-radius: 4px;
`;
export const Name = styled.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 50px;
  line-height: 1.3;
  color: var(--accent-color);
`;
export const Position = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  color: var(--accent-color);
  margin-bottom: 24px;
  & span {
    display: block;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 34px;
  }
`;
export const BtnPerson = styled.button`
  position: relative;
  display: inline-block;
  padding: 2px 28px 2px 22px;
  border: 2px solid var(--primary-color);
  border-radius: 999px;
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms linear;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.37;
  color: var(--primary-color);
  fill: var(--primary-color);
  :hover svg {
    fill: var(--second-color);
  }
  :hover {
    background: var(--primary-color);
    color: var(--second-color);
  }
`;
export const Icon = styled.svg`
  position: relative;
  width: 15px;
  height: 14px;
  margin-left: 16px;
  fill: inherit;
  transition-duration: 250ms;
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const Card = styled.div`
  background: var(--accent-color);
  width: 80%;
  padding: 26px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :nth-child(1) {
    border-radius: 0 32px 32px 0;
    margin-bottom: 30px;
  }
  :nth-child(2) {
    border-radius: 32px 0 0 32px;
    align-self: end;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
    padding: 26px 0 40px 0;
    :nth-child(1) {
      border-radius: 0 0 32px 32px;
      margin-bottom: 0;
    }
    :nth-child(2) {
      border-radius: 0 0 32px 32px;
    }
  }
  @media screen and (min-width: 1440px) {
    height: 280px;
  }
`;
export const SubTitle = styled.h3`
  font-family: var(--third-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--text-color-second);
  margin-bottom: 16px;
`;
export const Descr = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 26px;
  line-height: 1.3;

  color: var(--text-color-second);
  margin-bottom: 33px;
  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;
export const Btn = styled.button`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.37;
  padding: 12px 26px;
  color: var(--text-color-second);
  border: 2px solid var(--text-color-second);
  border-radius: 999px;
  width: 192px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  transition: all 250ms linear;
  cursor: pointer;
  :hover svg {
    fill: var(--accent-color);
  }
  :hover {
    background: var(--text-color-second);
    color: var(--accent-color);
  }
`;
