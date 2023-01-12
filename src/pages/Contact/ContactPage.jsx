import React, { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { FooterWrapper } from "../../GlobalStyles";
import { StyledServices } from "../Services/ServicesPageStyles";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [submited, setSubmited] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
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
      <StyledServices className="mb-16">
        <h4>CONTACTA CON NOSOTRAS</h4>
        {submited ? (
          <h4 style={{ height: "29vh" }}>Mensaje enviado</h4>
        ) : (
          <form class="w-80 max-w-lg  sm:ml-5" onSubmit={sendEmail} ref={form}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="nombre"
                >
                  Nombre
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="apellidos"
                >
                  Apellidos
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Tus apellidos"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Tu email"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="telefono"
                >
                  Teléfono
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="telefono"
                  name="telefono"
                  type="text"
                  placeholder="Tu nº de teléfono"
                />
              </div>

              <div class="w-full md:w-full px-3 mb-6">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="mensaje"
                >
                  Déjanos tu mensaje
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="mensaje"
                  name="mensaje"
                  type="text"
                  placeholder="Mensaje"
                />
              </div>
            </div>
            <div className="flex align-center justify-center">
              <button
                class="hover:bg-[#81a08a] bg-white text-black font-bold py-2 px-14 border border[#81a08a] rounded ease-in-out duration-300"
                onClick={sendEmail}
              >
                Enviar
              </button>
            </div>
          </form>
        )}
      </StyledServices>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default ContactPage;
