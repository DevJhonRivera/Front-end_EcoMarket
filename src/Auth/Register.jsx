import { useState } from "react";
import Swal from "sweetalert2";
import { User, Mail, Lock, Store } from "lucide-react";
import { registerUser } from "../services/authService";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return Swal.fire({
        icon: "warning",
        title: "Contraseñas diferentes",
        text: "Las contraseñas deben coincidir",
        confirmButtonColor: "#16a34a",
      });
    }

    if (formData.password.length < 6) {
      return Swal.fire({
        icon: "warning",
        title: "Contraseña débil",
        text:
          "La contraseña debe tener al menos 6 caracteres",
        confirmButtonColor: "#16a34a",
      });
    }

    try {
      Swal.fire({
        title: "Creando cuenta...",
        text: "Por favor espere",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      Swal.fire({
        icon: "success",
        title: "Cuenta creada",
        text:
          "Ya puedes iniciar sesión en EcoMarket",
        timer: 2000,
        showConfirmButton: false,
      });

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "buyer",
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.message ||
          "No fue posible crear la cuenta",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* Usuario */}

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Nombre de usuario
        </label>

        <div className="relative">

          <User
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />

        </div>
      </div>

      {/* Email */}

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Correo electrónico
        </label>

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />

        </div>
      </div>

      {/* Password */}

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Contraseña
        </label>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />

        </div>
      </div>

      {/* Confirmar Password */}

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Confirmar contraseña
        </label>

        <div className="relative">

          <Lock
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="********"
            className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />

        </div>
      </div>

      {/* Rol */}

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Tipo de cuenta
        </label>

        <div className="relative">

          <Store
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-green-500 outline-none appearance-none"
          >
            <option value="buyer">
              Comprador
            </option>

            <option value="seller">
              Vendedor
            </option>
          </select>

        </div>
      </div>

      {/* Botón */}

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-md hover:shadow-lg"
      >
        Crear Cuenta
      </button>

    </form>
  );
}

export default Register;  