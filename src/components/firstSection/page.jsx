import "./firstSection.scss";
import { motion } from "framer-motion";
const FirstSection = () => {

  return (
    <div className="FirstSectionWarpper">
      <div className="InnerSectionWrapper">
        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: true }}
          className="InnerWapper">Shaping the Future with Precision</motion.p>

        <motion.p
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: true }}
          className="InnerWapper">Aluminium Extrusions</motion.p>

      </div>


    </div>
  );
};
export default FirstSection;
