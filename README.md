# Decorem

Decorem is a full-stack retro decor and apparel shopping application. Patrons can browse products, manage saved items and carts, and simulate purchases. Vendors can manage products and process orders through the vendor-facing parts of the application.

The repository contains two applications:

- `shop_site_fe`: React 18 frontend built with Vite
- `shop_site_be`: Express REST API with Knex and PostgreSQL

## Technology

### Frontend

- React and React DOM
- React Router
- Redux, React Redux, and Redux Thunk
- Axios
- Sass and styled-components
- Vite

### Backend

- Node.js and Express
- PostgreSQL with Knex
- Express sessions and `connect-session-knex`
- JWT authentication and bcrypt password hashing
- CORS and dotenv

## Prerequisites

- Node.js and npm
- PostgreSQL
- A PostgreSQL database for local development

## Setup

Install dependencies separately for each application:

```bash
cd shop_site_be
npm install

cd ../shop_site_fe
npm install
```

### Backend environment

Create `shop_site_be/.env` from `shop_site_be/.env.example` and set values for the local PostgreSQL instance. The example uses:

```dotenv
NODE_ENV=development
PORT=5000
DB_NAME=decorem
DB_USER=postgres
DB_PASSWORD=your_password
DB_SERVER=127.0.0.1
DB_PORT=5432
JWT_SECERET=replace_with_a_long_random_secret
```

The database named by `DB_NAME` must exist before running migrations. The existing environment variable is spelled `JWT_SECERET` in the application and should be kept consistent with the code.

Run migrations and seed the development database from `shop_site_be`:

```bash
npm run migrate
npm run seed
```

### Frontend environment

The frontend defaults to `http://localhost:5000` for API requests. To use another backend URL, create `shop_site_fe/.env` with:

```dotenv
VITE_API_BASE_URL=http://localhost:5000
```

## Run locally

Start the backend in one terminal:

```bash
cd shop_site_be
npm run server
```

Start the frontend in a second terminal:

```bash
cd shop_site_fe
npm run dev
```

Open <http://localhost:3000>. The backend health response is available at <http://localhost:5000/>.

## Available scripts

From `shop_site_fe`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000 |
| `npm run build` | Build the production frontend into `dist/` |
| `npm run preview` | Preview the production build on port 4173 |
| `npm test` | Start the Vitest test runner |

From `shop_site_be`:

| Command | Purpose |
| --- | --- |
| `npm run server` | Start the API with nodemon |
| `npm run migrate` | Apply pending Knex migrations |
| `npm run rollback` | Roll back the latest migration batch |
| `npm run seed` | Load the development seed data |

The backend currently has no automated test suite; its `npm test` script is a placeholder that exits with an error.

## API route groups

The Express API is mounted at `/api` and currently exposes these route groups:

- `/api/auth`
- `/api/patrons`
- `/api/products`
- `/api/vendors`

## Project structure

```text
Decorem/
├── shop_site_fe/       React/Vite client
│   └── src/
│       ├── components/ Pages, modals, and shared UI
│       ├── redux/      Store, actions, and reducers
│       ├── styles/     Sass stylesheets
│       └── utils/      API and routing helpers
└── shop_site_be/       Express/Knex server
	├── data/           Database config, migrations, and seeds
	├── models/         Data-access models
	└── routes/         Authentication and domain routes
```
