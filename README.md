# TEAM-BLUE — Student Team Members Management Application

A full-stack web application to manage student team members built for the 21CSS301T Full Stack Development course at SRMIST.

---

## Project Description

This app allows a team to manage its members by:
- Viewing a landing page with the team name and navigation
- Adding new members with profile details and a photo upload
- Viewing all members in a card grid layout
- Clicking on a member to view their full details

---

## Technologies Used

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Frontend    | React.js, React Router v6, Axios  |
| Backend     | Node.js, Express.js               |
| Database    | MongoDB (Mongoose)                |
| File Upload | Multer                            |
| Tools       | VS Code, MongoDB Compass          |

---

## Project Structure
```
TEAM-BLUE/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .gitignore
│   └── uploads/
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── pages/
│   │       ├── HomePage.jsx
│   │       ├── AddMemberPage.jsx
│   │       ├── ViewMembersPage.jsx
│   │       └── MemberDetailsPage.jsx
│   └── package.json
├── .gitignore
└── README.md
```
---

## Installation Steps

### Prerequisites
- Node.js v16+
- MongoDB running locally on port 27017
- MongoDB Compass (optional)

### 1. Clone the Repository

git clone https://github.com/shiwank05/TEAM-BLUE.git
cd TEAM-BLUE

### 2. Setup Backend

cd backend
npm install

### 3. Setup Frontend

cd ../frontend
npm install

---

## How to Run the App

### Start Backend

cd backend
node server.js

Backend runs at: http://localhost:5000

Expected output:
Server is running on http://localhost:5000
MongoDB connected successfully

### Start Frontend

cd frontend
npm start

Frontend runs at: http://localhost:3000

---

## API Endpoints

| Method | Endpoint           | Description                        |
|--------|--------------------|------------------------------------|
| POST   | /members           | Add a new team member (with image) |
| GET    | /members           | Retrieve all team members          |
| GET    | /members/:id       | Retrieve a single member by ID     |
| GET    | /api/members       | Retrieve all members (browser test)|
| GET    | /api/members/:id   | Single member by ID (browser test) |

### Test API in Browser

All members:
http://localhost:5000/api/members

Single member:
http://localhost:5000/api/members/<member_id>

---

## Pages

| Page              | Route         | Description                             |
|-------------------|---------------|-----------------------------------------|
| Home Page         | /             | Landing page with team name and buttons |
| Add Member Page   | /add          | Form to add a new member with photo     |
| View Members Page | /view         | Card grid of all team members           |
| Member Details    | /member/:id   | Full details of a selected member       |

---

## Team Name
TEAM BLUE

## Course
21CSS301T - Full Stack Development
III Year / VI Sem - SRMIST, Kattankulathur
