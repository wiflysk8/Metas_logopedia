import React from "react";
import {
  StyledDescription,
  StyledHome,
  StyledImageContainer,
} from "./HomePageStyle";
import Background from "../../assets/images/hero.png";
import DemoCarousel from "../../components/ImageCarousel/ImageCarousel";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <StyledHome>
        <StyledImageContainer>
          <img src={Background} alt="Metas - Centro de Logopedia en A Coruña" />
        </StyledImageContainer>

        <StyledDescription>
          <h1>Metas: Tu Centro de Logopedia en A Coruña</h1>

          <p>
            <strong>Metas Centro de Logopedia</strong>, ubicado en pleno corazón
            de
            <strong> A Coruña</strong>, nace con la misión de brindar un
            servicio sanitario centrado en el tratamiento de los trastornos de
            la comunicación, el habla, el lenguaje y la deglución.
          </p>
          <p>
            La creación de Metas surge tras muchos años de gran esfuerzo y
            dedicación por parte de sus fundadoras. Nuestro equipo de
            <strong> logopedas en Coruña</strong> trabaja incansablemente para
            ofrecer soluciones personalizadas y un servicio de máxima calidad en
            el ámbito de la rehabilitación y la terapia del lenguaje.
          </p>

          <p>
            Con nuestra pasión y determinación, hemos logrado crear un centro
            referente que se ha ganado la <strong>confianza</strong> y el
            <strong> reconocimiento</strong> de pacientes y familias en toda la
            provincia.
          </p>
        </StyledDescription>

        <DemoCarousel />
      </StyledHome>
      <Footer />
    </>
  );
};

export default HomePage;
