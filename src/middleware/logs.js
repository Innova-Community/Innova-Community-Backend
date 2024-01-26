const logRequest = (req, res, next) => {
    console.log('There is action for PATH: ', req.path)
    next()
}

module.exports = logRequest