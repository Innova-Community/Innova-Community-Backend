const errorResponse = (status, code, message, additional) => {
    return {
        status,
        error: { code, message, additional }
    }
}

const successResponse = (status, message, data) => {
    return {
        status, message, data
    }
}

const Status = {
    Success: "success",
    Failed: "failed",
}

module.exports = { errorResponse, successResponse, Status }