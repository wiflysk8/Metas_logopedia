import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CookieBannerContainer,
  CookieBannerContent,
  CookieBannerText,
  CookieBannerButtons,
  CookieButtonAccept,
  CookieButtonReject,
} from "./CookieBannerStyles";

function readConsentPending() {
  try {
    return (
      typeof window !== "undefined" &&
      !window.localStorage.getItem("cookieConsent")
    );
  } catch {
    return true;
  }
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(readConsentPending);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <CookieBannerContainer role="region" aria-label="Aviso de cookies">
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
