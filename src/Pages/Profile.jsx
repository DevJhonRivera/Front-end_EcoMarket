import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/userService";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

function Profile() {
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      console.log(data)
      setForm({
        name: data.username,
        email: data.email,
      });

      setUser(data.user);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updated = await updateProfile(form);

      setUser(updated);
      setEditMode(false);

      Swal.fire({
        icon: "success",
        title: "Perfil actualizado",
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al actualizar",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="animate-pulse text-gray-500">
          Cargando perfil...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Mi Perfil</h2>
            <p className="text-sm opacity-80">
              Información de tu cuenta
            </p>
          </div>

          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold"
            >
              Editar
            </button>
          )}
        </div>

        <div className="p-6 grid md:grid-cols-3 gap-6">

          {/* INFO USUARIO */}
          <div className="flex flex-col items-center text-center border-r">

            <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {user?.username}
            </h3>

            <p className="text-gray-500 text-sm">
              {user?.email}
            </p>

          </div>

          {/* DETALLES */}
          <div className="md:col-span-2">

            {!editMode ? (
              <div className="space-y-4">

                <div>
                  <p className="text-sm text-gray-500">Nombre</p>
                  <p className="font-medium">{user?.username}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>

              </div>

            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="text-sm text-gray-600">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-green-300"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-green-300"
                  />
                </div>

                <div className="flex gap-3">

                  <button
                    type="submit"
                    className="bg-green-600 text-white px-5 py-2 rounded-lg"
                  >
                    Guardar
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="bg-gray-300 px-5 py-2 rounded-lg"
                  >
                    Cancelar
                  </button>

                </div>

              </form>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;