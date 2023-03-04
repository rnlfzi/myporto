import React from "react";
import { Card, Container } from "react-bootstrap";
import Project from "./Project";
import Lottie from "lottie-react";
import anim from "../assets/loading.json";

const ContentProject = ({ projects }) => {
  return (
    <>
      {projects.length === 0 ? (
        <Container className="d-flex align-items-center justify-content-center h-100 gap-2 fw-bold" id="blur">
          <Lottie animationData={anim} height={250} width={250} loop={true} />
        </Container>
      ) : (
        <Card className="shadow mt-4 border-0" id="blur">
          <Card.Header className="text-center border-0 shadow fs-5 fw-bold bg-light">
            Project List
          </Card.Header>
          {projects.map((project, i) => {
            return <Project key={i} project={project} />;
          })}
        </Card>
      )}
    </>
  );
};

export default ContentProject;
