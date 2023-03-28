import React from "react";
import { Container, Card, Badge, Nav } from "react-bootstrap";

const Project = ({ project }) => {
  return (
    <Container className="m-0 p-0">
      <Card className="m-4 border-0 shadow" id="blur">
        <Card.Img
          variant="top"
          src={require(`../assets/project/${project?.sampul}`)}
        />
        <Card.Header className="text-center border-0 shadow fs-5 fw-bold bg-light bg-opacity-50">
          {project?.judul}
        </Card.Header>
        <Card.Body>
          <Badge bg="secondary">{project?.tech_stack}</Badge>
          <Card.Text>{project?.deskripsi}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Nav.Link
            className="bg-warning px-4 text-dark fw-bold rounded-pill shadow"
            href={project?.link}
          >
            Live Demo
          </Nav.Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Project;
