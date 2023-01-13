import React, { useState } from "react";
import ToolBar from "../ToolBar/ToolBar";
import SideDrawer from "../SideMenu/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";

const NavbarResponsive = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <BackDrop click={backDropClickHandler} />;
  }
  return (
    <div style={{ height: "100%" }}>
      <ToolBar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} toggle={setSideDrawerOpen} />
      {backdrop}
    </div>
  );
};

export default NavbarResponsive;
