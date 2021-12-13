import { useContext, useCallback } from "react";
import Context from "./../context/userContext";
import decode from "jwt-decode";

export default function useUser() {
  const { jwt, setJwt } = useContext(Context);

  const login = useCallback(
    (jwt) => {
      localStorage.setItem("jwt", jwt);
      const token = decode(jwt);
      console.log(token);
      setJwt(token);
    },
    [setJwt, jwt]
  );

  const autoLogin = useCallback(() => {
    let token = localStorage.getItem("jwt");
    if (token) {
      token = decode(token);
      console.log(token);
      setJwt(token);
    }
  }, [setJwt]);

  const closeSession = useCallback(() => {
    setJwt(null);
    localStorage.removeItem("jwt");
  }, [setJwt, jwt]);

  const isAdmin = useCallback(() => {
    let token = localStorage.getItem("jwt");
    if (token) {
      token = decode(token);
      if (token.rol === "admin") {
        return true;
      } else {
        return false;
      }
    }
  }, []);

  const isLogged = useCallback(() => {
    if (jwt) {
      return true;
    } else {
      return false;
    }
  }, [jwt]);

  const showUser = useCallback(() => {
    return jwt.name;
  }, [jwt]);

  return {
    login,
    closeSession,
    isLogged,
    isAdmin,
    autoLogin,
    showUser,
  };
}
