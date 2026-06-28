import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../Schema/User.js";


// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};



// =========================
// REGISTER
// =========================

export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      role,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser =
      await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await userModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role,
      });

    const token = generateToken(
      user._id,
      user.role
    );

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      token,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Registration Failed",
      error: error.message,
    });
  }
};



// =========================
// LOGIN
// =========================

export const login = async (req, res) => {
  try {
    const { email, password } =
      req.body;

    const user =
      await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = generateToken(
      user._id,
      user.role
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Login Failed",
      error: error.message,
    });
  }
};



// =========================
// GET PROFILE
// =========================

export const getProfile = async (
  req,
  res
) => {
  try {
    const user =
      await userModel
        .findById(req.user.id)
        .select("-password");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// UPDATE PROFILE
// =========================

export const updateProfile = async (
  req,
  res
) => {
  try {
    const {
      name,
      phone,
    } = req.body;

    const user =
      await userModel.findByIdAndUpdate(
        req.user.id,
        {
          name,
          phone,
        },
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message:
        "Profile Updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// =========================
// CHANGE PASSWORD
// =========================

export const changePassword =
  async (req, res) => {
    try {
      const {
        oldPassword,
        newPassword,
      } = req.body;

      const user =
        await userModel.findById(
          req.user.id
        );

      const isMatch =
        await bcrypt.compare(
          oldPassword,
          user.password
        );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message:
            "Old Password Incorrect",
        });
      }

      const hashedPassword =
        await bcrypt.hash(
          newPassword,
          10
        );

      user.password =
        hashedPassword;

      await user.save();

      res.status(200).json({
        success: true,
        message:
          "Password Changed Successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };



// =========================
// DELETE ACCOUNT
// =========================

export const deleteAccount =
  async (req, res) => {
    try {
      await userModel.findByIdAndDelete(
        req.user.id
      );

      res.status(200).json({
        success: true,
        message:
          "Account Deleted Successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };