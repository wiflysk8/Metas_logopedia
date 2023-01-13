import React from "react";

import RitaImg from "../../assets/images/rita2.png";
import JenniferImg from "../../assets/images/Jennifer.jpeg";
import { TeamContainer, TeamImage, TeamMember } from "./TeamPageStyles";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";

const TeamPage = () => {
  return (
    <>
      <TeamContainer>
        <h2>¿Quiénes somos?</h2>
        <span>
          <strong>Metas Centro de Logopedia</strong> está dirigido por Rita
          Mondragón Nogueira y Jennifer Seoane Pintor. Además de ser logopedas
          con amplia experiencia en el campo, la constante actualización de sus
          conocimientos y técnicas les permite ofrecer a sus pacientes la mejor
          atención.
        </span>
        <TeamMember>         
          <TeamImage>
            <img
              src={JenniferImg}
              alt="Jennifer"
              style={{ filter: "grayscale(100%)" }}
            />
            <strong style={{ color: "#b1c2b6" }}>Jennifer Seoane Pintor</strong>
            <p>Logopeda colegiada Nº15/0416</p>
            <p>Especialista en Atención Temprana</p>
          </TeamImage>
          <TeamImage>
            <img src={RitaImg} alt="Rita" />
            <strong style={{ color: "#b1c2b6" }}>
              Rita Mondragón Nogueira
            </strong>
            <p>Logopeda colegiada Nº15/0549</p>
            <p>Especialista en Gerontología Clínica</p>
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
