import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// Auth login handler
export const authLogin = asyncHandler(async (req, res) => {
    const { password, email } = req.body;
    if (email === process.env.AUTH_EMAIL && password === process.env.AUTH_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "Authorization successful", token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

