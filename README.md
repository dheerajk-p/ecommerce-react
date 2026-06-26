UrbanBazaar 🛒

A full-stack e-commerce web app built with React and Node.js/Express, featuring product browsing, a persistent shopping cart, delivery options, and a complete checkout-to-order flow.

🔗 Live demo: http://urban-bazar-react-env.eba-zcckswqu.ap-south-1.elasticbeanstalk.com/


Built as an extended, self-deployed version of the SuperSimpleDev ecommerce-project tutorial series — used as a learning foundation, then taken further with custom backend architecture, database integration, and a live AWS deployment.




Features


🛍️ Browse products with search/keyword filtering
🛒 Add to cart, update quantities, and choose delivery options
💳 Checkout flow with order summary, tax, and shipping calculation
📦 Order history and order details
🔄 Database reset endpoint for demo/testing purposes
☁️ Deployed on AWS Elastic Beanstalk



Tech Stack

Frontend


React (Vite)
Tailwind CSS
React Router


Backend


Node.js + Express
Sequelize ORM
SQLite (local development, via sql.js)
MySQL / PostgreSQL support (production, via AWS RDS)


Deployment


AWS Elastic Beanstalk (backend + serves built frontend)
Environment-based database switching (SQLite locally → RDS in production)



How the Database Works

This project uses Sequelize as an ORM abstraction layer, which means it can run on different databases without changing any application code:


Local development: Defaults to an embedded SQLite database (via sql.js), so there's zero setup — just install and run.
Production: When RDS_HOSTNAME, RDS_USERNAME, and RDS_PASSWORD environment variables are present (as on AWS Elastic Beanstalk with RDS attached), it automatically connects to a real MySQL or PostgreSQL database instead.


This made it possible to develop quickly without managing a local database server, while still deploying against a production-grade database on AWS.


API Overview

MethodEndpointDescriptionGET/api/productsList all products (supports ?search=)GET/api/delivery-optionsList delivery optionsGET/api/cart-itemsGet current cart (supports ?expand=product)POST/api/cart-itemsAdd item to cartPUT/api/cart-items/:productIdUpdate quantity / delivery optionDELETE/api/cart-items/:productIdRemove item from cartGET/api/ordersList past ordersPOST/api/ordersPlace an order from current cartGET/api/orders/:orderIdGet a specific orderGET/api/payment-summaryGet cart cost breakdown (items, shipping, tax, total)POST/api/resetReset database to default demo data

Full request/response details are in documentation.md.


Running Locally

Backend

bashcd backend
npm install
npm run dev

Runs on http://localhost:3000 by default, using an embedded SQLite database — no setup required.

Frontend

bashcd frontend
npm install
npm run dev

Runs on Vite's default dev server with hot reload.

Environment Variables (Production / RDS)

To connect to a real MySQL/PostgreSQL database instead of local SQLite:

RDS_HOSTNAME=your-db-host
RDS_USERNAME=your-db-username
RDS_PASSWORD=your-db-password
RDS_DB_NAME=your-db-name
RDS_PORT=3306        # optional, defaults based on DB_TYPE
DB_TYPE=mysql         # or postgres


Deployment

The backend is deployed on AWS Elastic Beanstalk, which serves both the Express API and the built React frontend (dist/) from a single environment. Database credentials are injected via environment variables, allowing the same codebase to run identically in local development (SQLite) and production (RDS).


Acknowledgements

Built on top of the SuperSimpleDev ecommerce-project tutorial as a learning base, then extended with a Sequelize-backed database layer, RDS-ready configuration, and a live AWS deployment.
