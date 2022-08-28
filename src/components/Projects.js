import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/crypto-img.png";
import projImg2 from "../assets/img/Expense-img.png";
import projImg3 from "../assets/img/game-img.png";
import projImg4 from "../assets/img/simon-img.png";
import projImg5 from "../assets/img/tindog-img.png";
import projImg6 from "../assets/img/Weather-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather Project",
      description: "Complete hub weather details of any city",
      imgUrl: projImg6,
      link: "https://github.com/rijulJain25/Weather-Wiz"
    },
    {
      title: "Crypto Station",
      description: "Complete Cryptocurrency Tracker",
      imgUrl: projImg1,
      link: "https://cryptostationbyrijul.netlify.app"
    },
    {
      title: "Dwarf-Runner",
      description: "Shooting game using python",
      imgUrl: projImg3,
      link: "https://github.com/rijulJain25/Python-Projects/tree/main/Dwarf%20Runnerz"
    },
    {
      title: "Simon Game",
      description: "A memory test game",
      imgUrl: projImg4,
      link: "https://github.com/rijulJain25/Simon-Game"
    },
    {
      title: "TinDog-Webpage",
      description: "Perfect place for you to find a dog",
      imgUrl: projImg5,
      link: "https://tindogclonerijul.netlify.app"
    },
    {
      title: "Expense Manager",
      description: "Manages all your daily expenses as well as earnings",
      imgUrl: projImg2,
      link: "https://expensemanagerbyrijul.netlify.app"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of my very interesting projects which may can help in grabing a dream job. Also these all projects are open source on github so can visit there anytime for Source code. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
