import User from "../models/UserModel.js";
import asynchandler from "express-async-handler";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const registerUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("email already exists");
  }

  const salt = await bcrypt.genSalt(15);
  const hashed = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: hashed,
  });
  const token = generateToken(user);

  res.status(201).json({
    massage: "User created successfully",
    token,
  });
});

const loginUser = asynchandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404);
    throw new Error("Incorrect credentials ");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401);
    throw new Error("Incorrect credentials ");
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    res.status(404);
    throw new Error("Invalid password");
  }

  res.status(200).json({
    massage: "User logged in successfully",
    token: generateToken(user),
  });
});

export { registerUser, loginUser };
