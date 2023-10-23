const { home: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    create: async(req, res, _next) => {
        const data = req.body

        const {status, result} = await service.create(data);
        return res.status(status).json(result);
    },
};