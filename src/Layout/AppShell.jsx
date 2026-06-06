import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";
import Favorites from "../Pages/Favorites";
import Cart from "../Pages/Cart";
import SellerPanel from "../Pages/SellerPanel";
import Profile from "../Pages/Profile";
import { useState } from "react";

function AppShell({ setIsAuth }) {
  const [currentPage, setCurrentPage] = useState("home");
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const renderPage = () => {
    switch (currentPage) {
      case "catalog":
        return <Catalog />;
      case "favorites":
        return <Favorites />;
      case "cart":
        return <Cart />;
      case "seller":
        return user.role === "seller" ? <SellerPanel /> : <Home />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };
  console.log("pagina actual", currentPage)

  return (
    <div className="app-shell">
      <Navbar
        setCurrentPage={setCurrentPage}
        setIsAuth={setIsAuth}
        user={user}
      />

      <main className="min-h-[calc(100vh-80px)] bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-6">{renderPage()}</div>
      </main>
    </div>
  );
}

export default AppShell;
