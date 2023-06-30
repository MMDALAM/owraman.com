const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: 0 },
  },
  { timestamps: true }
);

userSchema.methods.hashPassword = (password) => {
  let salt = bcrypt.genSaltSync(15);
  let hash = bcrypt.hashSync(password, salt);

  return hash;
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
