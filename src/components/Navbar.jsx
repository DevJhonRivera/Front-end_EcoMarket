import {
  Home,
  ShoppingBag,
  Heart,
  ShoppingCart,
  Store,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import Swal from "sweetalert2";

function Navbar({
  setCurrentPage,
  setIsAuth,
  favoritesCount = 0,
  cartCount = 0,
}) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const handleLogout = async () => {

  const result = await Swal.fire({
    title: "Cerrar sesión",
    text: "¿Deseas salir de EcoMarket?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Salir",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#dc2626",
  });

  if (result.isConfirmed) {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setIsAuth(false);

  }
};

 const menuItems = [
  {
    label: "Inicio",
    icon: Home,
    page: "home",
  },
  {
    label: "Catálogo",
    icon: ShoppingBag,
    page: "catalog",
  },
  {
    label: "Favoritos",
    icon: Heart,
    page: "favorites",
  },
  {
    label: "Carrito",
    icon: ShoppingCart,
    page: "cart",
  },

  ...(user?.role === "seller"
    ? [
        {
          label: "Mi Tienda",
          icon: Store,
          page: "seller",
        },
      ]
    : []),

  {
    label: "Perfil",
    icon: User,
    page: "profile",
  },
];

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <button
            onClick={() =>
              setCurrentPage("home")
            }
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-xl">
              🌱
            </div>

            <div className="text-left">

              <h1 className="text-2xl font-bold text-green-700">
                EcoMarket
              </h1>

              <p className="text-xs text-gray-500">
                Economía hiperlocal
              </p>

            </div>

          </button>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.page}
                  onClick={() =>{
                    console.log("Ir a mi tienda");
                    setCurrentPage(item.page);
                  }}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 hover:text-green-700 transition"
                >
                  <Icon size={18} />

                  {item.label}

                  {item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

          </nav>

          {/* USER */}

          <div className="flex items-center gap-4">

            <div className="hidden md:flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                {user?.username
                  ?.charAt(0)
                  ?.toUpperCase() || "U"}
              </div>

              <div>

                <h4 className="font-semibold text-sm">
                  {user.username ||
                    "Usuario"}
                </h4>

                <p className="text-xs text-gray-500 capitalize">
                  {user.role ||
                    "Comprador"}
                </p>

              </div>

            </div>

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
            >
              <LogOut size={18} />
              Salir
            </button>

            {/* MOBILE BUTTON */}

            <button
              onClick={() =>
                setMobileOpen(
                  !mobileOpen
                )
              }
              className="lg:hidden"
            >
              {mobileOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className="lg:hidden border-t bg-white">

          <div className="p-4 space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(
                      item.page
                    );
                    setMobileOpen(
                      false
                    );
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50"
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 text-white"
            >
              <LogOut size={18} />
              Salir
            </button>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;