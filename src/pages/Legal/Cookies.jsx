import React from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import { LegalContainer, LegalContent } from "./LegalStyles";

const Cookies = () => {
  return (
    <>
      <LegalContainer>
        <LegalContent>
          <h1>Política de Cookies</h1>
          
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.
          </p>

          <h2>Tipos de cookies</h2>
          <p>Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan se pueden distinguir dos tipos:</p>

          <p><strong>Cookies propias:</strong> Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.</p>

          <p><strong>Cookies de terceros:</strong> Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.</p>

          <p>En el caso de que las cookies se instalen desde un equipo o dominio gestionado por el propio editor pero la información que se recoja mediante éstas sea gestionada por un tercero, no pueden ser consideradas como cookies propias.</p>

          <p>Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de:</p>

          <p><strong>Cookies de sesión:</strong> Diseñadas para recabar y almacenar datos mientras el usuario accede a una Página Web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión y caducan al cerrar sesión o cerrar el navegador.</p>

          <p><strong>Cookies persistentes:</strong> Son un tipo de cookies en el que los datos siguen almacenados en el terminal para que sean accedidos y utilizados en más de una sesión. Pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</p>

          <p>Según la finalidad para la que se traten los datos obtenidos a través de las cookies, estas pueden ser:</p>

          <p><strong>Cookies técnicas:</strong> Son aquéllas que permiten al usuario la navegación a través de una Página Web, plataforma o Página Web y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido.</p>

          <p><strong>Cookies de personalización:</strong> Son aquéllas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador.</p>

          <p><strong>Cookies de análisis:</strong> Son aquéllas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, Página Web o plataforma y para la elaboración de perfiles de navegación de los usuarios.</p>

          <p><strong>Cookies publicitarias:</strong> Son aquéllas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.</p>

          <p><strong>Cookies de publicidad comportamental:</strong> Estas cookies almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</p>

          <p>
            Para más información a este respecto puede consultar la Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos.
          </p>

          <h2>Cookies utilizadas en la web</h2>
          <p>
            A continuación se identifican las cookies que están siendo utilizadas en este portal así como su tipología y función:
          </p>

          <p>
            Las páginas web utilizan Google Analytics, un servicio de análisis de accesos web desarrollada por Google, que permite la medición y análisis de la navegación en las páginas web. Según la tipología anterior se trata de cookies propias, de sesión y de análisis. Puede encontrar más información al respecto e inhabilitar el uso de estas cookies{" "}
            <a href="https://www.google.es/intl/es/analytics/privacyoverview.html" target="_blank" rel="noopener noreferrer">
              www.google.es/intl/es/analytics/privacyoverview.html
            </a>.
          </p>

          <p>
            A través de la analítica web se obtiene información relativa al número de usuarios que acceden a la web, el número de páginas vistas, la frecuencia y repetición de las visitas, su duración, el navegador utilizado, el operador que presta el servicio, el idioma, el terminal que utiliza, o la ciudad a la que está asignada su dirección IP. Información que posibilita un mejor y más apropiado servicio por parte de este portal.
          </p>

          <p>
            La web usa además una cookie propia de identificación de sesión que se utiliza para el mantenimiento de la sesión de usuario en el navegador. Se trata de una cookie exceptuada y técnica utilizada para garantizar el correcto funcionamiento de la página.
          </p>

          <h2>Cómo modificar la configuración de las cookies</h2>
          <p>
            Usted puede restringir, bloquear o borrar las cookies de esta o cualquier otra página web, utilizando su navegador. En cada navegador la operativa es diferente, la función de 'Ayuda' le mostrará cómo hacerlo.
          </p>

          <ul>
            <li>
              <strong>Internet Explorer:</strong>{" "}
              <a href="https://windows.microsoft.com/es-xl/internet-explorer/delete-manage-cookies#ie=ie-10" target="_blank" rel="noopener noreferrer">
                windows.microsoft.com/es-xl/internet-explorer/delete-manage-cookies#ie=ie-10
              </a>
            </li>
            <li>
              <strong>FireFox:</strong>{" "}
              <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">
                support.mozilla.org/es/kb/Borrar%20cookies
              </a>
            </li>
            <li>
              <strong>Chrome:</strong>{" "}
              <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">
                support.google.com/chrome/answer/95647?hl=es
              </a>
            </li>
            <li>
              <strong>Safari:</strong>{" "}
              <a href="https://www.apple.com/es/privacy/use-of-cookies/" target="_blank" rel="noopener noreferrer">
                www.apple.com/es/privacy/use-of-cookies/
              </a>
            </li>
          </ul>

          <p>
            Además, también puede gestionar el almacén de cookies en su navegador a través de herramientas como las siguientes:
          </p>

          <ul>
            <li>
              <strong>Ghostery:</strong>{" "}
              <a href="https://www.ghostery.com/" target="_blank" rel="noopener noreferrer">
                www.ghostery.com/
              </a>
            </li>
            <li>
              <strong>Your online choices:</strong>{" "}
              <a href="https://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer">
                www.youronlinechoices.com/es/
              </a>
            </li>
          </ul>
        </LegalContent>
      </LegalContainer>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default Cookies;

