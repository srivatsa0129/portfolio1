import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Srivatsa G </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />
            <br />I worked as a Software Development Intern at
            <span className="purple"> DRDO.</span>
            <br />
            <br />I am pursuing my BE degree under the specialization of <br />
            <span className="purple">
              Information Science and Engineering{" "}
            </span>{" "}
            from JIT, Bengaluru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {/* "Strive to build things that make a difference!"{" "} */}
            "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
          </p>
          <footer className="blockquote-footer">
            Mahabharatha chapter 2, verse 47
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
