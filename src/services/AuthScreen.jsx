import { useState } from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import {
  Leaf,
  Store,
  ShoppingBag,
  Users,
} from "lucide-react";

function AuthScreen({ setIsAuth }) {
  const [activeTab, setActiveTab] =
    useState("login");

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* PANEL IZQUIERDO */}

        <div className="hidden lg:flex bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 text-white p-12 flex-col justify-between">

          <div>

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Leaf size={30} />
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  EcoMarket
                </h1>

                <p className="text-green-100">
                  Economía hiperlocal
                </p>
              </div>

            </div>

            <div className="mt-20">

              <h2 className="text-5xl font-bold leading-tight">
                Conecta productores locales con compradores.
              </h2>

              <p className="mt-6 text-lg text-green-100">
                Compra productos frescos,
                apoya negocios locales y
                fortalece tu comunidad.
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white/10 p-5 rounded-2xl">
              <Store size={28} />
              <h3 className="mt-3 font-semibold">
                Vendedores
              </h3>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              <ShoppingBag size={28} />
              <h3 className="mt-3 font-semibold">
                Compradores
              </h3>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl col-span-2">
              <Users size={28} />
              <h3 className="mt-3 font-semibold">
                Comunidad
              </h3>
            </div>

          </div>

        </div>

        {/* PANEL DERECHO */}

        <div className="flex items-center justify-center p-6">

          <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

            <div className="text-center">

              <div className="lg:hidden inline-flex px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
                🌱 EcoMarket
              </div>

              <h2 className="mt-4 text-3xl font-bold text-gray-800">
                Bienvenido
              </h2>

              <p className="mt-2 text-gray-500">
                Accede a tu cuenta o crea una nueva.
              </p>

            </div>

            {/* Tabs */}

            <div className="flex mt-8 bg-gray-100 rounded-xl p-1">

              <button
                onClick={() =>
                  setActiveTab("login")
                }
                className={`flex-1 py-3 rounded-lg transition ${
                  activeTab === "login"
                    ? "bg-white shadow font-semibold text-green-700"
                    : "text-gray-500"
                }`}
              >
                Iniciar Sesión
              </button>

              <button
                onClick={() =>
                  setActiveTab("register")
                }
                className={`flex-1 py-3 rounded-lg transition ${
                  activeTab === "register"
                    ? "bg-white shadow font-semibold text-green-700"
                    : "text-gray-500"
                }`}
              >
                Registrarse
              </button>

            </div>

            <div className="mt-6">

              {activeTab === "login" ? (
                <Login
                  setIsAuth={setIsAuth}
                />
              ) : (
                <Register />
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthScreen;