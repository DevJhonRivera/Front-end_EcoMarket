import { useState } from "react";
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";

function AppShell({ setIsAuth }) {
  const [view, setView] = useState("home");

  const renderView = () => {
    switch (view) {
      case "catalog":
        return <Catalog />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-shell">
      <Navbar setView={setView} setIsAuth={setIsAuth} />
      <main>{renderView()}</main>
    </div>
  );
}

export default AppShell;