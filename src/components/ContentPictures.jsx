import React from "react";
import { Card, Container } from "react-bootstrap";
import Lottie from "lottie-react";
import anim from "../assets/loading.json";
import Picture from "./Picture";

const ContentPictures = ({ pictures }) => {
  return (
    <>
      {pictures.length === 0 ? (
        <Container className="d-flex align-items-center justify-content-center h-100 shadow mt-4 rounded" id="blur">
          <Lottie animationData={anim} height={250} width={250} loop={true} />
        </Container>
      ) : (
        <Card className="shadow mt-4 border-0" id="blur">
          {pictures.map((picture, i) => {
            return <Picture key={i} {...picture} />;
          })}
        </Card>
      )}
    </>
  );
};

export default ContentPictures;
