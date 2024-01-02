const mongoose = require('mongoose');

const couponSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId,auto:true},
    site: {type: mongoose.Schema.Types.ObjectId,ref:'Site', required: true},
    title: { type: String, required: true },
    badge_text: { type: String},
    image: { type: String },
    description: { type: String },
    type: { type: String, required: true },
    regular_price: { type: String },
    sale_price: { type: String },
    code: { type: String },
    url: { type: String},
    start_date: { type: Date, required: true },
    valid_till: { type: Date, required: true },
    verified_on: { type: Date, required: true },
    priority: { type: Number },
    cat: { type: Array, required: true },
    store: {type: mongoose.Schema.Types.ObjectId,ref:'Store', required: true},
    location: {type: mongoose.Schema.Types.ObjectId,ref:'Location'},
    num_of_clicks: { type: Number, default: 0 },
    num_of_likes: { type: Number, default: 0 },
    status: { type: String, default: "publish" },
    comment_status: { type: String, default: "close" },
    tags: { type: Array },
    additional_class: { type: String },
}, { "collection": "couponsNew","timestamps":true })

const Coupon = (mongoose.models && mongoose.models.Coupon) || mongoose.model("Coupon", couponSchema);

module.exports = Coupon;