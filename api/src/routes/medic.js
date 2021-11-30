import routerx from "express-promise-router";
import medicController from "../controllers/MedicController";

const router = routerx();

router.post("/add", medicController.add);

router.get("/query", medicController.query);

router.get("/list", medicController.list);

export default router;
