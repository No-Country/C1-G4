import routerx from "express-promise-router";
import userController from "./../controllers/UserController";
import auth from "./../middlewares/auth";

const router = routerx();

router.post("/add", auth.verifyAdministrador, userController.add);

router.get("/list", auth.verifyAdministrador, userController.list);

router.put("/update", auth.verifyAdministrador, userController.update);

router.put("/activate", auth.verifyAdministrador, userController.activate);

router.put("/deactivate", auth.verifyAdministrador, userController.deactivate);

router.post("/login", userController.login);

export default router;
