import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import youtube from "../../Assets/Projects/YoutubeAutomation.jpg";
import quiz from "../../Assets/Projects/quiz.png";
import shopping from "../../Assets/Projects/shopping.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="E-Commerce Management"
              description="Created an E-commerce Management System using PHP and a relational database in XAMPP to streamline online
shopping processes. Implemented features such as product listing, customer registration, order management, and payment integration."
              ghLink="https://github.com/srivatsa0129/E-Commerce_Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="YouTube Automation"
              description="Developed a YouTube automation tool using Selenium WebDriver in Java, automating tasks such as playing video, content
interaction, and search functionalities. Implemented automated browser navigation, dynamic element handling, and robust exception management for seamless
task execution."
              ghLink="https://github.com/srivatsa0128/YouTubeAutomation "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Online Quiz platform"
              description="Carried out an interactive online quiz portal project using Java Swing, focusing on user-friendly design and functionality. The platform allows users to take quizzes on various topics, with features such as time limits, automatic scoring, and
real-time feedback. Implemented object-oriented principles, including inheritance, to manage quiz questions, users, and
results."
              ghLink="https://github.com/srivatsa0129/QuizApplication"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
