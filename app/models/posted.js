const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

const postedSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    message: { type: String, required: true },
    seen: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

postedSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Posted", postedSchema);
