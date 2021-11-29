import models from "../models/models";

export default {
  add: async (req, res, next) => {
    try {
      const reg = await models.Speciality.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar agregar especialidad",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await models.Speciality.find();
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar listar las especialidades",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await models.Speciality.findByIdAndUpdate(
        { _id: req.body._id },
        { name: req.body.name }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar actualizar especialidad",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const reg = await models.Speciality.findByIdAndDelete({
        _id: req.body._id
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar eliminar especialidad",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await models.Speciality.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar activar especialidad",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const reg = await models.Speciality.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar desactivar especialidad",
      });
      next(e);
    }

  }
};
