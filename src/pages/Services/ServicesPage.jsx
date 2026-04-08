import React from "react";
import {
  ImageContainer,
  ImagesWrapper,
  StyledServices,
} from "./ServicesPageStyles";
import kidsImg from "../../assets/images/kids.jpg";
import adultsImg from "../../assets/images/adults.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import Seo from "../../components/Seo";
import { SEO } from "../../config/seo";

const ServicesPage = () => {
  const navigate = useNavigate();

  const onNavigateKids = () => {
    navigate("/servicios/ninos");
    window.scrollTo(0, 0);
  };

  const onNavigateAdults = () => {
    navigate("/servicios/adultos");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Seo
        title={SEO.servicios.title}
        description={SEO.servicios.description}
        path={SEO.servicios.path}
      />
      <StyledServices className="mb-10">
        <h1>Nuestros servicios de logopedia</h1>
        <h2>Atención personalizada para niños y adultos en A Coruña</h2>
        <p>Nuestros servicios están orientados tanto a niños como a adultos.</p>
        <ImagesWrapper>
          <ImageContainer onClick={onNavigateKids}>
            <img
              src={kidsImg}
              alt="Servicios de logopedia para niños en A Coruña"
              width={1380}
              height={1029}
              loading="lazy"
              decoding="async"
            />
            <span>Niños</span>
          </ImageContainer>
          <ImageContainer onClick={onNavigateAdults}>
            <img
              src={adultsImg}
              alt="Servicios de logopedia para adultos en A Coruña"
              width={1380}
              height={920}
              loading="lazy"
              decoding="async"
            />
            <span>Adultos</span>
          </ImageContainer>
        </ImagesWrapper>
      </StyledServices>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default ServicesPage;
