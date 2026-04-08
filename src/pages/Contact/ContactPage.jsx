import React, { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import { StyledServices } from "../Services/ServicesPageStyles";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import { SEO } from "../../config/seo";

const ContactPage = () => {
  const [submited, setSubmited] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert("Debe aceptar la política de privacidad para enviar el formulario.");
      return;
    }
    emailjs
      .sendForm(
        "service_llstub1",
        "template_tlhgt36",
        form.current,
        "YaS8m__WApb0SC3R_"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSubmited(true);
  };

  return (
    <>
      <Seo
        title={SEO.contacto.title}
        description={SEO.contacto.description}
        path={SEO.contacto.path}
      />
      <StyledServices className="mb-16 ">
        <h1>Contacta con nosotras</h1>
        <h2>Formulario de contacto</h2>
        {submited ? (
          <p role="status" style={{ height: "29vh", fontSize: "1.25rem" }}>
            Mensaje enviado
          </p>
        ) : (
          <form className="lg:w-fit sm: w-80" onSubmit={sendEmail} ref={form}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="apellidos"
                >
                  Apellidos
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Tus apellidos"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Tu email"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="telefono"
                  name="telefono"
                  type="text"
                  placeholder="Tu nº de teléfono"
                />
              </div>

              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="mensaje"
                >
                  Déjanos tu mensaje
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 h-32 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="mensaje"
                  name="mensaje"
                  type="text"
                  placeholder="Mensaje"
                />
              </div>
            </div>
            <div className="w-full px-3 mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mr-2"
                  required
                />
                <span className="text-sm text-gray-700">
                  He leído y acepto la{" "}
                  <Link
                    to="/proteccion-datos"
                    className="text-[#3d5a45] underline font-semibold hover:text-[#2f4a38]"
                  >
                    política de privacidad
                  </Link>
                </span>
              </label>
            </div>
            <div className="flex align-center justify-center">
              <button
                type="submit"
                className="hover:bg-[#4d6b56] hover:text-white bg-white text-[#1a1a1a] font-bold py-2 px-14 border border-[#4d6b56] rounded ease-in-out duration-300"
              >
                Enviar formulario
              </button>
            </div>
          </form>
        )}
      </StyledServices>
      <div className="earth3dmap-com">
        <iframe
          id="iframemap"
          src="https://maps.google.com/maps?q=R%C3%BAa+Magistrado+Manuel+Artime%2C+26&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          width="100%"
          height="500"
          title="Mapa: ubicación de Metas Centro de Logopedia en A Coruña"
        />
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default ContactPage;
