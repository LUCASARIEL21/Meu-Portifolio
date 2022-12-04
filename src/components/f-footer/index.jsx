import { Container, Row, Col } from "react-bootstrap";
import youtube from '../../assets/imgs/youtube.svg';
import github from '../../assets/imgs/github.svg';
import './styles.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={24} sm={12} className="text-center text-sm-end">
          <p>Créditos</p>
            <div className="credit-icon">
              <a href="https://www.youtube.com/channel/UCObrjoZZJSjznfCO5Vx9qUQ"><img src={youtube} alt="Icon" /></a>
              <a href="https://github.com/judygab"><img src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}