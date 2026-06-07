# 🌱 EcoMarket

## Plataforma Web para la Conexión entre Productores Locales y Consumidores

EcoMarket es una plataforma web desarrollada como proyecto académico de Ingeniería de Software cuyo objetivo es fortalecer el comercio local mediante la conexión directa entre productores, emprendedores y consumidores dentro de comunidades urbanas.

La aplicación permite visualizar productos, explorar catálogos organizados por categorías, consultar información detallada de cada publicación y gestionar un carrito de compras de forma sencilla e intuitiva.

---

# 🚀 Descripción del proyecto

Actualmente muchos productores locales tienen dificultades para promocionar sus productos dentro de su propia comunidad. La mayoría depende de redes sociales o medios informales que generan poca visibilidad y dificultan la gestión organizada de sus productos.

EcoMarket surge como una solución tecnológica que permite centralizar la oferta local en una única plataforma digital, facilitando la búsqueda de productos y fortaleciendo la economía local.

---

# 🌐 Aplicación en Producción

Frontend desplegado en Vercel:

https://front-end-eco-market.vercel.app

Repositorio Frontend:

https://github.com/DevJhonRivera/Front-end_EcoMarket

Repositorio Backend:

https://github.com/DevJhonRivera/Back-End-ProyectoSoftware

---

# 🛠️ Tecnologías Utilizadas

## Frontend

* React.js
* Vite
* JavaScript
* React Router DOM
* Axios
* SweetAlert2
* CSS
* Tailwind CSS

## Backend

* Node.js
* Express.js
* JavaScript

## Base de Datos
* MongoDb Atlas

## Control de versiones

* Git
* GitHub

## Integración continua

* GitHub Actions

## Despliegue

* Vercel (Frontend)
* Render (Backend)

---

# 📦 Funcionalidades Implementadas

### Gestión de productos

* Visualización del catálogo de productos
* Búsqueda de productos
* Filtrado por categorías
* Visualización detallada de productos

### Carrito de compras

* Agregar productos al carrito
* Actualizar cantidades
* Eliminar productos
* Resumen de compra

### Navegación

* Navegación entre páginas
* Interfaz responsiva
* Diseño amigable para el usuario

### Integración

* Consumo de API REST
* Comunicación Frontend – Backend

---

# 📁 Arquitectura General

El sistema fue desarrollado bajo una arquitectura Cliente – Servidor.

Frontend (React)
↓
API REST (Node.js + Express)
↓
Base de Datos

El frontend se encarga de la interacción con el usuario mientras que el backend administra la lógica de negocio y el procesamiento de la información.

---

# 📂 Estructura del Proyecto Frontend

src/

components/

* ProductCard.jsx
* Navbar.jsx
* Cart.jsx

pages/

* Home.jsx
* Catalog.jsx
* ProductDetail.jsx

services/

* productService.js

context/

* CartContext.jsx

App.jsx

main.jsx

---

# ⚙️ Instalación Local

## 1. Clonar el repositorio

git clone https://github.com/DevJhonRivera/Front-end_EcoMarket.git

## 2. Ingresar al proyecto

cd Front-end_EcoMarket

## 3. Instalar dependencias

npm install

## 4. Ejecutar la aplicación

npm run dev

---

# ⚙️ Configuración Backend

El frontend consume los servicios del backend.

URL local:

http://localhost:3001

Ejemplo de configuración:

const API_URL = "http://localhost:3001/api/products";

---

# 🔄 Integración Continua (CI/CD)

El proyecto utiliza GitHub Actions para automatizar procesos de desarrollo.

Funciones implementadas:

* Build automático
* Instalación automática de dependencias
* Validación de código
* Ejecución automática en cada actualización del repositorio

---

# 🧪 Pruebas de Software

Para garantizar la calidad del sistema se realizaron diferentes tipos de pruebas.

### Pruebas Unitarias

* Búsqueda de productos
* Filtrado por categorías
* Visualización de productos
* Gestión del carrito

### Pruebas de Integración

* Buscador y catálogo
* Categorías y catálogo
* Navegación del sistema

### Pruebas End To End (E2E)

* Agregar producto al carrito
* Modificar cantidades
* Eliminar productos
* Navegación completa
* Publicación de productos

Cobertura funcional estimada:

85%+

---

# 📚 Documentación Técnica

La documentación completa del proyecto incluye:

* README
* Diagramas UML
* Diagramas C4
* Historias de Usuario
* Arquitectura Cliente-Servidor
* ADR (Architecture Decision Records)
* GitHub Actions
* Dockerfile
* Docker Compose

---

# 👥 Equipo de Desarrollo

Proyecto desarrollado para la asignatura Proyecto de Software.

Corporación Universitaria Iberoamericana

Programa de Ingeniería de Software

---

# 📄 Licencia

Proyecto desarrollado con fines académicos y educativos.

Todos los derechos pertenecen a sus autores y a la Corporación Universitaria Iberoamericana.
