import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import SvgFooter from "../components/SvgFooter";
import { data } from "../data";

const Layout = ({ children }) => {
  const [datas, setDatas] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setDatas(data);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <Container fluid >
        <Container fluid="xxl">
          <Row className="m-lg-5 m-md-2 mt-md-4 bgc">
            <Col sm={12} md={4} lg={3}>
              <Profile datas={datas}/>
            </Col>
            <Col sm={12} md={8} lg={9}>
              <Navigation />
              {children}
              <Footer />
            </Col>
          </Row>
          <SvgFooter />
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
