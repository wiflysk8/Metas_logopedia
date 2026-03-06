import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import RoutesFile from "./core/Routes";
import CookieBanner from "./components/CookieBanner/CookieBanner";

function App() {
  return (
    <BrowserRouter>
      <NavbarResponsive />
      <RoutesFile />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
