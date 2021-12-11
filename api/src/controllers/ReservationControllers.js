import models from "../models/models";

export default {
  // creando reservación  
  createReservation: async (req, res, next) => {
    try {
      const reservation = await models.Reservation.create(req.body);
      res.status(200).json(reservation);
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar agregar reservación",
      });
      
      next(e);
    }
  },
  
  // obtener todas la reservaciones creadas
  getlistReservation: async (req, res, next) => {
    try {
      const reservation = await models.Reservation.find();
      res.status(200).json(reservation);
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar listar las reservaciónes",
      });
      
      next(e);
    }
  },
  
  updateReservation: async (req, res, next) => {
    try {
      const reservation = await models.Reservation.findByIdAndUpdate(
        { _id: req.body._id },
        { name: req.body.name }
      );
      res.status(200).json({ reservation });
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar actualizar reservación",
      });
      
      next(e);
    }
  },
  
  removeReservation: async (req, res, next) => {
    try {
      // obteniendo reservación  
      const reservation = await models.Reservation.findByIdAndDelete({
        _id: req.body._id
      });
     
      res.status(200).json({ reservation });
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar eliminar reservación",
      });
      
      next(e);
    }
  },
  
  activateReservation: async (req, res, next) => {
    try {
      const reg = await models.Reservation.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 }
      );
      
      res.status(200).json(reg);
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar activar reservación",
      });
      next(e);
    }
  },
  
  desactivateReservation: async (req, res, next) => {
    try {
      const reservation = await models.Reservation.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 }
      );
      
      res.status(200).json({ reservation });
    } catch (e) {
      
      res.status(500).send({
        message: "Error al intentar desactivar reservación",
      });
      next(e);
    }

  }
};
