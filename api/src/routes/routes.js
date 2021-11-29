import routerx from "express-promise-router";
import specialityRouter from "./speciality";

const router = routerx();

router.use("/speciality", specialityRouter);

export default router;
