import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  const handleHideDrawer = () => {
    props.toggle(false);
  };

  return (
    <nav
      id="site-navigation-drawer"
      className={drawerClasses.join(" ")}
      aria-label="Navegación móvil"
    >
      <ul>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#2f2e2e",
            })}
            onClick={handleHideDrawer}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/equipo"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#2f2e2e",
            })}
            onClick={handleHideDrawer}
          >
            Equipo
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/servicios"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#2f2e2e",
            })}
            onClick={handleHideDrawer}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/servicios/ninos"}
            onClick={handleHideDrawer}
          >
            <span className="subSection">Niños</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/servicios/adultos"}
            onClick={handleHideDrawer}
          >
            <span className="subSection">Adultos</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/metodologia"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#2f2e2e",
            })}
            onClick={handleHideDrawer}
          >
            Metodología
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/blog"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#2f2e2e",
            })}
            onClick={handleHideDrawer}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"NavLink"}
            to={"/contacto"}
            style={({ isActive }) => ({
              color: isActive ? "#B1C2B6" : "#2f2e2e",
            })}
            onClick={handleHideDrawer}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
