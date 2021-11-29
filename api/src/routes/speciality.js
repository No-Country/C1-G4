import routerx from "express-promise-router";
import spcecialityController from "./../controllers/SpecialityController";

const router = routerx();

router.post("/add", spcecialityController.add);

router.get("/list", spcecialityController.list);

export default router;
