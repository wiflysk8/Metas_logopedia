import React from "react";
import "./SideMenu.css";

const menuToggleButton = (props) => (
  <button
    type="button"
    className="toggle-button"
    onClick={props.click}
    aria-label={
      props.drawerOpen
        ? "Cerrar menú de navegación"
        : "Abrir menú de navegación"
    }
    aria-expanded={Boolean(props.drawerOpen)}
    aria-controls="site-navigation-drawer"
  >
    <span className="toggle-button-line" />
    <span className="toggle-button-line" />
    <span className="toggle-button-line" />
  </button>
);

export default menuToggleButton;
