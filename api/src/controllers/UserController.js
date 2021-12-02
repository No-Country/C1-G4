import models from "../models/models";
import bcrypt from "bcryptjs";
import token from "./../services/token";

export default {
  add: async (req, res, next) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const reg = await models.User.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar agregar el Usuario",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await models.User.find();
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar listar los Usuarios",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await models.User.findByIdAndUpdate(
        { _id: req.body._id },
        { username: req.body.username },
        { name: req.body.name },
        { lastname: req.body.lastname },
        { email: req.body.email },
        { password: req.body.password },
        { rol: req.body.rol },
        { created_at: req.body.created_at }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar actualizar usuario",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await models.User.findByIdAndUpdate(
        { _id: req.body._id },
        { status: 1 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar cargar administrador",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const reg = await models.User.findByIdAndUpdate(
        { _id: req.body._id },
        { status: 0 }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al cargar administrador",
      });
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      let user = await models.User.findOne({
        email: req.body.email,
        status: 1,
      });
      if (user) {
        let match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
          let tokenReturn = await token.encode(user._id, user.rol, user.email);
          res.status(200).json({ user, tokenReturn });
        } else {
          res.status(404).send({
            message: "Password incorrecto",
          });
        }
      } else {
        res.status(404).send({
          message: "No existe el usuario",
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Error al cargar Usuario",
      });
      next(e);
    }
  },
};

