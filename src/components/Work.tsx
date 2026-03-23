import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AI Tutor (Insysteltech)",
    category: "RAG-based Chatbot",
    tools: "Python, OpenRouter/GPT, RAG, JSON/DB",
    image: "/images/bond.png",
    tag: "Internship project",
    description:
      "Developed a RAG-based AI chatbot that provides accurate, context-aware answers by combining LLMs with a custom knowledge base of 100+ course resources. Built using Python and OpenRouter/GPT APIs, it supports multiple subjects and delivers explanations, resource links, and guided learning through an interactive FAQ interface.",
  },
  {
    title: "Wild Animal Detection",
    category: "Computer Vision & IoT",
    tools: "Python, YOLO, OpenCV, Gmail API",
    image: "/images/wild-vision.jpeg",
    tag: "College major project",
    description:
      "Developed a computer vision-based wildlife detection system that identifies animals in real-time using YOLO and OpenCV. Built with Python and IoT integration, the system can trigger instant alerts via Gmail API, enabling efficient wildlife monitoring and conservation support.",
  },
  {
    title: "LegalEase \u2013 AI Legal Assistant",
    category: "NLP & LLM Application",
    tools: "Python, LLM, RAG, NLP",
    image: "/images/law-rag.jpeg",
    tag: "College major project",
    description:
      "Developed an AI-powered legal assistant using LLM, NLP, and RAG, capable of answering legal queries, summarizing documents, and providing context-aware insights. Built with Python, the system enables users to interact with legal information efficiently through a smart conversational interface.",
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
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <span className="project-tag">{project.tag}</span>
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <p className="carousel-description">{project.description}</p>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
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
