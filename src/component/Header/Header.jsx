import { Head,Container, Icon, Nav, List, Item, Link } from "./Header.styled";
import icon from "assets/symbol-defs.svg";

function Header() {
  return (
    <Head>
      <Container>
        <Icon>
          <use href={icon + "#icon-logo"}></use>
        </Icon>
        <Nav>
          <List>
            <Item>
              <Link href="">Grow your career</Link>
            </Item>
            <Item>
              <Link href="">Build a team</Link>
            </Item>
            <Item>
              <Link href="">Meet the founders</Link>
            </Item>
            <Item>
              <Link href="">Mentorship</Link>
            </Item>
            <Item>
              <Link href="">Say hello</Link>
            </Item>
          </List>
        </Nav>
      </Container>
    </Head>
  );
}

export default Header;
