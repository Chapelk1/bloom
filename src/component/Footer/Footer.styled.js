import styled from '@emotion/styled';

export const Ftr = styled.footer`
  background: var(--second-color);
  padding: 50px 0;
`;
export const WrapEvaluation = styled.div`
  border-radius: 16px;
  padding: 12px 42px 12px 20px;
  background: #280f5b;
  display: flex;
  align-items: center;
  margin-right: 165px;
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
display: flex;`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 175px;
  }
`;
export const Link = styled.a`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: var(--primary-color);
  margin-bottom: 13px;
`;