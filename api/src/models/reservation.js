import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema({ 
    create_at: {
      type: Date,
      default: Date.now
    },
    date: {
      type: Date,
      required: true
    },
    state: {
      type:Number,
      default:1 
    },
    price: {
      type:Number
    },
    user: {
      type: Schema.ObjectId,
      ref:'user',
      required:true
    },    
    medic: {
      type: Schema.ObjectId,
      ref: 'medic',
      required: true
    },
    paymethod: {
      type:Number
    }
 });

 const Reservation = mongoose.model('reservation', reservationSchema)

 export default Reservation;
