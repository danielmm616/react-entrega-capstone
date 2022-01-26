import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/Axios";

interface AuthProviderData {
  user: User;
  authToken: string;
  logIn: (userLogin: UserLoginProps) => void;
  registerUser: (userData: User) => void;
  logOut: () => void;
}

interface AuthProps {
  children: ReactNode;
}

interface UserLoginProps {
  email: string;
  password: string;
}

interface User {
  email: string;
  password: string;
  name: string;
  state: string;
  city: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState("");
  const [user, setUser] = useState<User>({} as User);

  const logIn = (userLogin: UserLoginProps) => {
    api
      .post("/login", userLogin)
      .then((response) => {
        setAuthToken(response.data.accessToken);
        setUser(response.data.user);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const registerUser = (userData: User) => {
    api
      .post("/register", userData)
      .then((response) => {
        setAuthToken(response.data.accessToken);
        setUser(response.data.user);
        console.log("register userData", userData);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    setAuthToken("");
    history.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, authToken, logIn, logOut, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
