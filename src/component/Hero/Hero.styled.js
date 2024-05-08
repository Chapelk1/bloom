import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: var(--second-color);
  padding-top: 80px;
  
  @media screen and (min-width: 768px) {
    padding-top: 120px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 181px;
    background-image: ${(prop) => {
      if (prop.bgi) {
        return `url(${prop.bgi[1]}), url(${prop.bgi[0]})`;
      }
    }};
    background-repeat: no-repeat;
    background-position: right 180px top 289px, right 0px top 100px;
  }
  @media screen and (min-width: 1440px) {
    background-position: right 180px top 389px, right 0px top 200px;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  padding-bottom: 160px;
  
  @media screen and (min-width: 768px) {
    padding-bottom: 180px;
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 220px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 280px;
    width: 1246px;
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
 
  & span {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    font-size: 34px;
  }
`;

export const Wrap = styled.div`
  background: var(--primary-color);
  display: flex;

  @media screen and (min-width: 570px) {
    justify-content: center;
  }
`;
export const WrapLogo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 570px) {
    width: 570px;
  }
  @media screen and (min-width: 600px) {
    width: 600px;
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;
export const PartnerLogo = styled.img`
  width: auto;
  height: 95px;
  :nth-child(2n) {
    align-self: end;
  }
  
  @media screen and (min-width: 768px) {
    width: auto;
    height: 52px;
    :not(:last-child) {
      margin-right: 28px;
    }
  }
  @media screen and (min-width: 1024px) {
    width: auto;
    height: 76px;
    :not(:last-child) {
      margin-right: 48px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: auto;
    height: 95px;
  }
`;
