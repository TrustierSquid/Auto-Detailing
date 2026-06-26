from flask import Flask, request, jsonify
from flask_cors import CORS
from db import init_db, get_db

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

init_db()


@app.route("/api/bookings", methods=["POST"])
def create_booking():
    data = request.get_json()

    name    = (data.get("name") or "").strip()
    phone   = (data.get("phone") or "").strip()
    email   = (data.get("email") or "").strip()
    vehicle = (data.get("vehicle") or "").strip()
    service = (data.get("service") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not phone or not service:
        return jsonify({"error": "name, phone, and service are required"}), 400

    conn = get_db()
    cursor = conn.execute(
        """INSERT INTO bookings (name, phone, email, vehicle, service, message)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (name, phone, email, vehicle, service, message),
    )
    conn.commit()
    booking_id = cursor.lastrowid
    conn.close()

    return jsonify({"id": booking_id, "message": "Booking received!"}), 201


@app.route("/api/bookings", methods=["GET"])
def list_bookings():
    conn = get_db()
    rows = conn.execute(
        "SELECT * FROM bookings ORDER BY created_at DESC"
    ).fetchall()
    conn.close()
    return jsonify([dict(r) for r in rows])


@app.route("/api/bookings/<int:booking_id>", methods=["PATCH"])
def update_booking_status(booking_id):
    data = request.get_json()
    status = (data.get("status") or "").strip()

    if status not in ("pending", "confirmed", "completed", "cancelled"):
        return jsonify({"error": "invalid status"}), 400

    conn = get_db()
    conn.execute(
        "UPDATE bookings SET status = ? WHERE id = ?", (status, booking_id)
    )
    conn.commit()
    conn.close()
    return jsonify({"id": booking_id, "status": status})


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
