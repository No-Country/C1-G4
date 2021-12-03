import routerx from "express-promise-router";

import specialityRouter from "./speciality";
import medicRouter from "./medic";
import userRouter from "./user";
import reservationRouter from "./reservation";
import patientRouter from "./patient";


const router = routerx();

router.use("/speciality", specialityRouter);
router.use("/user", userRouter);
router.use("/medic", medicRouter);
router.use("/patient", patientRouter);
router.use("/reservation", reservationRouter);

export default router;
