const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Devesh@123", // Replace with your MySQL password
    database: "studentdb"
});

// Test database connection
db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err);
        return;
    }
    console.log("✅ Connected to MySQL database");
});

// GET endpoint to fetch all users
app.get("/api/users", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("❌ Error fetching users:", err);
            return res.status(500).json({
                status: "error",
                message: "Failed to fetch users"
            });
        }
        res.json({
            status: "success",
            data: results
        });
    });
});

// POST endpoint to add a new user
app.post("/api/users", async(req, res) => {
    try {
        const userData = req.body;
        console.log('Received user data:', userData); // Log incoming data

        const query = `
            INSERT INTO users (
                name, 
                mobile, 
                email, 
                degree, 
                field, 
                age, 
                college, 
                course, 
                description
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            userData.name,
            userData.mobile,
            userData.email,
            userData.degree,
            userData.field,
            userData.age,
            userData.college,
            userData.course,
            userData.description
        ];

        console.log('Query values:', values); // Log values being inserted

        db.query(query, values, (error, results) => {
            if (error) {
                console.error('Database error:', error);
                return res.status(500).json({ error: 'Failed to save user data' });
            }
            console.log('Insert successful, results:', results); // Log successful insert
            res.status(201).json({
                message: 'User created successfully',
                id: results.insertId
            });
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE endpoint to remove a user
app.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?";

    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("❌ Error deleting user:", err);
            return res.status(500).json({
                status: "error",
                message: "Failed to delete user"
            });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
        res.json({
            status: "success",
            message: "User deleted successfully"
        });
    });
});

// UPDATE endpoint to modify user data
app.put("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    const sql = `
        UPDATE users 
        SET name = ?, mobile = ?, email = ?, degree = ?, 
            field = ?, age = ?, college = ?, course = ?, description = ?
        WHERE id = ?
    `;

    const values = [
        updateData.name,
        updateData.mobile,
        updateData.email,
        updateData.degree,
        updateData.field,
        updateData.age,
        updateData.college,
        updateData.course,
        updateData.description,
        userId
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("❌ Error updating user:", err);
            return res.status(500).json({
                status: "error",
                message: "Failed to update user"
            });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: "error",
                message: "User not found"
            });
        }
        res.json({
            status: "success",
            message: "User updated successfully"
        });
    });
});

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});