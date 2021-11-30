import routerx from "express-promise-router";
import medicController from "../controllers/MedicController";

const router = routerx();

router.post("/add", medicController.add);

router.get("/query", medicController.query);

router.get("/list", medicController.list);

router.put("/update", medicController.update);

router.delete("/remove", medicController.remove);

router.put("/activate", medicController.activate);

router.put("/deactivate", medicController.deactivate);

export default router;
