import jwt from "jsonwebtoken";
import db from "../models/index.js";
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = String(req.headers["authorization"] || "");
    if (authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7, authHeader.length);
      let payloadToken = jwt.verify(token, process.env.JWT_SECRET);
          let user = await db.User.findOne({
            where: { id: payloadToken.userId },
            attributes: {
              exclude: ["password"],
            },
          });
          if (user) {
            user = user.get({ plain: true });
            req.user = user;
            next();
          } else {
            res.status(401).json({ message: "Failed to find user" });
          }
      }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getUser = async (req, res, next) => {
  try {
    const authHeader = String(req.headers["authorization"] || "");
    if (authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7, authHeader.length);
      let payloadToken = jwt.verify(token, process.env.JWT_SECRET);
      let user = await db.User.findOne({
        where: { id: payloadToken.id },
        attributes: {
          exclude: ["password", "updatedAt", "createdAt"],
        },
      });
      if (user) {
        user = user.get({ plain: true });
        req.user = user;
      }
    }
    next();
  } catch (err) {
    next();
  }
};