import styled from "@emotion/styled";

export const Head = styled.header`
  height: 16px 0 3px 0;
`;
export const Container = styled.div`
  width: 1246px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.svg`
  width: 142px;
  height: 69px;
`;
export const Nav = styled.nav``;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  position: relative;
  overflow: hidden;
  padding-bottom: 2px;
  :not(:last-child) {
    margin-right: 32px;
  }

  :hover a::after {
    transform: translateX(0%);
  }
`;
export const Link = styled.a`
  
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text-color-second);
  
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--text-color-second);
    height: 2px;
    width: 100%;
    transform: translateX(-100%);
    transition-duration: 250ms;
  }
`;
