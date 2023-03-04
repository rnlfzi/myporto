import React from "react";
import { Card, Nav, Button, Placeholder } from "react-bootstrap";
import { MdCall, MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { IconContext } from "react-icons";
import Lottie from "lottie-react";
import anim from "../assets/icon.json";

const Profile = ({ datas }) => {
  const styleBtn = "d-flex align-items-center gap-2";
  const number = [7, 5, 6, 6, 3, 4, 3];

  return (
    <Card className="border-0 shadow mb-4 " id="blur">
      <Lottie animationData={anim} height={250} width={250} loop={true} />
      <Card.Header className="border-0 shadow fs-5 fw-bold text-center">
        {datas?.nama}
      </Card.Header>
      <Card.Body className="d-grid gap-2 p-4">
        {datas === null ? (
          <>
            <Placeholder as={Card.Text} animation="glow">
              {number.map((x, i) => {
                return <Placeholder xs={x} key={i} />;
              })}
            </Placeholder>
            <Placeholder as={Nav.Link} xs={8} />
            <Placeholder as={Nav.Link} xs={11} />
            <Placeholder as={Nav.Link} xs={4} />
          </>
        ) : (
          <IconContext.Provider value={{ color: "grey", size: "1.4rem" }}>
            <Card.Text>{datas?.bio}</Card.Text>
            <Nav.Link href="/home" className={styleBtn}>
              <MdCall />
              {datas?.no}
            </Nav.Link>
            <Nav.Link href="/home" className={styleBtn}>
              <MdEmail />
              {datas?.email}
            </Nav.Link>
            <Nav.Link href="/home" className={styleBtn}>
              <AiFillGithub />
              {datas?.github}
            </Nav.Link>
          </IconContext.Provider>
        )}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center border-0">
        <Button
          variant="warning"
          className="px-4 rounded-pill shadow d-flex align-items-center gap-2 justify-content-center fw-bold"
        >
          Download CV
          <HiDownload />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Profile;
