import db from "../models/index.js";
// import { createVerify } from "./verify";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const signUpUserService = async (data) => {
  try {
    var res = await db.User.create({
      userName: data.userName,
      password: data.password,
      email: data.email,
      avatar: data.avatar,
    });
    res = res.get({ plain: true });
    // if (res) {
    //   delete res["password"];
    //   await createVerify({ type: "1", data: res });
    // }
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
    if(data.password == user.password) {
    // let check = bcrypt.compareSync(data.password, user.password);
    // delete user["password"];
    // if (check) {
    //   let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      return {
        message: "Login successful",
        data: { user: user },
      };
    }
  }
  throw new Error("Email or password is incorrect");
};