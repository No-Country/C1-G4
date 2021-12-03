import mongoose, { Schema } from "mongoose";

const specialitySchema = new Schema ({
  name: {
    type: String,
    required: true,
    unique: true
  },
  state: {
    type: Number,
    default: 1
  }
});

const Speciality = mongoose.model("speciality", specialitySchema);

export default Speciality;
