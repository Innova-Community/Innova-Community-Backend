require('dotenv').config()

const command = process.argv[2]

let PORT = process.env.LOCAL_PORT || 8000
let BASE_URL = process.env.LOCAL_BASE_URL + ":" + PORT

if (command === "local") {
    PORT = process.env.LOCAL_PORT || 8000
    BASE_URL = process.env.LOCAL_BASE_URL + ":" + PORT
} else if (command === "development") {
    PORT = process.env.DEVELOPMENT_PORT || 8000
    BASE_URL = process.env.DEVELOPMENT_BASE_URL + ":" + PORT
} else if (command === "production") {
    PORT = process.env.PRODUCTION_PORT || 8000
    BASE_URL = process.env.PRODUCTION_BASE_URL + ":" + PORT
}

module.exports = {
    PORT,
    BASE_URL
}