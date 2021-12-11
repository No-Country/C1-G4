import routerx from "express-promise-router";
import userController from "./../controllers/UserController";
//import auth from "./../middlewares/auth";

const router = routerx();

router.post("/add", userController.add);

router.get("/list", userController.list);

router.get("/query", userController.query);

router.put("/update", userController.update);

router.put("/activate", userController.activate);

router.put("/deactivate", userController.deactivate);

router.delete("/remove", userController.remove);

router.post("/login", userController.login);

export default router;
