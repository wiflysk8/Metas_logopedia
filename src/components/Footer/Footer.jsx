import React from "react";
import {
  FooterContainer,
  InfoContainer,
  InfoItem,
  LeftArea,
  LogoWrapper,
} from "./FooterStyles";
import facebookLogo from "../../assets/icons/facebook.png";
import linkedinLogo from "../../assets/icons/linkedin.png";
import instagramLogo from "../../assets/icons/instagram.png";
import emailLogo from "../../assets/icons/email.png";
import whatsappLogo from "../../assets/icons/whatsapp.png";
import locationLogo from "../../assets/icons/location.png";
import phoneLogo from "../../assets/icons/phone.png";
import { StyledLink } from "../../GlobalStyles";

const Footer = () => {
  const icons = [instagramLogo, facebookLogo, linkedinLogo];

  const sendEmail = () => {
    window.open("mailto:info@metaslogopedia.es?subject=Asunto&body=Mensaje");
  };

  return (
    <FooterContainer>
      <LeftArea>
        <InfoContainer>
          <InfoItem>
            <img src={locationLogo} alt="location" />
            <span>
              Rúa Magistrado Manuel Artime, 26 1º Derecha
              <br />
              15004 A Coruña
            </span>
          </InfoItem>

          <StyledLink
            to="#"
            onClick={() => (window.location.href = "tel:636505918")}
          >
            <InfoItem>
              <img src={phoneLogo} alt="phone logo" />
              <span>981 22 22 22</span>
            </InfoItem>
          </StyledLink>

          <InfoItem onClick={sendEmail}>
            <img src={emailLogo} alt="email logo" />
            <span>info@metaslogopedia.es</span>
          </InfoItem>
          <StyledLink href="https://api.whatsapp.com/send?phone=636505918&text=Me gustaría recibir más información a cerca de vuestros servicios.">
            <InfoItem>
              <img src={whatsappLogo} alt="email logo" />
              <span>Enviar mensaje de WhatsApp</span>
            </InfoItem>
          </StyledLink>
        </InfoContainer>

        <LogoWrapper>
          {icons.map((icon, index) => (
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img key={index} src={icon} alt="icon" />
            </a>
          ))}
        </LogoWrapper>
      </LeftArea>
    </FooterContainer>
  );
};

export default Footer;
