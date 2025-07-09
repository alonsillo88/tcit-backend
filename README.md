TCIT Backend API – Challenge Técnico

Este proyecto corresponde a la segunda etapa del proceso de selección para CTIT.
Consiste en una API JSON desarrollada con Node.js, Express y Sequelize, que permite gestionar publicaciones (posts) en una base de datos PostgreSQL.

Tecnologías utilizadas
- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL
- CORS
- JSON camelCase

Requisitos
- Node.js >= 18.x
- PostgreSQL >= 13.x
- Sequelize CLI (instalado globalmente)

Pasos para levantar el proyecto

1. Clona el repositorio

git clone https://github.com/tu-usuario/tcit-backend.git
cd tcit-backend

2. Instala las dependencias

npm install

3. Crea la base de datos

Desde pgAdmin o por consola, crea una base de datos llamada:

tcit_db

4. Configura la conexión a PostgreSQL

Edita el archivo config/config.json con tus credenciales locales:

{
  "development": {
    "username": "postgres",
    "password": "tu_contraseña",
    "database": "tcit_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

5. Ejecuta las migraciones

npx sequelize-cli db:migrate

6. Levanta el servidor

node app.js

La API quedará disponible en:
http://localhost:3001

Endpoints disponibles

Método | Ruta           | Descripción
GET    | /posts         | Obtener todos los posts
POST   | /posts         | Crear un nuevo post
DELETE | /posts/:id     | Eliminar un post por ID

Ejemplo de cuerpo para POST

{
  "name": "Ejemplo de post",
  "description": "Este es un contenido de prueba"
}

Buenas prácticas aplicadas
- Estructura clara y modular.
- Uso de Sequelize como ORM.
- Código JS y JSON en camelCase.
- Único llamado a la API al cargar vista (aplicado en frontend).
- CRUD básico funcional para posts.

Autor
Desarrollado por Alonso González
Julio 2025
