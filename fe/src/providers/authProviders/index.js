import { createContext, useContext, useEffect, useState } from "react";
import { loginMe } from "../../services/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setUpdateAuthUser] = useState(null);

  const handlerLogin = async () => {
    try {
      const res = await loginMe();
      if (res.status === 200) {
        setAuthUser(res.data.user);
        localStorage.setItem("authUser", JSON.stringify(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setAuthUser = async (user) => {
    setUpdateAuthUser(user);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userLocal = JSON.parse(localStorage.getItem("authUser"));
    if (userLocal) {
      setAuthUser(userLocal);
    }

    if (!userLocal && token) {
      console.log("Fetch info user");
      handlerLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        handlerLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}