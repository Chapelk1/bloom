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
import data from 'assets/data/partnerData.json'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Career />
      <Maintaining />
      <Methods />
      <Partner position={"left"} photo={monzoPhoto} pad={70} data={data[0]} />
      <Support />
      <Partner position={"right"} photo={googlePhoto} data={data[1]} />
      <Mentorship />
      <Footer />
    </>
  );
}

export default App;
