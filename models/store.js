const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    site:{type:mongoose.Schema.Types.ObjectId,ref:"Site"},
    name: { type: String, required: true },
    slug: { type: String, required: true },
    short_description: { type: String },
    focus_keywords: { type: String },
    left_description: { type: String },
    bottom_description: { type: String },
    url: { type: String, trim: true},
    cashback: { type: String },
    logo: { type: String},
    offer_image: { type: String},
    color: { type: String},
    heading_title: { type: String},
    meta_title: { type: String},
    meta_description: { type: String},
    meta_keywords: { type: String},
    additional_class: { type: String},
    tags: { type: Array },
    user_rating: { type: Number },
    num_of_vote: { type: Number},
    color: { type: String },
    aff_source:{type:String},
    aff_store_id:{type:Number},
    location:{type: mongoose.Schema.Types.ObjectId, ref:'Location'},
    status:{type:String,default:"active"}
}, { "timestamps":true,"collection": "storesNew" });

const Store = (mongoose.models && mongoose.models.Store) || mongoose.model("Store", storeSchema);

module.exports = Store;