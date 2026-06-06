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