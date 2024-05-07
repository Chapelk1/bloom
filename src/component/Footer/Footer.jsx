import {
  Ftr,
  Container,
  WrapEvaluation,
  IconL,
  Num,
  Star,
  Text,
  Nav,
  Wrap,
  Link,
} from "./Footer.styled";
import sprite from 'assets/img/symbol-defs.svg';

function Footer() {
  return (
    <Ftr>
      <Container style={{ display: "flex", alignItems: "flex-start" }}>
        <WrapEvaluation>
          <IconL>
            <use href={sprite + "#icon-g"}></use>
          </IconL>
          <div>
            <div>
              <Num>5.0</Num>
              <Star>
                <use href={sprite + "#icon-star"}></use>
              </Star>
              <Star>
                <use href={sprite + "#icon-star"}></use>
              </Star>
              <Star>
                <use href={sprite + "#icon-star"}></use>
              </Star>
              <Star>
                <use href={sprite + "#icon-star"}></use>
              </Star>
              <Star>
                <use href={sprite + "#icon-star"}></use>
              </Star>
            </div>
            <Text>Based on 106 reviews</Text>
          </div>
        </WrapEvaluation>

        <Nav>
          <Wrap>
            <Link href="#career">Grow your career</Link>
            <Link href="#team">Build a team</Link>
          </Wrap>
          <Wrap>
            <Link href="#founders">Meet the founders</Link>
            <Link href="#mentorship">Mentorship</Link>
            <Link href="#hello">Say hello</Link>
          </Wrap>
        </Nav>
      </Container>
    </Ftr>
  );
}

export default Footer;
