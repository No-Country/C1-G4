import models from "../models/models";

export default {
  add: async (req, res, next) => {
    try {
      const reg = await models.Medic.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar agregar medico",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await models.Medic.find()
        .populate("speciality", { name: 1 }) 
        .sort({ created_at: -1 });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar listar los medicos",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const reg = await models.Medic.findOneById({ _id: req.query._id });
      if (!reg) {
        res.status(404).send({
          message: "Medico no encontrado",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar buscar medico",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await models.Medic.findByIdAndUpdate(
        {
          _id: req.body._id,
        },
        {
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          phone: req.body.phone,
        }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar buscar medico",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const reg = await models.Medic.findByIdAndDelete({
        _id: req.body._id,
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error al intentar eliminar medico",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await models.Medic.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 1 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar activar medico",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const reg = await models.Medic.findByIdAndUpdate(
        { _id: req.body._id },
        { state: 0 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Eror al intentar desactivar medico",
      });
      next(e);
    }
  },
};
