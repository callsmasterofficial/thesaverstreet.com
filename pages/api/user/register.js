import { sign } from "jsonwebtoken";
import db from "../../../config/db";
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
import User from "../../../models/user";

export default async function (req, res) {
  if (req.method === "POST") {
    try {
      const errors = [];
      const { userName, email, password, confirmPassword } = req.body;
      let emailRegex = /^([a-zA-Z0-9._-]+)\@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/;
      let userNameRegex = /^[a-zA-Z]([a-zA-Z0-9]+)$/;

      if (!userName || !email || !password || !confirmPassword) {
        errors.push("Please enter all credentials.");
      }
      if (!userNameRegex.test(userName)) {
        errors.push("Please enter valid username.");
      }
      if (!emailRegex.test(email)) {
        errors.push("Please enter valid email.");
      }
      if (password?.length === 0) {
        errors.push("Password is required.");
      }
      if (confirmPassword?.length === 0) {
        errors.push("Confirm password is required.");
      }

      if (errors.length > 0) {
        return res.status(422).json({ message: errors });
      } else {
        await db();
        const body = req.body;
        const result = await User.findOne({ email: body.email });
        if (result) {
          return res.status(401).json({
            success: 0,
            message: "User already exist. Please enter another email.",
          });
        } else {
          const hashPassword = await bcrypt.hash(body.password, 10);
          const token = await sign({ _id: email }, process.env.TOKEN_KEY, {
            expiresIn: 1800,
          });
          const user = new User({
            ...req.body,
            password: hashPassword,
            token: token,
          });

          user.save((saveErr, user) => {
            if (user) {
              const transporter = nodemailer.createTransport({
                // service: 'gmail',
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                  user: "anoj.callsmaster@gmail.com",
                  pass: "new$@3434",
                },
              });

              const mailOptions = {
                from: "anoj.callsmaster@gmail.com",
                to: user.email,
                subject: "Deal2Coupon! Account Verification Email",
                html: `<!DOCTYPE html>
                      <html>
                      <head>
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                      <style>
                      .emailContainer {
                        text-align: center;
                        padding: 10px 16px;
                      }

                      .emailbodyContainer {
                        display: inline-block;
                        border: 1px solid #0156a4;
                        text-align: center;
                      }
                      
                      .emailHeader {
                        background-color: #0156a4;
                      }
                      
                      .emailBody {
                        padding: 16px 10px;
                      }
                      
                      .emailVerifyButton {
                        padding: 10px 16px;
                        background-color: #0156a4;
                        border: 1px solid #0156a4;
                        border-radius: 4px;
                        cursor: pointer;
                        color: white !important;
                        text-decoration: none;
                      }
                      </style>
                      </head>
                      <body>
                      <div class="emailContainer">
                      <div class="emailbodyContainer">
                      <div class="emailHeader">
                        <img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/128/envelope-icon.png" alt="error" />
                      </div>
                      <div class="emailBody">
                      <h3 class="emailTitle">Email Confirmation</h3>
                      <p class="EmailText"> <strong>Hello ${user.userName}</strong>,
                      <br>
                      please verify your email by clicking the button given below! 
                      </p>
                        <a href="${process.env.BASE_URL}/verify-email/${user.token}" class="emailVerifyButton">Verify email address</a>
                      </div>
                      </div>
                      </div>
                    </body>
                    </html>
                      `,
              };
              transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                  return res.status(500).json({
                    message: "try login and verify your email address.",
                  });
                } else {
                  return res.status(202).json({
                    message: `registration successfull. Please check your mail and verify.`,
                    success: 1,
                  });
                }
              });
            } else {
              return res.status(401).json({
                success: 0,
                message: "Something went wrong while registration.",
                err: saveErr,
              });
            }
          });
        }
      }
    } catch (err) {
      return res.status(500).json({ message: "internal server error", err });
    }
  } else {
    return res.status(404).json({ message: "Only POST request is allowed." });
  }
};
