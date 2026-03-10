import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Dual Degree Program</h4>
                <h5>BITS PILANI & NEW LJIET</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing dual degree in BS Computer Science from BITS Pilani (2024-2027)
              and BTech CSE in Data Science from NEW LJIET (2024-2028).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity & Blockchain Developer</h4>
                <h5>Freelance / Self-Taught</h5>
              </div>
              <h3>1 Year Exp</h3>
            </div>
            <p>
              Specializing in Quantum-Resistant Cryptography, penetration testing,
              security audits, developing smart contracts, and building DeFi protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
