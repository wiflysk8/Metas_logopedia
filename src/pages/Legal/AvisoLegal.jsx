import React from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import { LegalContainer, LegalContent } from "./LegalStyles";

const AvisoLegal = () => {
  return (
    <>
      <LegalContainer>
        <LegalContent>
          <h1>Aviso Legal</h1>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE) a continuación se detallan los datos identificativos de la empresa:
          </p>
          
          <p><strong>Nombre empresa:</strong> METAS CENTRO DE LOGOPEDIA - RITA MONDRAGÓN NOGUEIRA</p>
          <p><strong>Razón social:</strong> RITA MONDRAGÓN NOGUEIRA</p>
          <p><strong>NIF:</strong> 35485988R</p>
          <p><strong>Dirección:</strong> C/ Magistrado Manuel Artime Nª 26, 1º dcha, A Coruña</p>
          <p><strong>Teléfono:</strong> 604077457</p>

          <p>
            En este espacio, los usuarios encontrarán toda la información relativa a los términos y condiciones legales que definen las relaciones entre ellos y la empresa como responsable de LA WEB.
          </p>

          <p>
            La empresa como responsable de LA WEB, asume el compromiso de procesar la información de nuestros usuarios y clientes con plenas garantías y cumplir con los requisitos nacionales y europeos que regulan la recopilación y uso de los datos personales de nuestros usuarios.
          </p>

          <p>
            LA WEB, por tanto, cumple rigurosamente con el RGPD (REGLAMENTO (UE) 2016/679 de protección de datos), con la Ley 3/2018 de Protección de Datos y Garantía de Derechos Digitales y la LSSI-CE (Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico).
          </p>

          <h2>Condiciones generales de uso</h2>
          <p>
            Las presentes Condiciones Generales regulan el uso (incluyendo el mero acceso) de las páginas integrantes de LA WEB, incluidos los contenidos y servicios puestos a disposición en ellas. Toda persona que acceda a LA WEB acepta someterse a las Condiciones Generales vigentes en cada momento en ella.
          </p>

          <h2>Datos personales que recabamos y como lo hacemos</h2>
          <p>
            Lee la <a href="/proteccion-datos">Política de Privacidad</a>
          </p>

          <h2>Compromisos y obligaciones</h2>
          <p>
            El usuario queda informado, y acepta, que el acceso a LA WEB no supone, en modo alguno, el inicio de una relación comercial con la empresa. De esta forma, el usuario se compromete a utilizar LA WEB, sus servicios y contenidos sin contravenir la legislación vigente, la buena fe y el orden público.
          </p>

          <p>
            Queda prohibido el uso de LA WEB, con fines ilícitos o lesivos, o que, de cualquier forma, puedan causar perjuicio o impedir el normal funcionamiento de la misma. Respecto de los contenidos, se prohíbe:
          </p>

          <ul>
            <li>Su reproducción, distribución o modificación, total o parcial, a menos que se cuente con la autorización de sus legítimos titulares.</li>
            <li>Cualquier vulneración de los derechos del prestador o de los legítimos titulares.</li>
            <li>Su utilización para fines comerciales o publicitarios.</li>
          </ul>

          <p>
            En la utilización de LA WEB el usuario se compromete a no llevar a cabo ninguna conducta que pudiera dañar la imagen, los intereses y los derechos de la empresa o de terceros o que pudiera dañar, inutilizar o sobrecargar LA WEB o que impidiera, de cualquier forma, su normal utilización.
          </p>

          <h2>Derechos de propiedad intelectual e industrial</h2>
          <p>
            El usuario conoce y acepta que la totalidad de LA WEB, conteniendo sin carácter exhaustivo el texto, software, contenidos (incluyendo estructura, selección, ordenación y presentación de los mismos) podcast, fotografías, material audiovisual y gráficos, está protegida por marcas, derechos de autor y otros derechos legítimos, de acuerdo con los tratados internacionales en los que España es parte y otros derechos de propiedad y leyes de España.
          </p>

          <p>
            En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de LA WEB, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de la empresa. El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial titularidad de la empresa.
          </p>

          <h2>Enlaces externos</h2>
          <p>
            LA WEB, proporciona enlaces a otros sitios web y contenidos que son propiedad de terceros. El único objeto de los enlaces es proporcionar al usuario la posibilidad de acceder a dichos enlaces. La empresa no se responsabiliza en ningún caso de los resultados que puedan derivarse al usuario por acceso a dichos enlaces.
          </p>

          <h2>FORMULARIO DE CONTACTO</h2>
          <p>
            Por último si existiese en la web un formulario de contacto debería aparecer un "check" donde el usuario pueda dar por leídos y aceptados la política de privacidad.
          </p>
        </LegalContent>
      </LegalContainer>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default AvisoLegal;

