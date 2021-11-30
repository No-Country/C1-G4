import routerx from "express-promise-router";
import userController from "./../controllers/userController";

const router = routerx();

router.post("/add", userController.add);

router.get("/list", userController.list);

export default router;
