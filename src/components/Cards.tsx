import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import "../styles/cards.css";

const tacoSrc = new URL("../assets/taco.png", import.meta.url).href;
const sombreroSrc = new URL("../assets/sambrero.png", import.meta.url).href;   
const ukuleleSrc = new URL("../assets/ukulele.png", import.meta.url).href;
const tacobirthday = new URL("../assets/Birthday.png", import.meta.url).href;
const birthday = new URL("../assets/Taco_music.png", import.meta.url).href;
const Moon = new URL("../assets/Moon.png", import.meta.url).href;     

type Card = { id: string; title: string; icon: string; full: string };

const CARDS: Card[] = [
  { id: "taco", title: "", icon: tacoSrc, full: tacobirthday },
  { id: "sombrero", title: "", icon: sombreroSrc, full: birthday },
  { id: "ukulele", title: "", icon: ukuleleSrc, full: Moon },
];

export default function FunCards() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="fun">
        <h2 className="d-flex justify-content-center mb-5">Click on image</h2>
      <div className="fun__inner">
        <div className="fun__grid">
          {CARDS.map((c) => (
            <div key={c.id} className="fun__cell">
              <motion.button
                className={`fun__card ${openId === c.id ? "is-open" : ""}`}
                onClick={() => setOpenId((v) => (v === c.id ? null : c.id))}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <span className="fun__borderOuter" aria-hidden="true" />
                <span className="fun__borderInner" aria-hidden="true" />
                <img className="fun__icon" src={c.icon} alt={c.title} />
                <span className="fun__label">{c.title}</span>
              </motion.button>

              <AnimatePresence initial={false}>
                {openId === c.id && (
                  <motion.div
                    className="fun__reveal"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                  >
                    <img src={c.full} alt={`${c.title} large`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
