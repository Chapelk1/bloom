import { Title, Wrap } from "./Maintaining.styled";
import { Section, Container } from "component/Helpers/Helpers.styled";
import { register } from "swiper/element/bundle";
register();

function Maintaining() {
  return (
    <Section style={{ padding: "161px 0 0 0" }}>
      <Container>
        <Title>
          bloom support and enable early stage startups, scaleups and leading
          global tech giants to build and nurture high-performing
        </Title>
        <Wrap>
          <swiper-container
            navigation="true"
            pagination="true"
            scrollbar="true"
            style={{width: '100%', height: '500px'}}
          >
            <swiper-slide>11111111111</swiper-slide>
            <swiper-slide>22222222222</swiper-slide>
            <swiper-slide>33333333333</swiper-slide>
          </swiper-container>

          {/* <div className="swiper">
            <div className="card">
              <div>
                <h3>Vivienne Sung</h3>
                <p>VP Product</p>
                <p>Mum of 2, Peloton junkie and bibliophile</p>
                <p>
                  Sam worked across a mix of Senior and Staff product manager
                  roles, bringing in extremely high quality candidates across
                  the board, several of which we hired. Sam was an absolute
                </p>
                <img src="" alt="" />
              </div>
              <img src="" alt="" />
            </div>
          </div> */}
        </Wrap>
      </Container>
    </Section>
  );
}

export default Maintaining;
