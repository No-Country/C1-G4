import models from "../models/models";

export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.User.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: "Eror ar intentar agregar especialidad",
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
                message: "Eror ar intentar listar las especialidades",
            });
            next(e);
        }
    },
    update: async (req, res, next) => {
        try {
            const reg = await models.User.findByIdAndUpdate(
                { _id: req.body._id },
                { name: req.body.name }
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
                { state: 1 }
            );
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: "Error al intentar activar usuario",
            });
            next(e);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.User.findByIdAndUpdate(
                { _id: req.body._id },
                { state: 0 }
            );
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: "Error al intentar desactivar usuario",
            });
            next(e);
        }

    }
};
