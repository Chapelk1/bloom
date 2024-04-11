import styled from "@emotion/styled";

export const TopBlock = styled.div`
  background: var(--second-color);
  padding: 35px 0 154px 0;
`;
export const Title = styled.h2`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 50px;
  line-height: 1.3;
  color: var(--text-color-second);
  margin-bottom: 24px;
`;
export const Text = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 50px;
  line-height: 1.3;
  color: var(--text-color-second);
  margin-bottom: 143px;
  & span {
    display: block;
  }
`;
export const WrapPerson = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Person = styled.div`
  display: flex;
`;
export const WrapPhoto = styled.div`
  border-radius: 4px;
  width: 195px;
  height: 258px;
  background: var(--primary-color);
  padding: 8px 8px 32px 8px;
  margin-right: 15px;
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
  font-size: 34px;
  line-height: 1.3;
  color: var(--accent-color);
  margin-bottom: 54px;
  & span {
    display: block;
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
  justify-content: space-between;
`;
export const Card = styled.div`
  width: calc((100% - 24px) / 2);
  background: var(--accent-color);
  border-radius: 0 0 32px 32px;
  padding: 26px 0 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 50px;
  line-height: 1.3;

  color: var(--text-color-second);
  margin-bottom: 33px;
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
