import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import About from "./components/About";
import FeaturedMenu from "./components/FeaturedMenu";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSEction";



export default function App() {
  return (
    <div className="font-sans">

      <Header />
      <FadeInSection delay={200} >
        <Slider />
      </FadeInSection>
      <FadeInSection delay={400}>
        <About />
      </FadeInSection>
      <FadeInSection delay={600}>
        <FeaturedMenu />
      </FadeInSection>
      <FadeInSection delay={800}>
        <Footer />
      </FadeInSection>
    </div>
  );
}
