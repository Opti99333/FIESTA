import { motion, easeOut } from "framer-motion";
import "../styles/hero.css";
import { fiestaMusic } from "../components/fiestamusic";
import Birthday from "../assets/Video-preview.png"

const videoSrc = new URL("../assets/orig-video.mp4", import.meta.url).href;

export default function FiestaSection() {

const handleVideoPlay = () => {
    fiestaMusic.pause();
    fiestaMusic.currentTime = 0;
};

  return (
    <section className="fiesta mt-5">
      <div className="fiesta__inner">
        <motion.div
          className="fiesta__media"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="fiesta__glow" aria-hidden="true" />
          <video
            className="fiesta__video"
            src={videoSrc}
            preload="none"
            poster={Birthday}
            controls
            playsInline
            onPlay={handleVideoPlay}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="fiesta__stand" aria-hidden="true">
          </div>
        </motion.div>

        <motion.article
          className="fiesta__card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        >
          <h3 className="fiesta__title d-flex justify-content-center">
           🐶Fiesta Doggo!
          </h3>
          <div className="fiesta__content">
            <p>Welcome to $FIESTA — the only meme coin where every day feels like Fiesta 🎉</p>
            <p>💃 Buy it. 🕺 HODL it. 🎶 Shake it. Because at this party, the music never stops.</p>
            <p>Fueled by community vibes, endless memes, and — of course — 🌮 TACOS ON TAP 🌮</p>
<h3>CA: Bwidms8XER3nXtqDiTGoyZhw4cVm7Xwf6Lsa3RwrrUmW</h3>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
