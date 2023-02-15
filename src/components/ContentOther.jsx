import React from "react";
import { Card, Container } from "react-bootstrap";
import Lottie from "lottie-react";
import anim from "../assets/loading.json";
import Other from "./Other";

const ContentOther = ({ others }) => {
  return (
    <>
      {others.length === 0 ? (
        <Container className="d-flex align-items-center justify-content-center h-100 shadow mt-4 rounded" id="blur">
          <Lottie animationData={anim} height={250} width={250} loop={true} />
        </Container>
      ) : (
        <Card className="shadow mt-4 border-0 gap-4 p-4" id="blur">
          {others.map((other, i) => {
            return <Other key={i} {...other} />;
          })}
        </Card>
      )}
    </>
  );
}

export default ContentOther
