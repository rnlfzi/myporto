import React from "react";
import { Button } from "react-bootstrap";
import { AiFillSound } from "react-icons/ai";
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

  const handleClick = () => {
    speak({ text: text });
  };

  return (
    <>
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
