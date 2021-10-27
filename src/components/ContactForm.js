import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";

const ContactForm = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>Contacs</h1>
          <Col>
            <a href="https://www.instagram.com/adriansalcedovargas/">
              <AiFillInstagram className="icons" />
            </a>
          </Col>
          <Col>
            <a href="https://www.facebook.com/adrian.salcedovargas.3/">
              <AiFillFacebook className="icons" />
            </a>
          </Col>
          <Col>
            <a href="https://wa.me/+51984412733">
              <AiOutlineWhatsApp className="icons" />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/SummaryPuppet">
              <AiFillGithub className="icons" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ContactForm;
