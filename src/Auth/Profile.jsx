import { User, Mail, Shield, LogOut, ShoppingBag, Heart, ShoppingCart } from "lucide-react";

function Profile({ setCurrentPage, setIsAuth }) {
  const user = {
    username: "Jhon Rivera",
    email: "jhon@email.com",
    role: "Vendedor",
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <section className="max-w-6xl mx-auto p-6">

      {/* Encabezado */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Mi Perfil
        </h2>

        <p className="text-gray-500">
          Gestiona tu información y accede rápidamente a las funcionalidades de EcoMarket.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Información usuario */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <User size={40} className="text-green-700" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                {user.username}
              </h3>

              <p className="text-gray-500">
                Usuario EcoMarket
              </p>
            </div>

          </div>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Mail className="text-green-600" size={20} />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <Shield className="text-green-600" size={20} />
              <span>{user.role}</span>
            </div>

          </div>

        </div>

        {/* Acciones rápidas */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <h3 className="text-xl font-semibold mb-5">
            Acciones rápidas
          </h3>

          <div className="grid gap-4">

            <button
              onClick={() => setCurrentPage("catalog")}
              className="flex items-center gap-3 p-4 rounded-xl border hover:bg-green-50 transition"
            >
              <ShoppingBag size={20} />
              Ir al catálogo
            </button>

            <button
              onClick={() => setCurrentPage("favorites")}
              className="flex items-center gap-3 p-4 rounded-xl border hover:bg-green-50 transition"
            >
              <Heart size={20} />
              Ver favoritos
            </button>

            <button
              onClick={() => setCurrentPage("cart")}
              className="flex items-center gap-3 p-4 rounded-xl border hover:bg-green-50 transition"
            >
              <ShoppingCart size={20} />
              Ver carrito
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 p-4 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
            >
              <LogOut size={20} />
              Cerrar sesión
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;