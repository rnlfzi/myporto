import React from "react";
import { Card, Container, Accordion, ListGroup, Badge } from "react-bootstrap";
import { MdWork } from 'react-icons/md'

const Work = ({ works }) => {
  return (
    <Container className="m-0 p-0">
      <Card.Header className="text-center border-0 shadow fs-5 fw-bold bg-light bg-opacity-50">
        Work Experience
      </Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="0" className="shadow rounded">
          {works?.map((work, i) => {
            return (
              <Accordion.Item
                key={i}
                eventKey={i}
                className="border-0 border-bottom bg-light"
              >
                <Accordion.Header>
                  <MdWork size={'1.5em'} className="me-1 bg-warning rounded-circle p-1"/>
                  {work?.pt}
                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup.Item
                    as="li"
                    className="d-grid gap-2"
                  >
                    <div className="d-flex justify-content-between">
                      <div className="fw-bold">{work?.jabatan}</div>
                      <Badge bg="warning" className="text-black my-auto" pill>
                        {work?.tahun}
                      </Badge>
                    </div>
                    <p>{work?.deskripsi}</p>
                  </ListGroup.Item>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Card.Body>
    </Container>
  );
};

export default Work;
