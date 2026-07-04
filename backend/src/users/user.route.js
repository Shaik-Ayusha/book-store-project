const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.get("/create-admin", async (req, res) => {
    try {
        const existingAdmin = await User.findOne({ username: "admin" });

        if (existingAdmin) {
            return res.status(200).send("Admin already exists");
        }

        const admin = new User({
            username: "admin",
            password: "admin123",
            role: "admin",
        });

        await admin.save();

        res.status(201).send("Admin created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating admin");
    }
});
// Admin Login
router.post("/admin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await User.findOne({ username });

        if (!admin) {
            return res.status(404).json({
                message: "Admin not found!"
            });
        }

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password!"
            });
        }

        const token = jwt.sign(
            {
                id: admin._id,
                username: admin.username,
                role: admin.role
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );

        return res.status(200).json({
            message: "Authentication successful",
            token,
            user: {
                username: admin.username,
                role: admin.role
            }
        });

    } catch (error) {
        console.error("Failed to login as admin:", error);

        return res.status(500).json({
            message: "Failed to login as admin"
        });
    }
});
module.exports = router;