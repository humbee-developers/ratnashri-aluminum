import "./brochureForm.scss";
import styled from 'styled-components';
import { motion } from "framer-motion";
import YellowSubmitButtonForm from "../../components/yellowSubmitButtonForm/YellowSubmitButtonForm";

function BrochureForm() {
  return (
    <div className="BrochureMain">
      <div className="BrochureInner">
        <div className="BrochureInnerContent">
          <motion.p initial={{
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
          >Download Brochure</motion.p>
        </div>
        <div className="BrochureInput">
          <StyledWrapper>
            <div className="coolinput">
              <label className="text" htmlFor="input">Name*</label>
              <input className="input" name="input" type="text" />
            </div>
          </StyledWrapper>
          <StyledWrapper>
            <div className="coolinput">
              <label className="text" htmlFor="input">Email*</label>
              <input className="input" name="input" type="email" />
            </div>
          </StyledWrapper>
          {/* <div className="submit-button">
            <YellowSubmitButtonForm
              btn_text={"Download"}
              type="submit"
            />
          </div> */}
          <div>
            <button className="button">
              <span className="button-content">Download </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const StyledWrapper = styled.div`
  .coolinput {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 340px;
  }

  .coolinput label.text {
    font-size: 0.75rem;
    color: #000000;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    width: fit-content;
  }

  .coolinput input[type="text"].input {
    padding: 11px 25px 11px 10px;
    font-size: 15px;
    border: 1px #619DEA38 solid;
    border-radius: 5px;
    background: #619DEA17;
  }

  .coolinput input[type="text"].input:focus {
    outline: none;
  }
   .coolinput input[type="email"].input {
   padding: 11px 25px 11px 10px;
    font-size: 15px;
    border: 1px #619DEA38 solid;
    border-radius: 5px;
    background: #619DEA17;
  }

  .coolinput input[type="email"].input:focus {
    outline: none;
  }`;
export default BrochureForm;
