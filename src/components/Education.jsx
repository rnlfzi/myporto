import React from "react";
import { Accordion, ListGroup, Badge, Card, Container } from "react-bootstrap";
import { MdSchool } from "react-icons/md";

const Education = ({ educations }) => {
  return (
    <Container className="m-0 p-0">
      <Card.Header
        className="text-center border-0 shadow fs-5 fw-bold bg-light bg-opacity-50"
        id="blur"
      >
        Education History
      </Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="0" className="shadow rounded">
          {educations.map((education, i) => {
            const { data } = education;
            return (
              <Accordion.Item
                key={i}
                eventKey={i}
                className="border-0 border-bottom bg-light"
              >
                <Accordion.Header>
                  <MdSchool
                    size={"1.5em"}
                    className="me-1 bg-warning rounded-circle p-1"
                  />
                  {education?.judul}
                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup.Item as="li" className="d-grid gap-2">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="fw-bold">{data?.sekolah}</h6>
                        {data?.program}
                      </div>
                      <Badge bg="warning" className="text-black my-auto" pill>
                        {data?.th_lulus}
                      </Badge>
                    </div>
                    <p>{data?.deskripsi}</p>
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

export default Education;
