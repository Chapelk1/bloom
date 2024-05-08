import {
  Head,
  Container,
  MenuOpen,
  MenuClose,
  IconMenu,
  IconLogo,
  MobileMenu,
  Nav,
  List,
  Item,
  Link,
} from "./Header.styled";
import icon from "assets/img/symbol-defs.svg";
import { useState } from "react";


function Header({ render }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
    document.body.classList.toggle('scroll-hidden');
  }

  return (
    <Head>
      <Container>
        <a href="./">
          <IconLogo>
            <use href={icon + "#icon-logo"}></use>
          </IconLogo>
        </a>
        {render && (
          <>
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
          </>
        )}

        {!render && (
          <>
            <MenuOpen onClick={toggleMenuOpen}>
              <IconMenu>
                <use href={icon + "#icon-burger"}></use>
              </IconMenu>
            </MenuOpen>

            <MobileMenu isOpen={menuIsOpen}>
              <MenuClose onClick={toggleMenuOpen}>
                <IconMenu>
                  <use href={icon + "#icon-close"}></use>
                </IconMenu>
              </MenuClose>
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
            </MobileMenu>
          </>
        )}
      </Container>
    </Head>
  );
}

export default Header;
