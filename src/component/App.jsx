import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Career from "./Career/Career";
import Maintaining from "./Maintaining/Maintaining";
import Methods from "./Methods/Methods";
import Partner from "./Partner/Partner";
import Support from "./Support/Support";
import Mentorship from "./Mentorship/Mentorship";
import Footer from "./Footer/Footer"
import monzoPhoto from "assets/img/monzo";
import googlePhoto from "assets/img/google";
import data from 'assets/data/partnerData.json';
import { useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const render = width >= 768 ? true : false;
  const viewWidth = () => {
    setWidth(window.innerWidth);
  }
  window.addEventListener("resize", viewWidth);
  

  return (
    <>
      <Header render={render} />
      <Hero />
      <Career />
      <Maintaining />
      <Methods />
      <Partner position={"left"} photo={monzoPhoto} data={data[0]} />
      <Support />
      <Partner position={"right"} photo={googlePhoto} data={data[1]} />
      <Mentorship />
      <Footer />
    </>
  );
}

export default App;
