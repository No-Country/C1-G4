import routerx from "express-promise-router";
import specialityRouter from "./speciality";
import userRouter from "./user";

const router = routerx();

router.use("/speciality", specialityRouter);
router.use("/user", userRouter);

export default router;
