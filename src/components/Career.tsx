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
                <h4>Part-Time Tutor</h4>
                <h5>Skillzam | Belagavi</h5>
              </div>
              <h3>Jan 2025</h3>
            </div>
            <p>
              Mentoring students in AI, Machine Learning, and programming.
              Teaching foundational and advanced concepts in Python, data science,
              and intelligent systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Intern</h4>
                <h5>Insysteltech | Belagavi</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed an AI Tutor using RAG for accurate, context-aware responses.
              Integrated LLM APIs (OpenRouter/GPT) for intelligent query handling.
              Built a system to retrieve course content (100+ links) and combine
              with AI answers. Improved chatbot accuracy using retrieval + generation
              approach.
            </p>
          </div>

          <div className="career-info-box" style={{ marginBottom: "20px", marginTop: "40px" }}>
            <div className="career-info-in">
              <h3 style={{ fontSize: "28px", color: "var(--accentColor)", fontWeight: "500", letterSpacing: "2px", margin: 0 }}>Education</h3>
            </div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E in Artificial Intelligence & Data Science</h4>
                <h5>SGBIT, Belagavi</h5>
              </div>
              <h3>2022-2026</h3>
            </div>
            <p>
              Bachelor of Engineering in Artificial Intelligence and Data Science
              from SG Balekundri Institute of Technology, Belagavi, Karnataka.
              Evaluating the Socio-Economic Impact of AI-Driven Systems as B.E project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
