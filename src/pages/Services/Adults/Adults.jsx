import React from "react";
import Footer from "../../../components/Footer/Footer";
import {
  ContentColumn,
  ContentContainer,
  StyledServices,
} from "../ServicesPageStyles";

const Adults = () => {
  return (
    <>
    <StyledServices>
      <h4>ÁREAS DE INTERVENCIÓN EN ADULTOS</h4>
      <ContentContainer>
        <ContentColumn>
          <h3>ESTIMULACIÓN COGNITIVA</h3>
          <div>
            <ul>
              <li>Lenguaje oral y escrito</li>
              <li>Agnosias (pérdida de la capacidad de identificar objetos)</li>
              <li>Memoria</li>
              <li>Atención</li>
              <li>Orientación</li>
            </ul>
          </div>

          <h3>HABLA</h3>
          <div>
            <ul>
              <li>Disfemia (tartamudez)</li>
              <li>Disartria (dificultad para hablar)</li>
            </ul>
          </div>

          <h3>DEGLUCIÓN</h3>
          <div>
            <ul>
              <li>Deglución atípica</li>
              <li>Disfagia</li>
              <li>Dificultades en alguno de los procesos de la deglución</li>
              <li>Inadecuado posicionamiento lingual</li>
            </ul>
          </div>
        </ContentColumn>

        <ContentColumn>
          <h3>ENFERMEDADES NEURODEGENERATIVAS</h3>
          <div>
            <ul>
              <li>Demencias (Alzheimer)</li>
            </ul>
          </div>

          <h3>AUDICIÓN</h3>
          <div>
            <ul>
              <li>Hipoacusia</li>
              <li>Implante coclear</li>
            </ul>
          </div>

          <h3>VOZ</h3>
          <div>
            <ul>
              <li>Disfonía</li>
              <li>Higiene vocal</li>
            </ul>
          </div>
        </ContentColumn>
      </ContentContainer>
    </StyledServices>
    <Footer/>
    </>
  );
};

export default Adults;
