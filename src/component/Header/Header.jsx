import { Head,Container, Icon, Nav, List, Item, Link } from "./Header.styled";
import icon from "assets/img/symbol-defs.svg";

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
              <Link href="#career">Grow your career</Link>
            </Item>
            <Item>
              <Link href="#team">Build a team</Link>
            </Item>
            <Item>
              <Link href="#founders">Meet the founders</Link>
            </Item>
            <Item>
              <Link href="#mentorship">Mentorship</Link>
            </Item>
            <Item>
              <Link href="#hello">Say hello</Link>
            </Item>
          </List>
        </Nav>
      </Container>
    </Head>
  );
}

export default Header;
