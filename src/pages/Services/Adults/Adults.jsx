import React from "react";
import Footer from "../../../components/Footer/Footer";
import {
  ContentColumn,
  ContentContainer,
  StyledServices,
} from "../ServicesPageStyles";
import Seo from "../../../components/Seo";
import { SEO } from "../../../config/seo";

const Adults = () => {
  return (
    <>
      <Seo
        title={SEO.serviciosAdultos.title}
        description={SEO.serviciosAdultos.description}
        path={SEO.serviciosAdultos.path}
      />
    <StyledServices className="services-areas">
      <h1>Áreas de intervención en adultos</h1>
      <ContentContainer>
        <ContentColumn>
          <h2>ESTIMULACIÓN COGNITIVA</h2>
          <div>
            <ul>
              <li>Lenguaje oral y escrito</li>
              <li>Agnosias (pérdida de la capacidad de identificar objetos)</li>
              <li>Memoria</li>
              <li>Atención</li>
              <li>Orientación</li>
            </ul>
          </div>

          <h2>HABLA</h2>
          <div>
            <ul>
              <li>Disfemia (tartamudez)</li>
              <li>Disartria (dificultad para hablar)</li>
            </ul>
          </div>

          <h2>DEGLUCIÓN</h2>
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
          <h2>ENFERMEDADES NEURODEGENERATIVAS</h2>
          <div>
            <ul>
              <li>Demencias (Alzheimer)</li>
            </ul>
          </div>

          <h2>AUDICIÓN</h2>
          <div>
            <ul>
              <li>Hipoacusia</li>
              <li>Implante coclear</li>
            </ul>
          </div>

          <h2>VOZ</h2>
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
