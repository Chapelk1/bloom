import {
  TopBlock,
  Title,
  Text,
  WrapPerson,
  Person,
  WrapPhoto,
  WrapName,
  Photo,
  Name,
  Position,
  BtnPerson,
  Icon,
  BottomBlock,
  Card,
  SubTitle,
  Descr,
  Btn,
} from "./Career.styled";
import { Section, Container } from "component/Helpers/Helpers.styled";
import icon from "assets/img/symbol-defs.svg";
import sam from "assets/img/sam.jpg";
import alex from "assets/img/alex.jpg";

function Career() {
  return (
    <Section id="career">
      <TopBlock>
        <Container>
          <Title>Hey, we're bloom.</Title>
          <Text>
            Product Management and <span>Software Engineering</span>
          </Text>
          <WrapPerson>
            <Person>
              <WrapPhoto>
                <Photo src={sam} alt="" />
              </WrapPhoto>
              <WrapName>
                <Name>Sam</Name>
                <Position>
                  Product Management &<span>Executive Search</span>{" "}
                </Position>
                <BtnPerson>
                  <span>LinkedIn</span>
                  <Icon>
                    <use href={icon + "#icon-arrow"}></use>
                  </Icon>
                </BtnPerson>
              </WrapName>
            </Person>

            <Person id="team">
              <WrapPhoto>
                <Photo src={alex} alt="" />
              </WrapPhoto>
              <WrapName>
                <Name>Alex</Name>
                <Position>
                  Software Engineering &<span>Executive Search</span>{" "}
                </Position>
                <BtnPerson>
                  <span>LinkedIn</span>
                  <Icon>
                    <use href={icon + "#icon-arrow"}></use>
                  </Icon>
                </BtnPerson>
              </WrapName>
            </Person>
          </WrapPerson>
        </Container>
      </TopBlock>

      <Container>
        <BottomBlock>
          <Card>
            <SubTitle>Grow your career</SubTitle>
            <Descr>Shape your future</Descr>
            <Btn>
              Tell me more
              <Icon>
                <use href={icon + "#icon-arrow"}></use>
              </Icon>
            </Btn>
          </Card>

          <Card>
            <SubTitle>Build a team</SubTitle>
            <Descr>Find your gem</Descr>
            <Btn>
              Tell me more
              <Icon>
                <use href={icon + "#icon-arrow"}></use>
              </Icon>
            </Btn>
          </Card>
        </BottomBlock>
      </Container>
    </Section>
  );
}

export default Career;
