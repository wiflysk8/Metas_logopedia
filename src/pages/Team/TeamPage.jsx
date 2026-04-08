import React from "react";

import RitaImg from "../../assets/images/Rita-profile.jpeg";
import JenniferImg from "../../assets/images/Jenny-profile.jpeg";
import LuciaImg from "../../assets/images/Lucia.jpeg";
import { TeamContainer, TeamImage, TeamMember } from "./TeamPageStyles";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import Seo from "../../components/Seo";
import { SEO } from "../../config/seo";

const TeamPage = () => {
  return (
    <>
      <Seo
        title={SEO.equipo.title}
        description={SEO.equipo.description}
        path={SEO.equipo.path}
      />
      <TeamContainer>
        <h1>¿Quiénes somos?</h1>
        <span>
          <strong>Metas Centro de Logopedia</strong> está dirigido por Rita
          Mondragón Nogueira y Jennifer Seoane Pintor. Además de ser logopedas
          con amplia experiencia en el campo, la constante actualización de sus
          conocimientos y técnicas les permite ofrecer a sus pacientes la mejor
          atención.
        </span>
        <h2>Equipo de trabajo</h2>
        <TeamMember>
          <TeamImage>
            <img
              src={JenniferImg}
              alt="Jennifer Seoane Pintor, logopeda en Metas"
              width={768}
              height={1024}
              loading="lazy"
              decoding="async"
            />

            <strong style={{ color: "#b1c2b6" }}>Jennifer Seoane Pintor</strong>
            <p>Logopeda colegiada Nº15/0416</p>
            <p>Especialista en Atención Temprana</p>
          </TeamImage>

          <TeamImage>
            <img
              src={RitaImg}
              alt="Rita Mondragón Nogueira, logopeda en Metas"
              width={576}
              height={1024}
              loading="lazy"
              decoding="async"
            />
            <strong style={{ color: "#b1c2b6" }}>
              Rita Mondragón Nogueira
            </strong>
            <p>Logopeda colegiada Nº15/0549</p>
            <p>Especialista en Gerontología Clínica</p>
          </TeamImage>

          <TeamImage>
            <img
              src={LuciaImg}
              alt="Lucía Díaz Toro, logopeda en Metas"
              width={1670}
              height={2048}
              loading="lazy"
              decoding="async"
            />
            <strong style={{ color: "#b1c2b6" }}>Lucía Díaz Toro</strong>
            <p>Logopeda colegiada Nº15/0746</p>
            <p>Asesora de lactancia</p>
          </TeamImage>
        </TeamMember>
      </TeamContainer>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default TeamPage;
