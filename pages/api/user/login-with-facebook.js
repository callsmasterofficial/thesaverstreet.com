const User = require("../../../models/user");
const db = require("../../../config/db");
const { sign } = require("jsonwebtoken");
import axios from "axios";
const { hash } = require("bcrypt");

const site = process.env.siteId;
export default async (req, res) => {
  if (req.method === "POST") {
    await db();
    const { userID, accessToken } = req.body;
    const urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,first_name,last_name,email&access_token=${accessToken}`;
    axios
      .get(urlGraphFacebook)
      .then((response) => {
        const { first_name, last_name, email } = response.data;
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            res.status(400).json({
              message: "Something went wrong.",
            });
          } else if (user) {
            user.password = undefined;
            const token = sign({ id: user._id }, process.env.TOKEN_KEY, {
              expiresIn: "7d",
            });

            res.status(200).json({
              message: "login successfull",
              token: token,
            });
          } else {
            hash(`${email}The Saver Street`, 10, (err, hash) => {
              if (hash) {
                const user = new User({
                  userName: first_name + " " + last_name,
                  email: email,
                  password: hash,
                  isVerified: true,
                });
                user
                  .save()
                  .then((user) => {
                    user.password = undefined;
                    const token = sign({ user }, process.env.TOKEN_KEY, {
                      expiresIn: "7d",
                    });

                    res.status(200).json({
                      message: "Sign up successfull",
                      token: token,
                    });
                  })
                  .catch((error) => {
                    res.status(500).json({
                      error: error,
                    });
                  });
              }
            });
          }
        });
      })
      .catch((err) => {});
  }
};
