import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Newsify from "../../Assets/Projects/Newsify.png";
import codify from "../../Assets/Projects/Codify.png";
import adminDashboard from "../../Assets/Projects/adminDashboard.png";
import ML from "../../Assets/Projects/ML.png";
import memoir from "../../Assets/Projects/memoir.png";

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
              imgPath={codify}
              isBlog={false}
              title="Codify"
              description="Codify is a comprehensive web platform with secure remote code execution and evaluation. Employing the MERN stack, the application hosts a Code-Editor where users execute code and evaluate against custom test cases, facilitating assessment for correctness, efficiency, and accuracy. The system robustly judges code accuracy, offering a seamless coding experience."
              ghLink="https://github.com/RajSahu1331/Judge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memoir}
              isBlog={false}
              title="E-Memoir"
              description="E-Memoir is a robust full-stack web application, It allows users to craft, manage, and delete personal diary entries. Leveraging JavaScript, Node.js, Express.js, MongoDB, and React.js, I engineered efficient RESTful APIs to seamlessly handle data flow between server and client, ensuring smooth user interactions and data management."
              ghLink="https://github.com/RajSahu1331/E-Memoir"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="DNA-Sequencing-using-Machine-Learning"
              description="It is a classification model employing traditional ML techniques to analyze DNA gene datasets. Utilizing Multinomial Bayes and Decision Trees in Python with Pandas, Numpy, and Jupyter, the model predicts genetic family likeness across human, chimpanzee, and dog DNA sequences, offering insights into evolutionary similarities."
              ghLink="https://github.com/RajSahu1331/DNA-Sequencing-using-Machine-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newsify}
              isBlog={false}
              title="NEWS.AI"
              description="NEWS.AI enables users to access the latest news via voice commands based on source, terms, or categories. With voice-controlled functionality, it reads headlines aloud and opens desired articles in new tabs, enhancing accessibility. Seamlessly combining voice interaction and news retrieval, it offers an immersive browsing experience."
              demoLink="https://newz-ai.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminDashboard}
              isBlog={false}
              title="Admin - Dashboard"
              description="Admin Dashboard provide advanced table functionalities, including pagination, character-based filtering, and record editing. Through an intuitive interface, users can seamlessly navigate extensive datasets, employing pagination for efficient browsing. The filtering feature enables precise data retrieval based on specific characters, while the editing option allows direct modification of table records."
              ghLink="https://github.com/RajSahu1331/Admin-DashBoard"
              demoLink="https://admin-dashboard-1331.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
