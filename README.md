# TCIT Backend API – Challenge Técnico

Este proyecto corresponde a la segunda etapa del proceso de selección para CTIT.  
Consiste en una API JSON desarrollada con Node.js, Express y Sequelize, que permite gestionar publicaciones (posts) en una base de datos PostgreSQL.

## Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL
- CORS
- JSON en camelCase

## Estructura del proyecto

```
backend/
├── app.js
├── config/
│   └── config.json
├── migrations/
│   └── [timestamp]-create-post.js
├── models/
│   ├── index.js
│   └── post.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Requisitos

- Node.js >= 18.x
- PostgreSQL >= 13.x
- Sequelize CLI instalado globalmente

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
PORT=3001
```

## Pasos para levantar el proyecto

1. Clona el repositorio

```
git clone https://github.com/tu-usuario/tcit-backend.git
cd tcit-backend
```

2. Instala las dependencias

```
npm install
```

3. Crea la base de datos

Desde pgAdmin o consola, crea una base de datos llamada:

```
tcit_db
```

4. Configura la conexión en `config/config.json`

Ajusta el archivo con tus credenciales de PostgreSQL locales:

```json
{
  "development": {
    "username": "postgres",
    "password": "tu_contraseña",
    "database": "tcit_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

5. Ejecuta las migraciones

```
npx sequelize-cli db:migrate
```

6. Inicia el servidor

```
node app.js
```

El backend quedará disponible en: `http://localhost:3001`

## Endpoints disponibles

| Método | Ruta         | Descripción                  |
|--------|--------------|------------------------------|
| GET    | /posts       | Obtener todas las publicaciones |
| POST   | /posts       | Crear una nueva publicación     |
| DELETE | /posts/:id   | Eliminar una publicación por ID |

### Ejemplo de solicitud POST

```json
{
  "name": "Ejemplo de post",
  "description": "Este es un contenido de prueba"
}
```



## Autor

Desarrollado por Alonso González  
Julio 2025