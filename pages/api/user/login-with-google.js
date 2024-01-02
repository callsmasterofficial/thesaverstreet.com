const User = require("../../../models/user");
const db = require("../../../config/db");
const { sign } = require("jsonwebtoken");
const { hash } = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
 process.env.GOOGLE_AUTH_CLIENTID
);

// const site = process.env.siteId;
export default async (req, res) => {
  if (req.method === "POST") {
    await db();
    const idToken = req.body.tokenId;
    client
      .verifyIdToken({
        idToken: idToken,
        audience:
        process.env.GOOGLE_AUTH_CLIENTID,
      })
      .then((response) => {
        const { email_verified, given_name, family_name, picture, email } =
          response.payload;
        if (email_verified) {
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
             
              res.send({
                message: "login successfull",
                token: token,
              });
            } else {
              hash(`${email}Deal2Coupon`, 10, (err, hash) => {
                if (hash) {
                  const user = new User({
                    userName: given_name +" "+family_name,
                    email: email,
                    password: hash,
                    profile: picture,
                    isVerified: true,
                  });
                  user
                    .save()
                    .then((user) => {
                      const token = sign(
                        { id: user._id },
                        process.env.TOKEN_KEY,
                        {
                          expiresIn: "7d",
                        }
                      );
                      // res.setHeader(
                      // 
                      res.send({
                        message: "sign up successfull",
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
        }
      })
      .catch((err) => {
        res.send({ message: "Something went wrong.", err });
      });
  }
};
