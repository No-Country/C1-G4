import routerx from "express-promise-router";
import spcecialityController from "./../controllers/SpecialityController";

const router = routerx();

router.post("/add", spcecialityController.add);

router.get("/list", spcecialityController.list);

router.get("/get", spcecialityController.getById);

router.put("/update", spcecialityController.update);

router.delete("/remove", spcecialityController.remove);

router.put("/activate", spcecialityController.activate);

router.put("/deactivate", spcecialityController.deactivate);

export default router;
