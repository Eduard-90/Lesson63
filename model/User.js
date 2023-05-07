import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  status: String,
  link: String,
});

const User = mongoose.model("users", userSchema);

export { User };
