import styled from '@emotion/styled';

export const Ftr = styled.footer`
  background: var(--second-color);
  padding: 50px 0;
`;
export const WrapEvaluation = styled.div`
  border-radius: 16px;
  padding: 12px 42px 12px 20px;
  background: #280f5b;

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    margin-right: 165px;
    display: flex;
    align-items: center;
  }
`;
export const IconL = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;
export const Num = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 1;
  color: var(--primary-color);
  margin-right: 8px;
`;
export const Star = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--primary-color);
  margin-right: 4px;
`;
export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #bdbdbd;
`;

export const Nav = styled.nav`
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-right: 175px;
    }
  }
`;
export const Link = styled.a`
  position: relative;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: var(--primary-color);
  margin-bottom: 13px;

  ::before {
    content: "";
    position: absolute;
    top: 7px;
    left: -14px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--second-color);
    transform: scale(0);
    transition: all 250ms linear;
  }

  :hover::before {
    background: var(--primary-color);
    transform: scale(1.2);
  }
`;