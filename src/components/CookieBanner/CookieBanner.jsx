import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CookieBannerContainer,
  CookieBannerContent,
  CookieBannerText,
  CookieBannerButtons,
  CookieButtonAccept,
  CookieButtonReject,
} from "./CookieBannerStyles";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha tomado una decisión sobre las cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Aquí puedes inicializar Google Analytics u otras cookies si es necesario
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    // Aquí puedes desactivar cookies no esenciales si es necesario
  };

  if (!showBanner) {
    return null;
  }

  return (
    <CookieBannerContainer>
      <CookieBannerContent>
        <CookieBannerText>
          <p>
            Utilizamos cookies para mejorar su experiencia de navegación y
            analizar el tráfico del sitio. Puede aceptar todas las cookies o
            rechazarlas. Para más información, consulte nuestra{" "}
            <Link to="/cookies">Política de Cookies</Link>.
          </p>
        </CookieBannerText>
        <CookieBannerButtons>
          <CookieButtonAccept onClick={handleAccept}>
            Aceptar todas
          </CookieButtonAccept>
          <CookieButtonReject onClick={handleReject}>
            Rechazar
          </CookieButtonReject>
        </CookieBannerButtons>
      </CookieBannerContent>
    </CookieBannerContainer>
  );
};

export default CookieBanner;

