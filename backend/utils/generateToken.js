import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // Prevent XSS ( Cross-site Scripting Attacks )
        sameSite: "strict", // CRSF ( Cross-site Request Forgery Attacks )
        secure: process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;
