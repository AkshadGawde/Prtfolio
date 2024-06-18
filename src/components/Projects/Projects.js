import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import nmims from "../../Assets/Projects/nmims.png";
import DD from "../../Assets/Projects/DD.png";
import ECELL from "../../Assets/Projects/ECELL logo.svg";
import Pinnacle from "../../Assets/Projects/Pinncale-logo.webp";
import Adv from "../../Assets/Projects/Adv.jpeg";

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
              imgPath={chatify}
              isBlog={false}
              title="E-commerce"
              description="Successfully designed and developed a feature-rich e-commerce website leveraging the power of React.js. This project showcases my proficiency in creating dynamic and responsive user interfaces. Additionally, I integrated APIs seamlessly to enhance the website's functionality, ensuring a seamless and efficient shopping experience for users."
              ghLink="https://github.com/AkshadGawde/E-commerce"
              demoLink="https://ecommerce.akshad.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pinnacle}
              isBlog={false}
              title="ClassHub"
              description="Designed and developed a dynamic and engaging website for a Mumbai-based educational institution, utilizing the versatility of React.js. This project not only underscores my expertise in crafting intuitive user interfaces but also emphasizes the tailored solutions provided for the specific needs of the classes."
              ghLink="https://github.com/AkshadGawde"
              demoLink="https://pinnaclegrouptuitions.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Adv}
              isBlog={false}
              title="ClassHub"
              description="Designed and developed a dynamic and engaging website for a Mumbai-based educational institution, utilizing the versatility of React.js. This project not only underscores my expertise in crafting intuitive user interfaces but also emphasizes the tailored solutions provided for the specific needs of the classes."
              ghLink="https://github.com/AkshadGawde"
              demoLink="https://advclasses.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather App"
              description="Designed and implemented a dynamic Weather App utilizing HTML, CSS, and JavaScript, seamlessly integrating real-time weather forecasts through API integration. Users can now experience up-to-the-minute weather updates at their fingertips, enhancing their daily planning and activities."
              ghLink="https://github.com/AkshadGawde/Portfoilo/blob/main/weather.html"
              demoLink="https://weather.akshad.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio Website"
              description="Crafted a personalized and visually stunning portfolio website for a friend using vanilla JavaScript, HTML, and CSS. The website showcases their unique skills, projects, and personality, providing a standout online presence to leave a lasting impression."
              ghLink="https://github.com/AkshadGawde/Shivansh_Web"
              demoLink="https://shivansh2508.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECELL}
              isBlog={false}
              title="E-cell Nmims"
              description="Developed a user-friendly website for E-cell at NMIMS Navi Mumbai which provides
comprehensive information about the committee and its events. Optimized website performance and accessibility, adhering to web standards and usability
guidelines."
              ghLink="https://github.com/AkshadGawde/E-CELL_NMIMS.git"
              demoLink="ecell.akshad.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nmims}
              isBlog={false}
              title="NMIMS Portal"
              description="A robust college management system and a scalable database database using Firestore Cloud,
serving as a centralized platform for faculty and student’s needs. Implemented a seamless sign-up/sign-in functionalities and personalized dashboards also
integrated the database to efficiently manage and display academic information, enhancing
communication and workflow between faculty and students. "
              ghLink="https://github.com/AkshadGawde/NMIMS-Student-Portal.git"
              demoLink="https://portal.prabir.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DD}
              isBlog={false}
              title="Freelance Website"
              description="Collaborated with my friend to craft a dynamic freelance website that showcases our combined expertise in web development. Leveraged HTML for structure, CSS for sleek and responsive styling, and JavaScript to bring interactive elements to life. To streamline our workflow and optimize performance, we employed the powerful Parcel bundler. "
              ghLink="https://github.com/PrabirKalwani/Portfolio_Site"
              demoLink="https://thedd.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
