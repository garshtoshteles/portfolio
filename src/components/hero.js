import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

function hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-2">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-2 font-weight-bold">{props.title}</h1>
            )}
            {props.subtitle && (
              <h2 className="display-4 font-weight-light">{props.subtitle}</h2>
            )}
            {props.text && <h3 className="lead">{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default hero;
