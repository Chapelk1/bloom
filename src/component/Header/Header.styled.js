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
  :not(:last-child) {
    margin-right: 32px;
  }
`;
export const Link = styled.a`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text-color-second);
`;
