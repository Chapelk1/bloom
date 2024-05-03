import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: var(--second-color);
  padding-top: 80px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding-top: 181px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    background-image: ${(prop) => {
      if (prop.bgi) {
        return `url(${prop.bgi[1]}), url(${prop.bgi[0]})`;
      }
    }};
    background-repeat: no-repeat;
    background-position: right 180px top 389px, right 0px top 200px;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 38px;
  line-height: 1;
  color: var(--accent-color);
  margin-bottom: 34px;
  & span {
    display: block;
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    font-size: 104px;
  }
`;

export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  color: var(--primary-color);
  margin-bottom: 160px;
  & span {
    display: block;
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 283px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    font-size: 34px;
  }
`;

export const Wrap = styled.div`
  text-align: center;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const PartnerLogo = styled.img`
  width: auto;
  height: 95px;
  :nth-child(2n) {
    align-self: end;
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 48px;
    }
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
