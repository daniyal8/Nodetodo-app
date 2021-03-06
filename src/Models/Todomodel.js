const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

var TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);


exports.TodoModel = mongoose.models.todo || mongoose.model("todo", TodoSchema);