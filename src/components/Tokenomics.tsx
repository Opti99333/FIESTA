import "../styles/tokenomics.css";
import blockBg from "../assets/block-tokenomic.png";

const DATA = [
  { title: "1B SUPPLY",  text: "" },
  { title: "100% Liquidity locked",  text: "" },
  { title: "0% Tax/Fees",text: "" },
];

export default function Tokenomics() {
  return (
    <section className="tokenomics">
      <h2 className="tokenomics__title">Tokenomics</h2>

      <div className="tokenomics__grid">
        {DATA.map((b, i) => (
          <div key={i} className="tokenomics__block" role="button" tabIndex={0}>
            <img src={blockBg} alt="" className="tokenomics__bg" />
            <div className="tokenomics__content">
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
