import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { HiHome } from "react-icons/hi2";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

const Navigation = () => {
  const [active, setActive] = React.useState("");
  const links = ["Project", "Certificate", "Pictures"];
  const sosmeds = [
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/62895370077222",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/rnl________",
    },
    {
      icon: <FaTelegram />,
      link: "https://t.me/62895370077222",
    },
    {
      icon: <AiFillGitlab />,
      link: "https://gitlab.com/rnlfzi",
    },
  ];

  const showPathName = () => {
    const pathname = window.location.pathname;

    if (pathname === "/Project") return "Project";
    else if (pathname === "/Certificate") return "Certificate";
    else if (pathname === "/Pictures") return "Pictures";
    else return "";
  };

  React.useEffect(() => {
    setActive(showPathName());
  }, []);

  return (
    <Container
      id="navbar"
      className="bg-light shadow rounded p-0 d-flex justify-content-between"
    >
      <Nav>
        <Nav.Item className="bg-warning rounded-start">
          <NavLink to="/" className="p-3 d-flex align-items-center">
            <HiHome color="black" size="1.5rem" />
          </NavLink>
        </Nav.Item>
        {links.map((link, i) => {
          return (
            <Nav.Item key={i}>
              <NavLink
                to={`/${link}`}
                style={{
                  color: link === active ? "orange" : "black",
                  borderBottom: link === active ? "3px solid orange" : "none",
                }}
                className=" fw-bold p-3 d-flex align-items-center nav-link"
              >
                {link}
              </NavLink>
            </Nav.Item>
          );
        })}
      </Nav>
      <Nav className="bg-warning rounded-end">
        {sosmeds.map((sosmed, i) => {
          const { icon, link } = sosmed;
          return (
            <Nav.Item key={i} className="d-flex align-items-center">
              <Nav.Link
                className="text-dark d-flex align-items-center fs-5"
                href={link}
              >
                {icon}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Container>
  );
};

export default Navigation;
