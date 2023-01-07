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
      <StyledServices>
        <h2>Nuestros Servicios</h2>
        <p>Nuestros servicios están orientados tanto a niños como a adultos.</p>
        <ImagesWrapper>
          <ImageContainer onClick={onNavigateKids}>
            <img src={kidsImg} alt="Imagen de unos niños" />
            <span>Niños</span>
          </ImageContainer>
          <ImageContainer onClick={onNavigateAdults}>
            <img src={adultsImg} alt="Imagen de unos niños" />
            <span>Adultos</span>
          </ImageContainer>
        </ImagesWrapper>
      </StyledServices>
      <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
