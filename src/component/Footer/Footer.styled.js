import styled from '@emotion/styled';

export const Ftr = styled.footer`
  background: var(--second-color);
  padding: 50px 0;
`;
export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    width: 1246px;
  }
`;
export const WrapEvaluation = styled.div`
  border-radius: 16px;
  padding: 12px 42px 12px 20px;
  background: #280f5b;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 110px;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    margin-right: 165px;
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
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const Wrap = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 45px;
    }
  }
  @media screen and (min-width: 1024px) {
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