import "./differenceSection.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "../../images/sec1.png";
import image2 from "../../images/sec2.png";
import image3 from "../../images/sec3.png";
import image4 from "../../images/sec4.png";

function DifferenceSection() {
  return (
    <div className="DifferenceSec">
      <div className="DifferenceSecHeading">
        <motion.div
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
          className="HeadingSec"
        >
          <p>Our Difference</p>
        </motion.div>
        <div className="ContentSec">
          <p>Trusted by Visionaries. Proven by Performance.</p>
        </div>
      </div>
      {/*  */}
      <div className="ImageSectionMain">
        <div className="ImageSectionInner">
          <div className="ImageSectionImg">
            <Image src={image1} alt="none" />
          </div>
          <div className="ImageSectionImg">
            <Image src={image2} alt="none" />
          </div>
          <div className="ImageSectionImg">
            <Image src={image3} alt="none" />
          </div>
          <div className="ImageSectionImg">
            <Image src={image4} alt="none" />
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="ContentInnerDiff">
          <p>
            Ratnashri Aluminium, an ISO 9001 and 14001 certified leader,
            specializes in precision aluminium extrusions for the boldest
            business projects. With a legacy of manufacturing excellence, we
            don’t just supply profiles—we empower progress for the world’s most
            demanding industries through quality, scale, and relentless
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
export default DifferenceSection;
