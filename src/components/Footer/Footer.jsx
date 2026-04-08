import React from "react";
import {
  FooterContainer,
  InfoContainer,
  InfoItem,
  LeftArea,
  LogoWrapper,
  MiddleArea,
  SocialWrapper,
  FooterText,
  LegalLinksContainer,
  LegalLink,
  InternalLinksSection,
  InternalLinksTitle,
  InternalLinksList,
  InternalLink,
  FooterCrawlLink,
} from "./FooterStyles";
import linkedinLogo from "../../assets/icons/linkedin.png";
import instagramLogo from "../../assets/icons/instagram.png";
import emailLogo from "../../assets/icons/email.png";
import whatsappLogo from "../../assets/icons/whatsapp.png";
import locationLogo from "../../assets/icons/location.png";
import phoneLogo from "../../assets/icons/phone.png";
import { StyledLink } from "../../GlobalStyles";

const MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rúa Magistrado Manuel Artime 26, 1º Derecha, 15004 A Coruña");

const Footer = () => {
  const socials = [
    {
      name: "instagram",
      logo: instagramLogo,
      url: "https://www.instagram.com/metas.logopedia/",
      width: 512,
      height: 512,
    },
    {
      name: "linkedin",
      logo: linkedinLogo,
      url: "https://www.linkedin.com/company/metas-logopedia/",
      width: 128,
      height: 128,
    },
  ];

  return (
    <FooterContainer>
      <LeftArea>
        <InfoContainer>
          <InfoItem>
            <FooterCrawlLink
              href={MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir dirección de Metas en Google Maps"
            >
              <img
                src={locationLogo}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                aria-hidden={true}
              />
              <div className="flex flex-col mt-4">
                <span>Rúa Magistrado Manuel Artime 26, 1º Derecha</span>
                <span>15004 A Coruña</span>
              </div>
            </FooterCrawlLink>
          </InfoItem>

          <InfoItem>
            <img
              src={phoneLogo}
              alt="Teléfono de contacto"
              width={512}
              height={512}
              loading="lazy"
            />
            <div>
              <StyledLink href="tel:604077457">
                <span>604 077 457</span>
              </StyledLink>
            </div>
          </InfoItem>

          <InfoItem>
            <FooterCrawlLink href="mailto:info@metaslogopedia.es">
              <img
                src={emailLogo}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                aria-hidden={true}
              />
              <span>info@metaslogopedia.es</span>
            </FooterCrawlLink>
          </InfoItem>
          <StyledLink
            href="https://api.whatsapp.com/send?phone=604077457&text=Me gustaría recibir más información a cerca de vuestros servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            <InfoItem>
              <img
                src={whatsappLogo}
                alt="WhatsApp"
                width={512}
                height={512}
                loading="lazy"
              />
              <span>Enviar mensaje de WhatsApp</span>
            </InfoItem>
          </StyledLink>
        </InfoContainer>
        <MiddleArea>
          <SocialWrapper>
            <h2 style={{ fontWeight: "bold" }}>Siguenos en:</h2>
            <LogoWrapper>
              {socials.map((social, index) => (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.logo}
                >
                  <img
                    src={social.logo}
                    alt={`Metas en ${social.name}`}
                    width={social.width}
                    height={social.height}
                    loading="lazy"
                  />
                </a>
              ))}
            </LogoWrapper>
          </SocialWrapper>
          <FooterText>
            Registro Sanitario C-15-004775
          </FooterText>
        </MiddleArea>
      </LeftArea>
      <InternalLinksSection aria-label="Enlaces de interés del sitio">
        <InternalLinksTitle>Enlaces de interés</InternalLinksTitle>
        <InternalLinksList>
          <li>
            <InternalLink to="/">Inicio — logopedia en A Coruña</InternalLink>
          </li>
          <li>
            <InternalLink to="/equipo">Equipo de logopedas</InternalLink>
          </li>
          <li>
            <InternalLink to="/servicios">Servicios para niños y adultos</InternalLink>
          </li>
          <li>
            <InternalLink to="/servicios/ninos">Logopedia infantil</InternalLink>
          </li>
          <li>
            <InternalLink to="/servicios/adultos">Logopedia para adultos</InternalLink>
          </li>
          <li>
            <InternalLink to="/metodologia">Metodología de intervención</InternalLink>
          </li>
          <li>
            <InternalLink to="/contacto">Cita e información</InternalLink>
          </li>
          <li>
            <InternalLink to="/blog">Blog</InternalLink>
          </li>
        </InternalLinksList>
      </InternalLinksSection>
      <LegalLinksContainer>
        <LegalLink to="/aviso-legal">Aviso legal</LegalLink>
        <LegalLink to="/proteccion-datos">Protección de datos</LegalLink>
        <LegalLink to="/cookies">Cookies</LegalLink>
      </LegalLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
