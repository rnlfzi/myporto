import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { AiFillSound } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSpeechSynthesis } from "react-speech-kit";
import { text } from "../data";

const ButtonSound = () => {
  const { speak } = useSpeechSynthesis();
  const btnStyle = {
    position: "fixed",
    zIndex: 10,
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
  };

  const popStyle = {
    position: "fixed",
    zIndex: 10,
    bottom: "80px",
    right: "20px",
    width: "50px",
    height: "50px",
  };

  const handleClick = () => {
    speak({ text: text });
  };

  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="left"
        overlay={
          <Popover className="border-0 shadow">
            <Popover.Header as="h3"></Popover.Header>
            <Popover.Body className="d-grid justify-content-center">
              <p className="text-center"><strong>My Address</strong>, Scan !!!</p>
              <img src={require('../assets/map.png')} alt="map" width="150px" />
            </Popover.Body>
          </Popover>
        }
      >
        <Button
          style={popStyle}
          className="rounded-circle d-flex align-items-center justify-content-center shadow"
        >
          <FaMapMarkerAlt size={"1.5em"} />
        </Button>
      </OverlayTrigger>
      <Button
        style={btnStyle}
        className="rounded-circle d-flex align-items-center justify-content-center shadow"
        onClick={handleClick}
      >
        <AiFillSound size={"1.5em"} />
      </Button>
    </>
  );
};

export default ButtonSound;
