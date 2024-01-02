const mongoose = require("mongoose");

const componentSchema = mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    site: { type: mongoose.Schema.Types.ObjectId, ref: "Site", required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    contents: { type: Object },
    tags: { type: Array },
    status: { type: String, default: "active" },
  },
  { timestamps: true, collection: "component" }
);

const Component =
  (mongoose.models && mongoose.models.Component) ||
  mongoose.model("Component", componentSchema);

module.exports = Component;
