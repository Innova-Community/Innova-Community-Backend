const locationsModel = require('../models/locations')
const { successResponse, Status, errorResponse } = require('../utils/baseResponse')

const locationsController = {
    async getProvinces(req, res) {
        try {
            const jsonData = await locationsModel.getProvinces()
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get list of provinces successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },

    async getProvince(req, res) {
        try {
            const { id } = req.params
            const jsonData = await locationsModel.getProvince(id)
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get province by id successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },

    async getRegencies(req, res) {
        try {
            const { id } = req.params
            const jsonData = await locationsModel.getRegencies(id)
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get list of regencies successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },

    async getRegency(req, res) {
        try {
            const { id } = req.params
            const jsonData = await locationsModel.getRegency(id)
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get regency by id successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },

    async getDistricts(req, res) {
        try {
            const { id } = req.params
            const jsonData = await locationsModel.getDistricts(id)
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get list of districts successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },

    async getDistrict(req, res) {
        try {
            const { id } = req.params
            const jsonData = await locationsModel.getDistrict(id)
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get district by id successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },

    async getVillages(req, res) {
        try {
            const { id } = req.params
            const jsonData = await locationsModel.getVillages(id)
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get list of villages successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },

    async getVillage(req, res) {
        try {
            const { id } = req.params
            const jsonData = await locationsModel.getVillage(id)
            res.status(200).json(
                successResponse(
                    status = Status.Success,
                    message = "Get village by id successfully",
                    data = jsonData
                )
            )
        } catch (error) {
            res.status(500).json(
                errorResponse(
                    status = Status.Failed,
                    code = 500,
                    message = error.message
                )
            )
        }
    },
}

module.exports = locationsController