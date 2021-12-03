import routerx from "express-promise-router";
import reservationController from "./../controllers/ReservationControllers";

const router = routerx();

router.post("/add", reservationController.createReservation);

router.get("/list", reservationController.getlistReservation);

router.put("/update", reservationController.updateReservation);

router.delete("/remove", reservationController.removeReservation);

router.put("/activate", reservationController.activateReservation);

router.put("/deactivate", reservationController.desactivateReservation);

export default router;
