import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raj Kumar Sahu </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />I am currently a final year student of{" "}
            <span className="purple">IIIT Pune</span>.
            <br />I am pursuing Bachelor of Technology
            <span className="purple"> [B-Tech] </span> in Computer Science and
            Engineering
            <span className="purple"> [CSE]</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Following World News
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raj Sahu 😎</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
