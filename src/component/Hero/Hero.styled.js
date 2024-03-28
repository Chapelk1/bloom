import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 181px;
  background-color: var(--second-color);
  background-image: ${(prop) => {
    if (prop.bgi) {
      return `url(${prop.bgi[1]}), url(${prop.bgi[0]})`;
    }
  }};
  background-repeat: no-repeat;
  background-position: right 180px top 389px, right 0px top 200px;
`;

export const Title = styled.h1`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 104px;
  line-height: 1;
  color: var(--accent-color);
  margin-bottom: 34px;
  & span {
    display: block;
  }
`;

export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 34px;
  line-height: 1.3;
  color: var(--primary-color);
  margin-bottom: 283px;
  & span {
    display: block;
  }
`;
export const Photo = styled.img``;
export const Wrap = styled.div`
  text-align: center;
  background: var(--primary-color);
`;
export const PartnerLogo = styled.img`
  width: auto;
  height: 95px;
  :not(:last-child) {
    margin-right: 48px;
  }
`;
