import React from "react";
import { FooterContainer, LogoWrapper } from "./FooterStyles";
import facebookLogo from "../../assets/icons/facebook.png";
import linkedinLogo from "../../assets/icons/linkedin.png";
import twitterLogo from "../../assets/icons/twitter.png";
import youtubeLogo from "../../assets/icons/youtube.png";
import instagramLogo from "../../assets/icons/instagram.png";
import emailLogo from "../../assets/icons/email.png";
import whatsappLogo from "../../assets/icons/whatsapp.png";

const Footer = () => {
  const icons = [
    instagramLogo,
    emailLogo,
    whatsappLogo,
    facebookLogo,
    linkedinLogo,
    twitterLogo,
    youtubeLogo,
  ];
  return (
    <FooterContainer>
      <LogoWrapper>
        {icons.map((icon, index) => (
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img key={index} src={icon} alt="icon" />
          </a>
        ))}
      </LogoWrapper>
    </FooterContainer>
  );
};

export default Footer;
