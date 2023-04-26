import React from "react";
import "./FooterStyle.css";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { IconButton } from "@mui/material";
import resume from "../assets/resume.pdf";

function Footer() {
  return (
    <div className="footer" id="contact">
      <h1>Contact Me!</h1>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <HomeIcon sx={{ color: "white", mr: 2, mt: 1 }} />
            <div>
              <p>17/48 Eucalyptus Drive</p>
              <p>Maidstone VIC 3012</p>
            </div>
          </div>
          <div className="phone">
            <a href="tel:+61466899156">
              <PhoneAndroidIcon sx={{ color: "white", mr: 2 }} />
              +61 466 899 156
            </a>
          </div>
          <div className="email">
            <a href="mailto: harrysantoso19@yahoo.com">
              <EmailIcon sx={{ color: "white", mr: 2 }} />
              harrysantoso19@yahoo.com
            </a>
          </div>
        </div>
        <div className="middle">
          <h4>Follow me on socials!</h4>
          <div className="social">
            <div
              className="linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/harry-santoso/")
              }
            >
              <IconButton sx={{ color: "white", mr: 0.5 }}>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <h4>LinkedIn</h4>
            </div>
            <div
              className="github"
              onClick={() => window.open("https://github.com/harry-santoso")}
            >
              <IconButton sx={{ color: "white", mr: 0.5 }}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <h4>GitHub</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>Harry's Resume</h4>
          <div className="resume">
            <a href={resume} download="Harry's CV">
              <IconButton sx={{ color: "white", mr: 0.5 }}>
                <PictureAsPdfIcon fontSize="large" />
              </IconButton>
              <h4>- Harry's CV.pdf</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
