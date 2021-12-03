import mongoose, { Schema, SchemaTypes } from "mongoose";

const reservationSchema = new Schema({
    title: {
      type:String,
      maxlength: 100,
      required: true,
      unique
    },

    create_at: {
      type: Date,
      default: Date.now
    },
    
    date: {
      type: Date,
      default: Date
    },

    status: {
      type:Number,
      default:1 
    },
    
    price: {
      type:Number, 
      default:0
    },

    user: {
      type:Schema.Types.ObjectId,
      ref:'User',
      required:true
    },
    
    id_medic: {
      type:Schema.Types.ObjectId,
      ref:'Medic',
      required:true
    },
    
    id_patient: {
      type:Schema.Types.ObjectId,
      ref:'Patient',
      required:true
    },

    paymethod: {
      type:Number
    }
 })

 const Reservation = mongoose.model('reservation', reservationSchema)

 export default Reservation;