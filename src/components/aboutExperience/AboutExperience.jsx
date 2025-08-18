import "./aboutExperience.scss";
import Image from "next/image";
import image1 from "../../images/expbanner.png";

function AboutExperience() {
  return (
    <div className="aboutExperience">
      <div className="aboutExperience_wrapper">
        <div className="aboutExperience_wrapper_inner">
          <div className="aboutExperience_wrapper_inner_wrapper">
            <div className="heading">One Aluminium. Endless Possibilities</div>
            <div className="content">
              {
                "Aluminium’s versatility powers solutions across industries and challenges. From enabling sustainable architecture and renewable energy to elevating advanced engineering and innovative furniture design, our extrusions adapt to every vision. With Ratnashri Aluminium, a single material unlocks limitless innovation—built to empower your boldest business ambitions."
              }
            </div>



            
          </div>
        </div>
        <div className="img">
          <Image src={image1} className="image2" width="100%"></Image>
          {/* <div className="yearsofexp">
            <div className="roundbackground">1</div>
            <div className="roundbackground">3</div>
            <div className="imagecontent">years of experience</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default AboutExperience;
