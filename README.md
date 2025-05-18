# 🚀 Notification Service

A full-stack notification system built with **Node.js**, **Express**, **MongoDB**, **RabbitMQ**, and **React**.  
Send, store, and display notifications (email/SMS/in-app) for users.

---

## Features

- 📬 Send notifications via a frontend form
- 💾 Store and fetch notifications from MongoDB
- 🔔 Real-time feedback with toast messages
- 🐳 Easy Docker setup for MongoDB, RabbitMQ, and Mongo Express

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/sr993108/Notification_Service
cd notification-service

### 2. Start MongoDB, RabbitMQ, and Mongo Express


- MongoDB: [localhost:27017](http://localhost:27017)
- RabbitMQ: [localhost:15672](http://localhost:15672) (user/pass: guest/guest)
- Mongo Express: [localhost:8081](http://localhost:8081) (user: root, pass: password)

### 3. Backend Setup

cd notification-backend
npm install

Create a .env file (see .env.example or below)
npm start

#### Example `.env` file:

MONGODB_URI=mongodb://root:password@localhost:27017/notifications
RABBITMQ_URL=amqp://guest:guest@localhost:5672
SENDGRID_API_KEY=your_key
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token


### 4. Frontend Setup

cd ../notification-frontend
npm install
npm run dev


- Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage

- **Send a notification:** Use the form on the frontend.
- **View notifications:** Notifications appear in the frontend list and in Mongo Express.
- **API Endpoints:**
  - `POST /notifications` - Send a notification
  - `GET /users/:id/notifications` - Get notifications for a user

---

## Assumptions

- User IDs are simple strings (e.g., `"test-user"`) for demo/testing.
- Default MongoDB credentials: `root` / `password`.
- Default RabbitMQ credentials: `guest` / `guest`.
- Email/SMS sending is stubbed or can be added via SendGrid/Twilio.
- This setup is for development/demo purposes.

---

## Troubleshooting

- **MongoDB authentication errors:**  
  Run `docker-compose down -v && docker-compose up -d` to reset containers and data.
- **Frontend not connecting:**  
  Ensure backend is running on port 3000 and CORS is handled if needed.
- **No notifications shown:**  
  Make sure you POST a notification first; MongoDB creates the database on first insert.

---

## License

MIT

---

**Happy notifying!** 🎉
