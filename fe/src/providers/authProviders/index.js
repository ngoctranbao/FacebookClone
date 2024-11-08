import { createContext, useContext, useEffect, useState } from "react";
import { loginMe } from "../../services/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setUpdateAuthUser] = useState(null);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    
    const diffInSeconds = Math.floor((now - date) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    if (diffInSeconds < 60) {
      return "Just now";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''}`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''}`;
    } else if (diffInDays < 100) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
    } else {
      // Format as "dd/mm/yyyy"
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

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
        formatTime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}