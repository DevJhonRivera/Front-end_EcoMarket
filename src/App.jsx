// import { useState } from "react";
// import Login from "./Auth/Login";
// import Register from "./Auth/Register";

// function AuthScreen() {

//   const [activeTab, setActiveTab] = useState("login");
// const [isAuth, setIsAuth] =useState( !!localStorage.getItem("token"));

//   return (
//     <section>

//       {activeTab === "login" ? (
//         <Login setIsAuth={setIsAuth} />
//       ) : (
//         <Register />
//       )}

//     </section>
//   );
// }

// export default AuthScreen;
import { useState } from "react";
import AuthScreen from "./services/AuthScreen";
import AppShell from "./Layout/AppShell";

function App() {

  const [isAuth, setIsAuth] =
    useState(
      !!localStorage.getItem("token")
    );

  console.log("isAuth =", isAuth);

  return (
    <>
      {isAuth ? (
        <AppShell
          setIsAuth={setIsAuth}
        />
      ) : (
        <AuthScreen
          setIsAuth={setIsAuth}
        />
      )}
    </>
  );
}

export default App;