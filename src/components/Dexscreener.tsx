import { motion, easeOut } from "framer-motion";
import "../styles/dexscreener.css";
import dexscreener from "../assets/Dexscreener.png"

export default function Dexscreener() {
  return (
    <section className="dex mt-5">
      <div className="dex__inner mt-5">
        <motion.div
          className="dex__card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="dex__glow" aria-hidden="true" />
          <header className="dex__header">
            <h3 className="dex__title">$SOMBRERO — Live Chart</h3>
            <a
              className="dex__link"
              href="https://dexscreener.com/solana/4yXG1V68A7BU1vKbBMACDBbBhbp3P5p5uppRZkyWubuV?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&chartTheme=dark&theme=dark&chartStyle=13&chartType=usd&interval=1"
              target="_blank"
              rel="noreferrer"
            >
              Open in DexScreener ↗
            </a>
          </header>

         <div className="dex__frame">
  <iframe
    src="https://dexscreener.com/solana/4yXG1V68A7BU1vKbBMACDBbBhbp3P5p5uppRZkyWubuV?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&chartTheme=dark&theme=dark&chartStyle=13&chartType=usd&interval=1"
    loading="lazy"
    title="DexScreener Chart"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
  <img className="dex__overlay" src={dexscreener} alt="overlay" />
</div>

        </motion.div>
      </div>
    </section>
  );
}
