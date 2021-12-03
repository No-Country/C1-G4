import routerx from "express-promise-router";
import patientController from "./../controllers/PatientControllers";

const router = routerx();

router.post("/add", patientController.createPatient);

router.get("/list", patientController.getlistPatient);

router.put("/update", patientController.updatePatient);

router.delete("/remove", patientController.removePatient);

router.put("/activate", patientController.activatePatient);

router.put("/deactivate", patientController.desactivatePatient);

export default router;
