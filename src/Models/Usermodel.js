const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

var UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      trim: true,
    },
  },
  { timestamps: true }
);

exports.UserModel = mongoose.models.user || mongoose.model('user', UserSchema);