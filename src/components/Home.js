import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import perfil from "../perfil.jpeg";

const Home = () => {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="mb-2">
            <h1 className="mb-4">Adrian Salcedo</h1>
            <p>
              Welcome to a my web portfolio. My space in which you will see my
              proyects.
            </p>
            <p>
              My name is Adrian Salcedo. I'm 18 years old. I'm living in Peru.
            </p>
            <p>I'm a junior frontend and backend developer.</p>
            <p>My hobbie are riding a bike and speedcubing</p>
            <Link to="/about" className="btn btn-dark mt-3 me-3">
              About
            </Link>
            <Link to="/contact" className="btn btn-dark mt-3 me-3">
              Contact
            </Link>
          </Col>
          <Col>
            <Image className="img" rounded src={perfil} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
