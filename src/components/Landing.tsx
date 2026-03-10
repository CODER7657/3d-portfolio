import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PAVAN
              <br />
              <span>PATEL</span>
            </h1>
          </div>
          <div className="landing-info">
            <div className="landing-loop-group-1">
              <h3 className="landing-info-h3">
                <div className="landing-h3-1">Cybersec</div>
              </h3>
              <h2 className="landing-info-h2">
                <div className="landing-h2-1">Enthusiast</div>
              </h2>
            </div>
            
            <div className="landing-loop-group-2">
              <h3 className="landing-info-h3">
                <div className="landing-h3-2">Undergrad Student</div>
              </h3>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
