import SideMenu from "../SideMenu/SideMenu";
import "./ToolBar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav
        className="toolbar_navigator"
        aria-label="Navegación principal"
      >
        <div className="toggle-btn">
          <SideMenu
            click={props.drawerToggleClickHandler}
            drawerOpen={props.drawerOpen}
          />
        </div>
        <div className="toolbar_logo ">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <NavLink
                className={"NavLink"}
                to={"/"}
                style={({ isActive }) => ({
                  color: isActive ? "#B1C2B6" : "#2f2e2e",
                })}
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
              >
                Equipo
              </NavLink>
            </li>
            <li>
              <div className="dropdown">
                <NavLink
                  className={"NavLink dropbtn"}
                  to={"/servicios"}
                  style={({ isActive }) => ({
                    color: isActive ? "#B1C2B6" : "#2f2e2e",
                  })}
                >
                  Servicios
                </NavLink>
                <div className="dropdown-content">
                  <NavLink
                    className={"NavLink"}
                    to={"/servicios/ninos"}
                    style={({ isActive }) => ({
                      color: isActive ? "#B1C2B6" : "#2f2e2e",
                    })}
                  >
                    Niños
                  </NavLink>
                  <NavLink
                    className={"NavLink"}
                    to={"/servicios/adultos"}
                    style={({ isActive }) => ({
                      color: isActive ? "#B1C2B6" : "#2f2e2e",
                    })}
                  >
                    Adultos
                  </NavLink>
                </div>
              </div>
            </li>
            <li>
              <NavLink
                className={"NavLink"}
                to={"/metodologia"}
                style={({ isActive }) => ({
                  color: isActive ? "#B1C2B6" : "#2f2e2e",
                })}
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
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
