import { sign } from "jsonwebtoken";
import db from "../../../config/db";
import User from "../../../models/user";
const bcrypt = require("bcrypt");


export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const errors = [];
      let emailRegex = /^([a-zA-Z0-9._-]+)\@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/;
      if (!email || !password) {
        errors.push("Please enter email and password.");
      }
      if (!emailRegex.test(email)) {
        errors.push("Please enter valid email.");
      }
      if (password?.length === 0) {
        errors.push("Password is required.");
      }

      if (errors.length > 0) {
        return res
          .status(422)
          .json({ message: "validation error", error: errors });
      } else {
        await db();
        const user = await User.findOne({
          email: email,
        });
        if (user) {
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            const token = sign(
              { id: user._id },
              process.env.TOKEN_KEY,{expiresIn:'7d'}
            );
            return res.status(200).json({
              token: token,
            });
          }
          res.status(401).json({ message: "Credential doesn't match" });
        } else {
          res.status(404).json({ message: "please register first!" });
        }
      }
    } catch (err) {
      res.status(500).json({ message: "server error", err });
    }
  } else {
    res.status(404).json({ message: "Only POST request is allowed." });
  }
};
