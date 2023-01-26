import React from "react";
import {
  FooterContainer,
  InfoContainer,
  InfoItem,
  LeftArea,
  LogoWrapper,
  SocialWrapper,
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
  const socials = [
    {
      name: "instagram",
      logo: instagramLogo,
      url: "https://www.instagram.com/metas.logopedia/",
    },
    {
      name: "facebook",
      logo: facebookLogo,
      url: "https://www.facebook.com/metaslogopedia/",
    },
    {
      name: "linkedin",
      logo: linkedinLogo,
      url: "https://www.linkedin.com/company/metaslogopedia/",
    },
  ];

  const sendEmail = () => {
    window.open("mailto:info@metaslogopedia.es?subject=Asunto&body=Mensaje");
  };

  const searchAdress = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=Rúa Magistrado Manuel Artime, 26`;
    window.open(url, "_blank");
  };

  return (
    <FooterContainer>
      <LeftArea>
        <InfoContainer>
          <InfoItem onClick={searchAdress}>
            <img src={locationLogo} alt="location" />
            <div className="flex flex-col mt-4">
              <span>Rúa Magistrado Manuel Artime 26, 1º Derecha</span>

              <span>15004 A Coruña</span>
            </div>
          </InfoItem>

          <StyledLink
            to="#"
            onClick={() => (window.location.href = "tel:604077457")}
          >
            <InfoItem>
              <img src={phoneLogo} alt="phone logo" />
              <div>
                <span>667648026</span>
                <span> 660 30 31 09</span>
                <span>604 077 457</span>
              </div>
            </InfoItem>
          </StyledLink>

          <InfoItem onClick={sendEmail}>
            <img src={emailLogo} alt="email logo" />
            <span>info@metaslogopedia.es</span>
          </InfoItem>
          <StyledLink
            href="https://api.whatsapp.com/send?phone=604077457&text=Me gustaría recibir más información a cerca de vuestros servicios."
            target="_blank"
          >
            <InfoItem>
              <img src={whatsappLogo} alt="email logo" />
              <span>Enviar mensaje de WhatsApp</span>
            </InfoItem>
          </StyledLink>
        </InfoContainer>

        <SocialWrapper>
          <h1 style={{ fontWeight: "bold" }}>Siguenos en:</h1>
          <LogoWrapper>
            {socials.map((social, index) => (
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                key={social.logo}
              >
                <img src={social.logo} alt="icon" />
              </a>
            ))}
          </LogoWrapper>
        </SocialWrapper>
      </LeftArea>
    </FooterContainer>
  );
};

export default Footer;
