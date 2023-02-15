import React from "react";
import { Card, Container } from "react-bootstrap";
import Education from "./Education";
import Skill from "./Skill";
import Work from "./Work";
import Lottie from "lottie-react";
import anim from "../assets/loading.json";

const ContentHome = ({ educations, works, skills }) => {
  return (
    <>
      {educations.length === 0 ? (
        <Container className="d-flex align-items-center justify-content-center h-100 gap-2 fw-bold" id="blur">
          <Lottie animationData={anim} height={250} width={250} loop={true} />
        </Container>
      ) : (
        <Card className="shadow mt-4 border-0" id="blur">
          <Education educations={educations} />
          <Work works={works} />
          <Skill skills={skills} />
        </Card>
      )}
    </>
  );
};

export default ContentHome;
