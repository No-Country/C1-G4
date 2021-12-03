import models from "../models/models";

export default {
  // creando paciente   
  createPatient: async (req, res, next) => {
    try {
      const patient = await models.Patient.create(req.body);
      res.status(200).json({ patient });
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar agregar el paciente",
      });
      
      next(e);
    }
  },
  
  // obtener todos los pacientes
  getlistPatient: async (req, res, next) => {
    try {
      const patient = await models.Patient.find();
      res.status(200).json(patient);
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar listar los pacientes",
      });
      
      next(e);
    }
  },
  
  updatePatient: async (req, res, next) => {
    try {
      const patient = await models.Patient.findByIdAndUpdate(
        { _id: req.body._id },
        { name: req.body.name }
      );
      res.status(200).json({ patient });
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar actualizar el paciente",
      });
      
      next(e);
    }
  },
  
  removePatient: async (req, res, next) => {
    try {
      // obteniendo paciente  
      const patient = await models.Patient.findByIdAndDelete({
        _id: req.body._id
      });
     
      res.status(200).json({ patient });
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar eliminar el paciente",
      });
      
      next(e);
    }
  },
  
  activatePatient: async (req, res, next) => {
    try {
      const patient = await models.Patient.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 }
      );
      
      res.status(200).json(patient);
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar activar el paciente",
      });
      next(e);
    }
  },
  
  desactivatePatient: async (req, res, next) => {
    try {
      const patient = await models.Patient.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 }
      );
      
      res.status(200).json({ patient });
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar desactivar el paciente",
      });
      next(e);
    }
  }
};
