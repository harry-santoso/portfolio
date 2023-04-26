import React, { useState } from "react";
import "./NavbarStyle.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={scroll ? "header header-bg" : "header"}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <h1 style={{ cursor: "pointer" }}>harry_santoso.</h1>
      </Link>
      <ul className={open ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            .home()
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            .project()
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            .about()
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            .contact()
          </Link>
        </li>
      </ul>
      <div className="hamburger">
        <IconButton sx={{ color: "white" }} onClick={handleOpen}>
          {open ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
