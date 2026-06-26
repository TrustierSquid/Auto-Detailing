# Auto Detailing Site

A mobile auto detailing website with a React frontend and Flask + SQLite backend.

---

## Versions

| Tool | Version |
|------|---------|
| Node.js | 22.12.0 (required — use `nvm use 22.12.0`) |
| Python | 3.10.12 |
| Flask | 3.1.3 |
| flask-cors | 6.0.5 |
| Vite | 8.x |
| React | 19.x |

---

## Setup

### Frontend
```bash
cd client
nvm use 22.12.0
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend
```bash
cd server
python3 -m venv venv
venv/bin/pip install -r requirements.txt
venv/bin/python app.py
# Runs on http://localhost:5000
```

The SQLite database (`detailing.db`) is created automatically on first run.

---

## API Endpoints

### `GET /api/health`
Confirms the server is running.

**Response**
```json
{ "status": "ok" }
```

---

### `POST /api/bookings`
Submits a new booking request from the contact form.

**Request body**
```json
{
  "name":    "Jane Smith",       // required
  "phone":   "555-000-0000",     // required
  "email":   "jane@email.com",   // optional
  "vehicle": "2021 Honda Civic", // optional
  "service": "Full Detail",      // required
  "message": "Any notes here"    // optional
}
```

**Response `201`**
```json
{ "id": 1, "message": "Booking received!" }
```

**Response `400`** — missing required fields
```json
{ "error": "name, phone, and service are required" }
```

---

### `GET /api/bookings`
Returns all bookings, newest first.

**Response**
```json
[
  {
    "id": 1,
    "name": "Jane Smith",
    "phone": "555-000-0000",
    "email": "jane@email.com",
    "vehicle": "2021 Honda Civic",
    "service": "Full Detail",
    "message": "",
    "status": "pending",
    "created_at": "2026-06-26 01:54:00"
  }
]
```

---

### `PATCH /api/bookings/<id>`
Updates the status of a booking.

**Request body**
```json
{ "status": "confirmed" }
```

Valid statuses: `pending` · `confirmed` · `completed` · `cancelled`

**Response `200`**
```json
{ "id": 1, "status": "confirmed" }
```

**Response `400`** — invalid status value
```json
{ "error": "invalid status" }
```

---

## Testing the API

### Health check
```bash
curl http://localhost:5000/api/health
```

### Submit a booking
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","phone":"555-1234","service":"Full Detail"}'
```

### List all bookings
```bash
curl http://localhost:5000/api/bookings
```

### Update booking status
```bash
curl -X PATCH http://localhost:5000/api/bookings/1 \
  -H "Content-Type: application/json" \
  -d '{"status":"confirmed"}'
```

---

## Branding Placeholders

Search and replace the following before going live:

| Placeholder | Replace with |
|-------------|-------------|
| `[BUSINESS NAME]` | Your business name |
| `[PHONE NUMBER]` | Your phone number |
| `[EMAIL ADDRESS]` | Your email address |
| `[YOUR SERVICE AREA]` | Your city / region |
