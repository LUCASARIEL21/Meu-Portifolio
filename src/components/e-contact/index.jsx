import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../../assets/imgs/linkedin.svg";
import github from "../../assets/imgs/github.svg";
import insta from "../../assets/imgs/insta.svg";
import contactImg from "../../assets/imgs/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./styles.css";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>
                    Entre em contato através dos contatos abaixo e também
                    conheça meus repositórios no github:
                  </h2>
                  <Row>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                      <div className="social-icon">
                        <a href="https://www.linkedin.com/in/lucas-ariel-0ab3721ba/">
                          <img src={linkedin} alt="Icon" />
                        </a>
                        <a href="https://github.com/LUCASARIEL21">
                          <img src={github} alt="Icon" />
                        </a>
                        <a href="https://www.instagram.com/lucas_arielfran/?hl=el">
                          <img src={insta} alt="Icon" />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
