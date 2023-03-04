import React from "react";
import { Container, Card, Form, ProgressBar } from "react-bootstrap";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skill = ({ skills }) => {
  const icons = [
    <SiJavascript />,
    <SiHtml5 />,
    <SiCss3 />,
    <SiReact />,
    <SiBootstrap />,
    <SiRedux />,
    <SiExpress />,
    <SiMongodb />,
    <SiMysql />,
  ];
  return (
    <Container className="m-0 p-0">
      <Card.Header className="text-center border-0 shadow fs-5 fw-bold bg-light bg-opacity-50">
        Skills
      </Card.Header>
      <Card.Body className="d-grid gap-2">
        <Container className="d-lg-flex d-none py-4 bg-warning gap-4 fs-3 justify-content-center text-secondary">
          {icons.map((icon, i) => {
            return <div key={i}>{icon}</div>;
          })}
        </Container>
        {skills?.map((skill, i) => {
          return (
            <Container key={i}>
              <Form.Label>{skill?.skill}</Form.Label>
              <ProgressBar animated now={skill?.value} />
            </Container>
          );
        })}
      </Card.Body>
    </Container>
  );
};

export default Skill;
