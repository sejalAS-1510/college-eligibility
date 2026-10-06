# Nxt2Campus — College Eligibility Predictor

A full-stack web application that predicts college eligibility for MHT-CET candidates based on percentile and historical cutoff data.

**Live:** https://nxt2campus.onrender.com/

**Repo:** https://github.com/sejalAS-1510/college-eligibility

## Overview

MHT-CET cutoff data is typically spread across PDFs and inconsistent sources, making it difficult for students to identify which colleges they are actually eligible for. This project consolidates historical cutoff data for 10 colleges into a single application: a student enters their percentile and receives a list of colleges they qualify for.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Render

## Features

- Percentile-based eligibility prediction using historical cutoff data across 10 colleges
- REST API backend separating prediction logic from the frontend
- Responsive UI
- Single consolidated workflow for college shortlisting

## Project Structure

```
college-eligibility/
├── client/          # React frontend
├── server/          # Express backend
│   ├── models/
│   ├── routes/
│   └── controllers/
└── .env.example
```

## Setup

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/sejalAS-1510/college-eligibility.git
cd college-eligibility

cd server && npm install
cd ../client && npm install
```

### Environment Variables

Create a `.env` file in `server/`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Run

```bash
# Backend
cd server && npm start

# Frontend (separate terminal)
cd client && npm start
```

Frontend runs on `http://localhost:3000`, backend on `http://localhost:5000`.

## API

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/colleges | Returns all colleges and cutoff data |
| POST | /api/predict | Returns eligible colleges for a given percentile |

## Author

Sejal Shinkar
[Portfolio](https://sejalshinkar.vercel.app) · [LinkedIn](https://linkedin.com/in/sejal-shinkar)
