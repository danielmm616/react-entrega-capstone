import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/Axios";
import { useToast } from "@chakra-ui/react";

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
  const toast = useToast();
  const [authToken, setAuthToken] = useState("");
  const [user, setUser] = useState<User>({} as User);

  const logIn = (userLogin: UserLoginProps) => {
    api
      .post("/login", userLogin)
      .then((response) => {
        setAuthToken(response.data.accessToken);
        setUser(response.data.user);
        localStorage.setItem("@ArteSana:token", response.data.accessToken);
        history.push("/sellerPage");
        localStorage.setItem("@userId", response.data.user.id);
        toast({
          position: "top",
          title: "Login bem sucedido!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((_) =>
        toast({
          position: "top",
          title: "Email ou senha inválidos!",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const registerUser = (userData: User) => {
    api
      .post("/register", userData)
      .then((response) => {
        // setAuthToken(response.data.accessToken);
        setUser(response.data.user);
        console.log("register userData", userData);
        history.push("/login");
        toast({
          position: "top",
          title: "Cadastro concluído!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((_) =>
        toast({
          position: "top",
          title: "Erro ao cadastrar!",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const logOut = () => {
    setAuthToken("");
    localStorage.clear();
    history.push("/");
    toast({
      position: "top",
      title: "Volte sempre! ;D",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
