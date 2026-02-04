import styles from "../style";
import { arrowUp } from "../assets";
import { scrollToId } from "../utils/scrollToId";

const GetStarted = () => (
  <button
    type="button"
    onClick={() => scrollToId("cta")}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    aria-label="Get Started"
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] text-white">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px] text-white">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </button>
);

export default GetStarted;
