import styled from "@emotion/styled";

export const Head = styled.header`
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 6px 15px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    width: 1246px;

    margin: 0 auto;

    align-items: center;
  }
`;
export const IconLogo = styled.svg`
  width: 120px;
  height: 50px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    width: 142px;
    height: 69px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    
  }
`;
export const IconMenu = styled.svg`
  stroke: black;
  width: 44px;
  height: 44px;
`;
export const MenuOpen = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  overflow: hidden;
  background: transparent;
`;
export const MenuClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  overflow: hidden;
  background: transparent;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100vh;
  padding-top: 100px;
  background: var(--second-color);
  box-shadow: -20px 2px 11px 0 rgba(0, 0, 0, 0.15),
    -8px 0px 7px 1px rgba(0, 0, 0, 0.15);
  transition: transform 300ms linear;
  transform: ${({ isOpen }) => {
    if (!isOpen) {
      return "translateX(200%)";
    } else {
      return "translateX(0%)";
    }
  }};
`;

export const Nav = styled.nav`
`;

export const List = styled.ul`
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
export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    overflow: hidden;
    padding-bottom: 2px;
    :not(:last-child) {
      margin-right: 32px;
      margin-bottom: 0;
    }

    :hover a::after {
      transform: translateX(0%);
    }
  }
`;
export const Link = styled.a`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text-color-second);
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: var(--text-color-second);
      height: 2px;
      width: 100%;
      transform: translateX(-101%);
      transition-duration: 250ms;
    }
  }
`;
