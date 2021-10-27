import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiNodejs, DiReact, DiMongodb } from "react-icons/di";

import { BsFillBootstrapFill } from "react-icons/bs";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About</h1>
          <p>
            I'm a start programming in 2020 in quarantine. When i'm 15 years
            old.
          </p>
          <p>I have habilities in ReactJS, Bootstrap, Nodejs, Express and MongoDB.</p>
        </Col>
        <Col>
          <DiNodejs className="icons m-3" />
          <DiReact className="icons m-3" />
          <DiMongodb className="icons m-3" />
          <BsFillBootstrapFill className="icons m-3" />
        </Col>
      </Row>
    </Container>
  );
};
export default About;
