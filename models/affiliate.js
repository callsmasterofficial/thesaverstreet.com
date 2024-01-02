const mongoose = require("mongoose");

const affiliateSchema = mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    site: { type: mongoose.Schema.Types.ObjectId, ref: "Site", required: true },
    name: { type: String, required: true },
    token: { type: String },
    publisher_id: { type: String },
    client_id: { type: String },
    scret_key: { type: String },
    last_updated: { type: String },
  },
  { timestamps: true, collection: "affCredential" }
);

const AffCredential =
  (mongoose.models && mongoose.models.AffCredential) ||
  mongoose.model("AffCredential", affiliateSchema);

module.exports = AffCredential;
