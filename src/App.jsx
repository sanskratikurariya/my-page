import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import About from "./components/About";
import FeaturedMenu from "./components/FeaturedMenu";
import Footer from "./components/Footer";
import FadeSection from "./components/FadeSection";
// Updated import name and path

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <FadeSection delay={200}>
        <Slider />
      </FadeSection>
      <FadeSection delay={400}>
        <About />
      </FadeSection>
      <FadeSection delay={600}>
        <FeaturedMenu />
      </FadeSection>
      <FadeSection delay={800}>
        <Footer />
      </FadeSection>
    </div>
  );
}
