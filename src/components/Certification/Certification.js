import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";




function Certification() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Certification </strong>
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Z6UQASV2W49W/CERTIFICATE_LANDING_PAGE~Z6UQASV2W49W.jpeg"}
                            isBlog={false}
                            title=" 🔰 Front-End Web Development with React "
                            description="The Hong Kong University of Science and Technology, Coursera."

                            demoLink="https://coursera.org/share/9ce5f5e3147a63fa6f4c9ea7b32f4364"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TP6QVWJ2GPGK/CERTIFICATE_LANDING_PAGE~TP6QVWJ2GPGK.jpeg"}
                            isBlog={false}
                            title=" 🔰 Server-side Development with NodeJS, Express and MongoDB"
                            description=" The Hong Kong University of Science and Technology, Coursera."

                            demoLink="https://coursera.org/share/64c52fe72a102a443028ddaa26266a45"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~M6957VQA6UYY/CERTIFICATE_LANDING_PAGE~M6957VQA6UYY.jpeg"}
                            isBlog={false}
                            title="🔰 Front-End Web UI Frameworks and Tools: Bootstrap 4"
                            description=" The Hong Kong University of Science and Technology, Coursera."

                            demoLink="https://coursera.org/share/567dc696bea1154a17c9e927b9d8822c"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Z6UQASV2W49W/CERTIFICATE_LANDING_PAGE~Z6UQASV2W49W.jpeg"}
                            isBlog={false}
                            title="🔰 Full-Stack Web Development with React"
                            description=" The Hong Kong University of Science and Technology, Coursera."

                            demoLink="https://coursera.org/share/9ce5f5e3147a63fa6f4c9ea7b32f4364"
                        />
                    </Col>



                </Row>
            </Container>
        </Container>
    );
}

export default Certification;
