import React from "react";
import { Container, Card, Badge, Nav } from "react-bootstrap";
import { BiLinkAlt } from 'react-icons/bi';

const Other = ({ judul, from, link, tgl, desk }) => {
  return (
    <Container className="m-0 p-0">
      <Card className="border-0 shadow">
        <Card.Header className="text-center border-0 shadow fw-bold fs-5">
          {judul}
        </Card.Header>
        <Card.Body className="p-4">
          <div className="d-flex gap-2">
            <Card.Title className="fs-6 my-auto">{from}</Card.Title>
            <Badge bg="warning" className="text-black my-auto" pill>
              {tgl}
            </Badge>
          </div>
          <p>{desk}</p>
        </Card.Body>
        <Card.Footer className="d-grid justify-content-center border-0">
          <Nav.Link
            style={{ maxWidth: "100px" }}
            className="bg-primary text-center rounded-pill px-3 py-1 text-white d-flex align-items-center gap-1"
            href={link}
          >
            <BiLinkAlt />{' '}SHOW
          </Nav.Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Other;
