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



  // Normalize user data
  const formatUser = (userData) => {

    if (!userData) return null;


    return {

      ...userData,


      name:
        userData.name ||
        userData.fullName ||
        userData.username ||
        userData.email?.split("@")[0] ||
        "User"

    };

  };





  // Restore login session

  useEffect(() => {


    try {

      const savedToken =
        localStorage.getItem("token");


      const savedUser =
        localStorage.getItem("user");



      if (savedToken) {

        setToken(savedToken);

      }



      if (savedUser) {

        const parsedUser =
          JSON.parse(savedUser);


        setUser(
          formatUser(parsedUser)
        );

      }


    } catch (error) {

      console.error(
        "Auth restore error:",
        error
      );


      localStorage.removeItem("user");

      localStorage.removeItem("token");

    }


    setLoading(false);


  }, []);







  // Login

  const login = (
    userData,
    jwtToken
  ) => {


    const formattedUser =
      formatUser(userData);



    localStorage.setItem(
      "token",
      jwtToken
    );


    localStorage.setItem(
      "user",
      JSON.stringify(formattedUser)
    );



    setToken(jwtToken);


    setUser(formattedUser);


  };









  // Update user profile

  const updateUser = (updatedData) => {


    const updatedUser =
      formatUser({

        ...user,

        ...updatedData

      });



    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );


    setUser(updatedUser);


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

        updateUser,

        loading

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}