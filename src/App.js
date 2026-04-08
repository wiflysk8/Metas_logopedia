import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import RoutesFile from "./core/Routes";
import CookieBanner from "./components/CookieBanner/CookieBanner";

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-to-main">
        Saltar al contenido principal
      </a>
      <NavbarResponsive />
      <main id="main-content" tabIndex={-1}>
        <RoutesFile />
      </main>
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
