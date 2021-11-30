import routerx from "express-promise-router";
import specialityRouter from "./speciality";
import medicRouter from "./medic";

const router = routerx();

router.use("/speciality", specialityRouter);

router.use("/medic", medicRouter);

export default router;
