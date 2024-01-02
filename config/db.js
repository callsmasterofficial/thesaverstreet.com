const mongoose = require("mongoose");

module.exports = function () {
  return new Promise((resolve, reject) => {
    if (mongoose.connection.readyState === 1) {
      return resolve();
    }
    mongoose.connect(
      `mongodb+srv://root:7549499597@cluster0.2zzsa.mongodb.net/netrockdeals?retryWrites=true&w=majority`
    );

    mongoose.connection.on("connected", () => {
      resolve();
    });

    mongoose.connection.on("error", (err) => {
      reject();
    });
  });
};
