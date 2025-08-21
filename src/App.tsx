import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import Card from "./components/Cards";
import Tokenomics from "./components/Tokenomics";
import Dexscreener from "./components/Dexscreener";
import Footer from "./components/Footer";
import background from "./assets/BACKGROUND.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import SombreroRain from "./components/Particles";

export default function App() {
  const [showSite, setShowSite] = useState(false);

  return (
    <>
      {!showSite && <SplashScreen onEnter={() => setShowSite(true)} />}

      {showSite && (
        <div
          className="main-site"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <SombreroRain/>
          <Header />
          <SubHero/>
          <Hero />
          <Card />
          <Dexscreener />
          <Tokenomics />
          <Footer />
        </div>
      )}
    </>
  );
}
