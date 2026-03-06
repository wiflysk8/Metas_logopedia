import React from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import { LegalContainer, LegalContent } from "./LegalStyles";

const ProteccionDatos = () => {
  return (
    <>
      <LegalContainer>
        <LegalContent>
          <h1>POLÍTICA DE PRIVACIDAD</h1>
          <p>
            Mediante esta política de privacidad nos comprometemos a asegurar que su información personal se encuentre protegida y no se utilice de forma indebida.
          </p>

          <p>
            En este documento explicamos quién es el responsable de tratamiento, con qué finalidad se va a tratar su información personal, la legitimación para el tratamiento, cómo la recabamos, cómo la utilizamos, los derechos que le asisten y también se explican los procesos que hemos dispuesto para proteger su privacidad.
          </p>

          <p>
            Al facilitarnos su información personal y utilizar nuestros sitios web, entendemos que ha leído y comprendido los términos relacionados con la información de protección de datos de carácter personal que se exponen. La empresa asume la responsabilidad de cumplir con la legislación vigente en materia de protección de datos nacional y europea, y tienen el objetivo de tratar sus datos de manera lícita, leal y transparente.
          </p>

          <h2>RESPONSABLE DEL TRATAMIENTO</h2>
          <p><strong>RITA MONDRAGÓN NOGUEIRA</strong></p>

          <h2>FINALIDAD</h2>
          <p><strong>SERVICIOS DE LOGOPEDIA</strong></p>

          <h2>LEGITIMACIÓN</h2>
          <ul>
            <li>Para el cumplimiento de un contrato y/o relación comercial.</li>
            <li>Para el cumplimiento de distintas obligaciones legales.</li>
            <li>Por interés legítimo, por ejemplo, por motivos de seguridad, prevención del fraude.</li>
            <li>Para mejorar nuestros servicios y productos, o para gestionar las solicitudes, consultas o posibles reclamaciones que pudieran surgir.</li>
            <li>Con su consentimiento expreso.</li>
          </ul>

          <h2>CONSERVACIÓN</h2>
          <p>
            Solo almacenamos su información personal en la medida en que la necesitamos a fin de poder utilizarla según la finalidad por la que fue recabada, y según la base jurídica del tratamiento de la misma de conformidad con la ley aplicable. Mantendremos su información personal mientras exista una relación contractual y/o comercial con usted, o mientras usted no ejerza su derecho de supresión, cancelación y/o limitación del tratamiento de sus datos.
          </p>

          <p>
            En estos casos, mantendremos la información debidamente bloqueada, sin darle ningún uso, mientras pueda ser necesaria para el ejercicio o defensa de reclamaciones o pueda derivarse algún tipo de responsabilidad judicial, legal o contractual de su tratamiento, que deba ser atendida y para lo cual sea necesaria su recuperación.
          </p>

          <h2>DESTINATARIOS</h2>
          <p>
            Si usted nos ha dado su consentimiento la información que nos facilita será comunicada a empresas o profesionales directamente relacionados con el responsable. Asimismo, hay empresas que nos prestan otro tipo de servicios como son: tecnología de la información (almacenamiento y procesamiento de la información), servicios contables, fiscales, servicios de auditoría, etc. Estas terceras partes solo tienen acceso a la información personal que necesitan para llevar a cabo dichos servicios. Se les exige que mantengan en confidencialidad su información personal y no pueden utilizarla de ninguna otra forma que aquella que les hemos solicitado. Todas estas empresas aplican el mismo grado de protección que el responsable, y el acceso está regulado por un contrato de encargado de tratamiento.
          </p>

          <p>
            Asimismo, su información personal estará a disposición de las Administraciones públicas, Jueces y Tribunales, para la atención de las posibles responsabilidades nacidas del tratamiento.
          </p>

          <h2>DERECHOS DE LOS INTERESADOS</h2>
          <p>
            Los interesados podrán ejercer los derechos acceso, rectificación, supresión, portabilidad y la limitación u oposición, dirigiéndose por escrito, acompañando fotocopia del DNI a:
          </p>

          <p>
            <strong>RITA MONDRAGÓN NOGUEIRA</strong><br />
            C/ Magistrado Manuel Artime Nª 26, 1º dcha, A Coruña
          </p>

          <h2>Transferencia internacional</h2>
          <p>
            La información personal que recabamos reside España, no se realizan transferencias internacionales de datos.
          </p>

          <h2>Enlaces a sitios web de terceros</h2>
          <p>
            En el caso que suministremos enlaces a sitios web que no son operados ni controlados por nosotros, será puntualmente informado. Ya que no disponemos control alguno sobre esos sitios ni somos responsables del contenido de los mismos.
          </p>

          <h2>Datos de menores</h2>
          <p>
            No recabamos información personal alguna de menores deliberadamente, si no es con la autorización del padre/madre o tutor.
          </p>

          <p>
            Si usted es menor de edad, por favor no intente registrarse como usuario de nuestros sitios web. Si descubrimos que por error hemos obtenido información personal de un menor, eliminaremos dicha información lo antes posible.
          </p>

          <p>
            Hemos implementado las medidas técnicas y organizativas adecuadas con la finalidad de proteger sus datos personales, y estas medidas son revisadas periódicamente.
          </p>

          <p>
            La Entidad se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales así como a prácticas de la industria. En dichos supuestos, La Entidad anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
          </p>

          <p>
            También le informamos puede dirigirse a la Autoridad de Control en materia de Protección de Datos competente para obtener información adicional o presentar una reclamación.
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

