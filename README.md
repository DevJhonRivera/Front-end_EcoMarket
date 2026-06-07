# 🌱 EcoMarket Frontend

Aplicación frontend desarrollada para la gestión y visualización de productos en una tienda virtual ecológica. Permite a los usuarios navegar por un catálogo, visualizar productos y gestionar un carrito de compras de forma interactiva.

---

## 🚀 Tecnologías utilizadas

* React.js
* Vite
* Axios
* SweetAlert2
* React Router DOM
* CSS / Tailwind 

---

## 📦 Funcionalidades principales

* 🛍️ Visualización de catálogo de productos
* 🔍 Búsqueda de productos
* 👁️ Vista detallada de productos
* 🛒 Agregar productos al carrito
* ❌ Eliminar productos del carrito
* 🔔 Notificaciones con SweetAlert
* 🔄 Consumo de API (backend con Node.js y MongoDB)

---

## 📁 Estructura del proyecto

```
src/
│── components/
│   ├── ProductCard.jsx
│   ├── Navbar.jsx
│   └── Cart.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Catalog.jsx
│   └── ProductDetail.jsx
│
│── services/
│   └── productService.js
│
│── context/
│   └── CartContext.jsx
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
https://github.com/DevJhonRivera/Front-end_EcoMarket.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el proyecto:

```bash
npm run dev
```

---

## 🔗 Configuración del backend

Asegúrate de tener corriendo el backend en:

```
http://localhost:3001
```

```javascript
const API_URL = "http://localhost:3001/api/products";
```

---

## 🧪 Pruebas

El proyecto incluye pruebas de software para garantizar la calidad:

* ✅ Pruebas unitarias (Jest)
* ✅ Pruebas de integración
* ✅ Pruebas End-to-End (Playwright)


---

## 📌 Estado del proyecto

✔ En desarrollo
✔ Funcionalidades principales implementadas
✔ Integración frontend-backend completada

---


## 📄 Licencia

Este proyecto es de uso académico.
