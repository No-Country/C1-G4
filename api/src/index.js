import express from "express";
import conexion from "./conexion";
import enableCors from "./middlewares/cors";
import router from "./routes/routes";

//Puerto declarado en el entorno o puerto 3000
const PORT = process.env.PORT || 3000;

conexion();

const app = express();

//Habilitar cors mediante middleware exportado desde el directorio "middlewares"
enableCors( app );

//Habilitar json, urlencoded y rutas de archivos estaticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./../public"));

//Rutas del api
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server on port", 3000);
});
