import React from "react";
import { Container, Card, Badge, Nav } from "react-bootstrap";

const Project = ({ judul, sampul, link, tech_stack, deskripsi }) => {
  return (
    <Container className="m-0 p-0">
      <Card className="m-4 border-0 shadow" id="blur">
        <Card.Img variant="top" src={require(`../assets/project/${sampul}`)} />
        <Card.Header className="text-center border-0 shadow fs-5 fw-bold bg-light bg-opacity-50">
          {judul}
        </Card.Header>
        <Card.Body>
          <Badge bg="secondary">{tech_stack}</Badge>
          <Card.Text>{deskripsi}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Nav.Link
            className="bg-warning px-4 text-dark fw-bold rounded-pill shadow"
            href={link}
          >
            Live Demo
          </Nav.Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Project;
