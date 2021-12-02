import routerx from "express-promise-router";
import specialityRouter from "./speciality";
import medicRouter from "./medic";
import reservationRouter from "./reservation";

const router = routerx();

router.use("/speciality", specialityRouter);

router.use("/medic", medicRouter);

// rutas de reservación
router.use("/reservation", reservationRouter);

export default router;
