import photo from "assets/Hero";
function Hero() {
  return (
    <section>
      <h1>
        Discover, <span>nurture, bloom</span>
      </h1>
      <p>
        Product & Engineering Recruitment
        <span>va va bloom, with a human touch and a dash of</span>
      </p>
      <img src={photo.heroPhotoOne} alt="" />
      <img src={photo.heroPhotoTwo} alt="" />
      <div>
        <img src={photo.partner1} alt="" />
        <img src={photo.partner2} alt="" />
        <img src={photo.partner3} alt="" />
        <img src={photo.partner4} alt="" />
        <img src={photo.partner5} alt="" />
        <img src={photo.partner6} alt="" />
      </div>
    </section>
  );
}

export default Hero;
