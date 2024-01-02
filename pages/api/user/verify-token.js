const { verify } = require("jsonwebtoken");
const User = require("../../../models/user");

export default (req, res) => {
  if (req.method === "POST") {
    const token=req.body.token;
    if (token) {
      verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            expired: true,
            message: "token expired or Invalid token",
            err: err.message,
          });
        } else {
          User.findById(decoded.id,'userName profile email').exec((error, user) => {
            if (user) {
              return res.status(200).json({
                token: token,
                verified: true,
                user
              });
            } else {
              return res.status(500).send({ data: error,decoded,user });
            }
          });
        }
      });
    } else {
      return res.status(404).json({message:"token not found"});
    }
  }
};
