import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function footer() {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="p-0" md={3} sm={12}>
            T. Scott
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default footer;
