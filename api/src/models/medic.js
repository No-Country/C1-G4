import mongoose, { Schema } from "mongoose";

const medicSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  lastname: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    maxlength: 155,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    maxlength: 100,
    required: true,
    unique: true
  },
  state: {
    type: Number,
    default: 1
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  speciality: {
    type: Schema.ObjectId, 
    ref: 'speciality',
    required: true
  }
});

const Medic = mongoose.model("medic", medicSchema);

export default Medic;
