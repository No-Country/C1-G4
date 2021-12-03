import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conexion = () => {
  const DB_URL = process.env.DB_URL;

  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(mongoose => console.log("Conectado a la BD"))
    .catch(console.log);
}

export default conexion;

