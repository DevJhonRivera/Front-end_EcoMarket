import {
  Store,
  ShoppingBag,
  Users,
  Leaf,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              🌱 Comercio Local Inteligente
            </span>

            <h1 className="text-5xl font-bold mt-6 text-gray-800 leading-tight">
              Compra cerca.
              <br />
              Vende mejor.
              <br />
              Crece con tu comunidad.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              EcoMarket conecta productores,
              emprendedores y compradores
              para fortalecer la economía local.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                Explorar Productos
              </button>

              <button className="border px-6 py-3 rounded-xl hover:bg-gray-50">
                Conocer más
              </button>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-green-50 p-6 rounded-2xl">

                <Store className="text-green-600" />

                <h3 className="font-bold mt-3">
                  Vendedores
                </h3>

                <p className="text-gray-500 text-sm">
                  Publica y administra productos.
                </p>

              </div>

              <div className="bg-blue-50 p-6 rounded-2xl">

                <ShoppingBag className="text-blue-600" />

                <h3 className="font-bold mt-3">
                  Compradores
                </h3>

                <p className="text-gray-500 text-sm">
                  Encuentra productos locales.
                </p>

              </div>

              <div className="bg-yellow-50 p-6 rounded-2xl">

                <Users className="text-yellow-600" />

                <h3 className="font-bold mt-3">
                  Comunidad
                </h3>

                <p className="text-gray-500 text-sm">
                  Conectamos personas y negocios.
                </p>

              </div>

              <div className="bg-emerald-50 p-6 rounded-2xl">

                <Leaf className="text-emerald-600" />

                <h3 className="font-bold mt-3">
                  Sostenibilidad
                </h3>

                <p className="text-gray-500 text-sm">
                  Impulsamos el consumo responsable.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Estadísticas */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-4xl font-bold text-green-600">
              250+
            </h2>
            <p className="text-gray-500">
              Productos
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-4xl font-bold text-green-600">
              120+
            </h2>
            <p className="text-gray-500">
              Vendedores
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-4xl font-bold text-green-600">
              500+
            </h2>
            <p className="text-gray-500">
              Usuarios
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-4xl font-bold text-green-600">
              98%
            </h2>
            <p className="text-gray-500">
              Satisfacción
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;