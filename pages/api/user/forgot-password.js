import { sign } from "jsonwebtoken";
import db from "../../../config/db";
const nodemailer = require("nodemailer");
import User from "../../../models/user";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      let emailRegex = /^([a-zA-Z0-9._-]+)\@([a-zA-Z]+)\.([a-zA-Z]){2,6}$/;

      if (!emailRegex.test(email)) {
        return res.status(422).json({ message: "Please enter valid email." });
      } else {
        await db();
        const body = req.body;
        const token = await sign({ email: email }, process.env.TOKEN_KEY, {
          expiresIn: 1800,
        });
        const result = await User.findOneAndUpdate({ email: body.email }, {token: token});
        if (result) {
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
                to: email,
                subject: "Deal2Coupon! mail for reset password",
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
                          <p class="EmailText">
                          Please click the button given below to reset your password! 
                          </p>
                            <a href="${process.env.BASE_URL}/update-password/${token}" class="emailVerifyButton">Verify email</a>
                          </div>
                          </div>
                          </div>
                        </body>
                        </html>
                          `,
              };

              transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                  return res.status(304).json({
                    message: "Error Occured",
                  });
                } else {
                  return res.status(200).json({
                    message: `Please check your mail and verify.`,
                    success: 1,
                  });
                }
              });
            }else{
              return res.status(404).json({message: "User don't exist."})
            }
        }
    } catch (err) {
      return res.status(500).json({ message: "internal server error", err });
    }
  } else {
    return res.status(404).json({ message: "Only POST request is allowed." });
  }
};
