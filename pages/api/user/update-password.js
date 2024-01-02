import { verify } from "jsonwebtoken";
import db from "../../../config/db";
const bcrypt = require("bcrypt");
import User from "../../../models/user";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const errors = [];
      const { password, confirmPassword, token } = req.body;

      if (password?.length === 0) {
        errors.push("Password is required.");
      }
      if (confirmPassword?.length === 0) {
        errors.push("Confirm password is required.");
      }
      if (confirmPassword !== password) {
        errors.push("password doesn't match!");
      }

      if (errors.length > 0) {
        return res.status(422).json({ message: errors });
      } else {
        const { email } = await verify(token, process.env.TOKEN_KEY);
        const hashPassword = await bcrypt.hash(password, 10);
        await db();
        await User.findOneAndUpdate(
          { email, token },
          { password: hashPassword, token: "" }
        );
        return res.status(200).json({
          success: 1,
          message: "Success",
        });
      }
    } catch (err) {
      return res.status(500).json({ message: "Something went wrong!", err });
    }
  } else {
    return res.status(404).json({ message: "Only POST request is allowed." });
  }
};
