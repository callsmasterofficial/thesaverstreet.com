const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, default: "" },
    isVerified: { type: Boolean, default: false },
    profile:{type:String}
  },
  { timestamps: true, collection: "newcollection" }
);
const User =
  (mongoose.models && mongoose.models.User) ||
  mongoose.model("User", userSchema);

module.exports = User;
