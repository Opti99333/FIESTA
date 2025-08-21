import { useEffect, useState } from "react";
import bg from "../assets/SPLASHSCREEN BACK.png";
import sombrero from "../assets/7cf82340-87e8-4c0a-9da3-a7fa4dde44e2.png";
import "../styles/spalshscreen.css";
import { fiestaMusic } from "../components/fiestamusic";

export default function SplashScreen({ onEnter } : any) {
  const [clicked, setClicked] = useState(false);

  useEffect(() =>{

  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(onEnter, 1000); 
     fiestaMusic.play().catch(err => console.log("Ошибка воспроизведения:", err));
  };

  return (
    <div
      className={`splash-screen ${clicked ? "fade-out" : ""}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img
        src={sombrero}
        alt="Sombrero"
        className={`sombrero ${clicked ? "zoom-out" : ""}`}
        onClick={handleClick}

      />
    </div>
  );
}
