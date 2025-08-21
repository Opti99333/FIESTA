import { motion, type Variants, easeOut } from "framer-motion";
import "../styles/subhero.css";

type Props = {
  title?: string;
  subtitle?: string;
};

const container: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeOut,
      duration: 0.6,
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 10, rotate: -2, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export default function SubHero({
  title = "Join the $FIESTA — the party just started!",
  subtitle = "He just finished his taco and is ready to become number #1 in crypto.",
}: Props) {
  const words = title.split(" ");

  return (
    <section className="subhero">
      <div className="subhero__inner">
        <motion.h2
          className="subhero__title"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {words.map((w, i) => (
            <motion.span className="sh-word" variants={word} key={`${w}-${i}`}>
              {w}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          className="subhero__divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <motion.span
            className="subhero__dot"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 }}
          />
          <motion.span
            className="subhero__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .5, ease: easeOut, delay: 0.1 }}
            style={{ originX: 0.5 }} 
          />
          <motion.span
            className="subhero__dot"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.25 }}
          />
        </motion.div>

        <motion.p
          className="subhero__subtitle"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2, ease: easeOut, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
