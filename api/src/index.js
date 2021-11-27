import express from "express";
import conexion from "./conexion";
import enableCors from "./middlewares/cors";

//Puerto declarado en el entorno o puerto 3000
const PORT = process.env.PORT || 3000;

conexion();

const app = express();

//Habilitar cors mediante middleware exportado desde el directorio "middlewares"
enableCors( app );

app.listen(PORT, () => {
  console.log("Server on port", 3000);
});
