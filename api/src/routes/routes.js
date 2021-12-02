import routerx from "express-promise-router";
import specialityRouter from "./speciality";
import medicRouter from "./medic";
import userRouter from "./user";

const router = routerx();

router.use("/speciality", specialityRouter);
router.use("/user", userRouter);
router.use("/medic", medicRouter);

export default router;
