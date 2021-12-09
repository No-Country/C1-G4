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
  query: async (req, res, next) => {
    try {
      const reg = await models.User.findById(
        { _id: req.query._id }
      );
      if (!reg) {
        res.status(404).send({
          message: "Usuario no encontrado"
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar buscar un usuario"
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await models.User.findByIdAndUpdate(
        { _id: req.body._id },
        { username: req.body.username,
          name: req.body.name,
          lastname: req.body.lastname,
          email: req.body.email,
          rol: req.body.rol }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar actualizar usuario",
      });
      next(e);
    }
  },
  changePassword: async (req, res, next) => {
    //TODO metodo para cambiar de contraseña
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
  remove: async (req, res, next) => {
    try {
      const reg = await models.User.findByIdAndDelete({
        _id: req.body._id,
      });
      if (!reg) {
        res.status(404).send({ message: "Usuario no encontrado" });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Error al intentar eliminar usuario",
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
