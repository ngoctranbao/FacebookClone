import db from "../models/index.js";
// import { createVerify } from "./verify";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
import { hashUserPassword, verifyPassword } from "../utils/hashPassword.js";

export const signUpUserService = async (data) => {
  try {
    console.log(data.password)
    let hashPassword = await hashUserPassword(data.password)
    console.log(hashPassword)
    var res = await db.User.create({
      userName: data.userName,
      password: hashPassword,
      email: data.email,
      avatar: data.avatar,
    });
    res = res.get({ plain: true });
    if (res) {
      delete res["password"];
      // await createVerify({ type: "1", data: res });
    }
    return res;
  } catch (error) {
    console.log(error);
    throw new Error("Register service error");
  }
};

export const loginUserService = async (data) => {
  let user = await db.User.findOne({
    where: { email: data.email },
  });

  if (user) {
    user = user.get({ plain: true });
    let check = await verifyPassword(data.password, user.password)
    delete user["password"];
    if (check) {
      const payload = { userId: user.id };
      const token = jwt.sign(payload, process.env.JWT_TOKEN);
      console.log(token)
      return {
        message: "Login successful",
        data: { user: user },
        token: token
      };
    }
  }
  throw new Error("Email or password is incorrect");
};