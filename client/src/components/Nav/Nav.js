import styles from "../../styles/Nav.module.css";
import logo from "../../images/medic.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useUser from "./../../hooks/useUser";

function Nav() {
  const { closeSession, isLogged, isAdmin, autoLogin } = useUser();

  const cerrarSesion = () => {
    closeSession();
  };
  useEffect(() => {
    autoLogin();
  }, [autoLogin]);

  return (
    <nav className={" navbar navbar-expand-lg navbar-light  " + styles.fondo}>
      <div className={"container-fluid " + styles.container}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={styles.navul}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="# ">
                Home
              </a>
            </li>
            {isLogged() ? null : (
              <li className="nav-item">
                <Link className="nav-link active" to="/signin">
                  Iniciar sesion
                </Link>
              </li>
            )}
            {isLogged() ? null : (
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Resgistrarse
                </Link>
              </li>
            )}
            <li className="nav-item">
              <a
                className="nav-link active"
                href="# "
                tabindex="-1"
                aria-disabled="true"
              >
                Mas info
              </a>
            </li>
            {isLogged() ? (
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link active"
                  tabindex="-1"
                  aria-disabled="true"
                  onClick={cerrarSesion}
                >
                  Cerrar Sesion
                </a>
              </li>
            ) : null}
            {isLogged() && isAdmin() ? (
              <li className="nav-item">
                <Link
                  to="/admin"
                  className="nav-link active"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Panel de administracion
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
