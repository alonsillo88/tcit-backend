TCIT Frontend – Challenge Técnico

Este proyecto corresponde a la segunda etapa del proceso de selección para CTIT.
Consiste en una aplicación React con Redux Toolkit que consume una API REST para la gestión de publicaciones (posts).

Tecnologías utilizadas
- React
- Redux Toolkit
- React Redux
- Axios
- CSS
- JSON camelCase

Estructura del proyecto

frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PostFilter.jsx
│   │   ├── PostForm.jsx
│   │   └── PostList.jsx
│   ├── redux/
│   │   ├── postsSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── package.json
└── README.md

Requisitos
- Node.js >= 18.x
- Navegador moderno

Pasos para levantar el proyecto

1. Clona el repositorio

git clone https://github.com/tu-usuario/tcit-frontend.git
cd tcit-frontend

2. Instala las dependencias

npm install

3. Levanta la aplicación

npm start

La app quedará disponible en:
http://localhost:3000

Funcionalidades

- Crear una nueva publicación con nombre y descripción.
- Filtrar publicaciones por nombre en tiempo real.
- Eliminar publicaciones individuales.
- Interfaz visual mejorada con diseño limpio.

Consideraciones

Este frontend consume los datos desde:
http://localhost:3001/posts

Asegúrate de tener el backend ejecutándose correctamente.

Buenas prácticas aplicadas
- Componentización clara y reutilizable.
- Estado global administrado con Redux Toolkit.
- Uso de camelCase en código JS y JSON.
- Consumo eficiente del backend con Axios y createAsyncThunk.

Autor
Desarrollado por Alonso González
Julio 2025
