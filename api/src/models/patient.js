import mongoose, { Schema, SchemaTypes } from "mongoose";

const patientSchema = new Schema({
    name: {
      type:String,
      maxlength: 50,
      required: true,
    },
    
    lastName: {
      type:String,
      maxlength: 50,
      required: true,
    },
    
    gender: {
      type: String,
      max: 1
    },
    
    email: {
      type:String,
      max: 50,
      required:true
    },
    
    phone: {
      type:String,
      max: 50,
      required:true
    },
    
    status: {
      type:Number,
      default:1 
    },
    
    is_vip: {
      type:Number,
    },

    create_at: {
      type: Date,
      default: Date.now
    },
 })

 const Patient = mongoose.model('patient', patientSchema)

 export default Patient;