import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "QuantumChat",
    category: "Cryptography",
    tools: "Python, Cryptography, Kyber-1024, WebSocket",
    image: "/images/Solidx.png",
    repo: "https://github.com/CODER7657/quantum_crypto",
  },
  {
    title: "VortiFiBlockchain",
    category: "DApp",
    tools: "Solidity, Hardhat, React, Web3.js",
    image: "/images/radix.png",
    repo: "https://github.com/CODER7657/VortiFi",
  },
  {
    title: "VeriServeVerification",
    category: "Blockchain",
    tools: "Smart Contracts, IPFS, MetaMask, Node.js",
    image: "/images/bond.png",
    repo: "https://github.com/CODER7657/VeriServe_block",
  },
  {
    title: "Voice-Emotion-detection",
    category: "AI-ML",
    tools: "TensorFlow, Librosa, PYQT5",
    image: "/images/sapphire.png",
    repo: "https://github.com/CODER7657/voice-emotion-detection",
  },
  {
    title: "Kisan Mitra AI",
    category: "AI-ML & Web3",
    tools: "SvelteKit, FastAPI, VITE, OpenAI GPT-4o",
    image: "/images/Maxlife.png",
    repo: "https://github.com/CODER7657/kisan_mitra",
  },
  {
    title: "ComplyLite",
    category: "Full-Stack",
    tools: "Python, FastAPI, React, Ant Design, Docker, DuckDB",
    image: "/images/Solidx.png",
    repo: "https://github.com/CODER7657/complylite",
  },
  {
    title: "Namaste ICD-11",
    category: "Microservice",
    tools: "Docker, Shell, HTML/JS, Python",
    image: "/images/bond.png",
    repo: "https://github.com/CODER7657/namaste-icd11-integration",
  },
  {
    title: "Port Stock",
    category: "CLI Tool",
    tools: "Python, yfinance, prettytable",
    image: "/images/radix.png",
    repo: "https://github.com/CODER7657/port_stock",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation between -10 and 10 degrees based on cursor position
    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;

    el.style.setProperty("--tilt-x", `${yPct * -15}deg`);
    el.style.setProperty("--tilt-y", `${xPct * 15}deg`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  className="carousel-slide"
                  key={index}
                >
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carousel-content-wrapper"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="carousel-content tilt-card">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">
                            {project.category}
                          </p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>

                          <div className="project-view-btn">
                            View Project
                            <span className="arrow-icon">↗</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
