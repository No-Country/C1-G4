import express from "express";
import conexion from "./conexion";
import router from "./routes/routes";
import enableCors from "./middlewares/cors";

//Puerto declarado en el entorno o puerto 5000
const PORT = process.env.PORT || 5000;

conexion();

const app = express();

//Habilitar cors 
enableCors(app);

//Habilitar json, urlencoded y rutas de archivos estaticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./../public"));

//Rutas del api
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server on port", 5000);
});
