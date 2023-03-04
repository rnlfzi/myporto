import React from "react";
import { Card, Container } from "react-bootstrap";

const Footer = ({ footer }) => {
  return (
    <Container className="bg-dark shadow rounded mt-4 text-white p-4 d-grid d-md-flex justify-content-between align-items-center">
      <Card bg="dark" className="fs-4 fw-bold fst-italic border-0">
        {footer?.id}
      </Card>
      <Card bg="dark" className="fs-6 text-white-50 border-0">
        {footer?.content}
      </Card>
    </Container>
  );
};

export default Footer;
