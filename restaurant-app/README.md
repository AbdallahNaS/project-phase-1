# RestoApp

This is a simple restaurant web application built with React frontend and Node.js backend for a student project.

## Technologies Used
- Frontend: React, CSS
- Backend: Node.js, Express.js
- Database: MySQL
- Authentication: JWT
- Other: Axios for API calls


## Backend setup
1. Copy `.env.example` to `.env` and fill values (DB credentials, JWT_SECRET).
2. From `restaurant-app/src/restaurant-backend` install dependencies and run seed:

```bash
cd restaurant-app/src/restaurant-backend
npm install
npm run seed
npm run dev
```

The backend runs on port 3001. Note: `npm run seed` initializes the MySQL database with schema and sample data. Ensure MySQL is running.

## Frontend setup
From project root:

```bash
cd restaurant-app
npm install
npm start
```

The frontend runs on port 3000 and connects to the backend at localhost:3001.

## Deployment

### Overview
You can deploy the backend to Railway or Render. Both services can pull from your GitHub repository and run the Node app located at `restaurant-app/src/restaurant-backend`.

### Required environment variables
- `DB_HOST` — MySQL host (or Railway-provided host)
- `DB_USER` — MySQL user
- `DB_PASSWORD` — MySQL password
- `DB_NAME` — MySQL database name (default: `restaurant`)
- `JWT_SECRET` — secret for signing JWT tokens
- `PORT` — optional (the app defaults to 3001)

### Deploy to Railway (recommended)
1. Push your repo to GitHub if not already done.
2. Go to https://railway.app and create a project.
3. Add a MySQL plugin (Railway provides a managed MySQL). Note the connection details.
4. Connect your GitHub repository and select the repo.
5. In the Railway service settings, set the root or working directory to `restaurant-app/src/restaurant-backend`.
6. Set the build command to `npm install` and the start command to `npm start` (Railway usually detects these automatically).
7. Add the environment variables (Railway will provide DB_HOST, DB_USER, DB_PASSWORD, DB_NAME). Add `JWT_SECRET` with a secure value.
8. Deploy and open the service URL. You can then run the seed script from Railway Console or locally to create initial data:

```bash

cd restaurant-app/src/restaurant-backend
npm run seed
```

### Deploy to Render
1. Push your repo to GitHub.
2. Go to https://render.com and create a new Web Service.
3. Connect the same GitHub repository.
4. Set the Root Directory to `restaurant-app/src/restaurant-backend`.
5. For Environment, choose `Node`.
6. Build Command: `npm install`
7. Start Command: `npm start` (or `node server.js`).
8. Add environment variables (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET, PORT).
9. Deploy. After deployment, run the seed script either locally against the new DB or via a one-off shell on Render (Render provides a shell in the dashboard for Private Services).

### Notes about the database
- You can use the hosting provider's managed MySQL (Railway plugin) or an external MySQL instance (e.g., PlanetScale, AWS RDS).
- If you use a remote DB, update `.env` locally with those credentials before running `npm run seed` to populate sample data.

### Frontend deployment
- Frontend is a standard Create React App. Build it with `npm run build` and host the `build/` folder on GitHub Pages, Netlify, Vercel, or any static host.

## Conclusion
This project demonstrates basic web development skills with React and Node.js, including database integration and authentication. It solves the problem of online food ordering for a restaurant.

## Future Scope
- Add payment integration
- Implement admin panel for order management
- Add email notifications
- Improve UI with more advanced styling
Restaurant Ordering System

This project is a simple restaurant web application.
The frontend is built using React.
The backend is built using Node.js and MySQL.

Users can register, login, and place orders.
Each order is linked to a user.

Technologies Used
- React
- Node.js
- Express
- MySQL
- JWT Authentication

Setup Instructions

Frontend
1. Run npm install
2. Run npm start

Backend
1. Create MySQL database
2. Update .env file
3. Run npm install
4. Run npx nodemon server.js
