import React from "react";
import Footer from "../../../components/Footer/Footer";
import {
  ContentColumn,
  ContentContainer,
  StyledServices,
} from "../ServicesPageStyles";
import Seo from "../../../components/Seo";
import { SEO } from "../../../config/seo";

const Kids = () => {
  return (
    <>
      <Seo
        title={SEO.serviciosNinos.title}
        description={SEO.serviciosNinos.description}
        path={SEO.serviciosNinos.path}
      />
    <StyledServices className="services-areas">
      <h1>Áreas de intervención en niños</h1>
      <ContentContainer>
        <ContentColumn>
          <h2>LENGUAJE</h2>
          <div>
            <ul>
              <li>
                Trastorno del Desarrollo del Lenguaje (TDL)
                <br />
                <span style={{ fontSize: "12px" }}>
                  Anteriormente denominado Trastono Específico del Lenguaje
                  (TEL)
                </span>
              </li>
              <li>Retraso del Lenguaje</li>
              <li>Mutismo Selectivo</li>
              <li>Afasia</li>
            </ul>
          </div>

          <h2>HABLA</h2>
          <div>
            <ul>
              <li>Trastorno de los Sonidos del Habla (TSH) :</li>
              <li style={{ listStyle: "inside" }}>Dislalia</li>
              <li style={{ listStyle: "inside" }}>Disartria</li>
              <li style={{ listStyle: "inside" }}>Disfemia (Tartamudez)</li>
              <li style={{ listStyle: "inside" }}>Taquilalia</li>
            </ul>
          </div>

          <h2>COMUNICACIÓN</h2>
          <div>
            <ul>
              <li>Habilidades sociales</li>
              <li>Sistemas aumentativos y alternativos</li>
            </ul>
          </div>
        </ContentColumn>

        <ContentColumn>
          <h2>LECTURA Y ESCRITURA</h2>
          <div>
            <ul>
              <li>Trastorno específico del aprendizaje:</li>
              <li style={{ listStyle: "inside" }}>
                Dificultades en la lectura
              </li>
              <li style={{ listStyle: "inside" }}>
                Dificultades en la expresión escrita
              </li>
              <li style={{ listStyle: "inside" }}>Dificultades matemáticas</li>
            </ul>
          </div>

          <h2>DEGLUCIÓN ATÍPICA</h2>
          <div>
            <ul>
              <li>Dificultades en alguna de las fases deglutorias:</li>
              <li style={{ listStyle: "inside" }}>Fase oral</li>
              <li style={{ listStyle: "inside" }}>Fase faríngea</li>
              <li>Inadecuado posicionamiento lingual</li>
              <li>Malos hábitos: succiones, uso de chupete, mordisqueo.</li>
              <li>Inconpetencia velar</li>
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
    <Footer />
    </>
  );
};

export default Kids;
