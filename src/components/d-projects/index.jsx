import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import venc from "../../assets/imgs/projeto derivado da OLX.png";
import relogio from "../../assets/imgs/projeto relogio.png";
import calculadora from "../../assets/imgs/projeto calculadora.png";
import viagens from "../../assets/imgs/projeto webpage travel.png";
import SysLog from "../../assets/imgs/projeto sistema login.png";
import projImg from "../../assets/imgs/project-img.png";
import colorSharp2 from "../../assets/imgs/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./styles.css";

export const Projects = () => {
  const projects = [
    {
      title: "VENC",
      description: "Sistema de compras e vendas",
      imgUrl: venc,
    },
    {
      title: "Relogio",
      description: "Relogio digital",
      imgUrl: relogio,
    },
    {
      title: "Calculadora",
      description: "Calculadora digital",
      imgUrl: calculadora,
    },
    {
      title: "ViagensBr",
      description: "Webpage Viagens",
      imgUrl: viagens,
    },
    {
      title: "System Log",
      description: "Sistema de login",
      imgUrl: SysLog,
    },
    {
      title: "Em Breve",
      description: "Projeto em desenvolvimento",
      imgUrl: projImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>
                    Aqui estão todos os Projetos que eu fiz e os que ainda
                    planejo fazer.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tabela 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tabela 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tabela 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>EM BREVE!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>EM BREVE!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
