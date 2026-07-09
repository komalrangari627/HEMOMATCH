import {
  createContext,
  useEffect,
  useState
} from "react";


export const AuthContext = createContext();



export function AuthProvider({ children }) {


  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true);





  // Restore login session

  useEffect(() => {


    const savedToken =
      localStorage.getItem("token");


    const savedUser =
      localStorage.getItem("user");



    if(savedToken){

      setToken(savedToken);

    }



    if(savedUser){

      setUser(
        JSON.parse(savedUser)
      );

    }



    setLoading(false);


  }, []);









  // Login

  const login = (userData, jwtToken) => {


    localStorage.setItem(
      "token",
      jwtToken
    );


    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );



    setToken(jwtToken);

    setUser(userData);


  };









  // Logout

  const logout = () => {


    localStorage.removeItem(
      "token"
    );


    localStorage.removeItem(
      "user"
    );



    setToken(null);

    setUser(null);


  };









  return (

    <AuthContext.Provider

      value={{
        user,
        token,
        login,
        logout,
        loading
      }}

    >

      {children}

    </AuthContext.Provider>

  );


}