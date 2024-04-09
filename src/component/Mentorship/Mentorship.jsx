import { Section, Container } from "component/Helpers/Helpers.styled";
import {
  Text,
  Block,
  Wrap,
  Title,
  Descr,
  Btn,
  Photo,
  Icon,
} from "./Mentorship.styled";
import photo from 'assets/img/IMAGE-08.png';
import sprite from "assets/img/symbol-defs.svg";
function Mentorship() {
  return (
    <Section style={{paddingBottom: '160px'}}>
      <Container>
        <Text>
          It’s more than a job, <span>for you, and for us.</span>
        </Text>
        <Block>
          <Wrap>
            <Title>Mentorship</Title>
            <Descr>
              Looking for a mentor?<span>Let us help your career</span>
              <span>bloom, by connecting you to</span> a mentor.
            </Descr>
            <Btn>
              Learn more
              <Icon>
                <use href={sprite + "#icon-arrow"}></use>
              </Icon>
            </Btn>
          </Wrap>
          <Photo src={photo} alt="people" />
        </Block>
      </Container>
    </Section>
  );
}

export default Mentorship;
