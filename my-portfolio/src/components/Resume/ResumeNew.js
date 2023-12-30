import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Raj_Kumar_Sahu_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const downloadPDF = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = pdf; // Set the href to the PDF file path
    link.download = "Raj_Kumar_Sahu_CV.pdf"; // Set the desired filename for the download

    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={downloadPDF}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <iframe
            title="Resume"
            src={pdf}
            width="100%"
            height="600px"
            style={{ border: "none", transform: "scale(1)" }} // Adjust the scale here
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={downloadPDF}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
