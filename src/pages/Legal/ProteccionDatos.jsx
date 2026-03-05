import React from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import { LegalContainer, LegalContent } from "./LegalStyles";

const ProteccionDatos = () => {
  return (
    <>
      <LegalContainer>
        <LegalContent>
          <h1>Protección de Datos</h1>
          <p>
            Este es un texto placeholder para la Política de Protección de
            Datos. El contenido real será añadido posteriormente.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </LegalContent>
      </LegalContainer>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default ProteccionDatos;

