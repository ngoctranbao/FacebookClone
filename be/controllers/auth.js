import { loginUserService, signUpUserService } from "../services/auth.js";

export const handleRegisterUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await signUpUserService(data);
    return res
      .status(200)
      .json({ message: "Sign up successfully", data: user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


export const handleLoginUser = async (req, res) => {
  try {
    console.log(req.body)
    const data = await loginUserService(req.body);
    if (data.message === "Login successful") {
      res.cookie("token", data.token, {
        httpOnly: true,
      });
      return res.status(200).json(data);
    }
    else return res.status(203).json({message: data.message})
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: [{ field: "error", message: error.message }] });
  }
};

export const handleLoginByToken = async (req, res) => {
  try {
    if (req.user) {
      return res.status(200).json({ data: req.user });
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const handleLogoutUser = async (req, res) => {
  return res.status(200).json({ message: "User logged out" });
};