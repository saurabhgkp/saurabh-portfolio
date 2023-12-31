import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MongoDB from "../../Assets/Certificate/mongoDb.jpg";



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
                            imgPath={"https://udemy-certificate.s3.amazonaws.com/image/UC-e77ec0d8-8d48-4a30-9adc-d87b7271ac7e.jpg?v=1684678474000"}
                            isBlog={false}
                            title=" 🔰 TypeScript Basic: Type System, Interfaces, Types, Generics"
                            description="Interactive Course on Udemy."

                            demoLink="https://www.udemy.com/certificate/UC-e77ec0d8-8d48-4a30-9adc-d87b7271ac7e/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://udemy-certificate.s3.amazonaws.com/image/UC-8d741058-766f-4119-b661-2298f02470a8.jpg?v=1704043276000"}
                            isBlog={false}
                            title=" 🔰 Docker"
                            description="Interactive Course on Udemy"

                            demoLink={"https://udemy-certificate.s3.amazonaws.com/image/UC-8d741058-766f-4119-b661-2298f02470a8.jpg?v=1704043276000"}
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://wsrv.nl/?url=https%3A%2F%2Fcodedamn-user-screenshots.s3.amazonaws.com%2F758e231a211733f14e52d675115dfa354bd1b498%2F1685869928998.png&w=1920&q=70&output=webp"}
                            isBlog={false}
                            title=" 🔰 AWS EC2 For Beginners: A Complete Guide to Cloud Computing with Elastic Compute Cloud"
                            description="Interactive Course on Codedamn"

                            demoLink={"https://wsrv.nl/?url=https%3A%2F%2Fcodedamn-user-screenshots.s3.amazonaws.com%2F758e231a211733f14e52d675115dfa354bd1b498%2F1685869928998.png&w=1920&q=70&output=webp"}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://udemy-certificate.s3.amazonaws.com/image/UC-dfd112c7-e60e-4583-84d1-43566a5436b5.jpg?v=1703925135000"}
                            isBlog={false}
                            title=" 🔰 Redis Database Tutorial"
                            description="Interactive Course on Udemy"

                            demoLink={"https://udemy-certificate.s3.amazonaws.com/image/UC-dfd112c7-e60e-4583-84d1-43566a5436b5.jpg?v=1703925135000"}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={MongoDB}
                            isBlog={false}
                            title=" 🔰 MongoDB"
                            description="Interactive Course on Programminghub"

                            demoLink={MongoDB}
                        />
                    </Col>
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

                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={"https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~M6957VQA6UYY/CERTIFICATE_LANDING_PAGE~M6957VQA6UYY.jpeg"}
                            isBlog={false}
                            title="🔰 Front-End Web UI Frameworks and Tools: Bootstrap 4"
                            description=" The Hong Kong University of Science and Technology, Coursera."

                            demoLink="https://coursera.org/share/567dc696bea1154a17c9e927b9d8822c"
                        />
                    </Col> */}

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
