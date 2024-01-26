const fs = require('fs')
const path = require('path')

const apilocationDataPath = '../helpers/apilocation'

const locationsModel = {
    getProvinces() {
        const filePath = path.join(__dirname, `${apilocationDataPath}/provinces.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },

    getProvince(provinceId) {
        const filePath = path.join(__dirname, `${apilocationDataPath}/province/${provinceId}.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },

    getRegencies(provinceId) {
        const filePath = path.join(__dirname, `${apilocationDataPath}/regencies/${provinceId}.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },

    getRegency(regencyId) {
        const filePath = path.join(__dirname, `${apilocationDataPath}/regency/${regencyId}.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },

    getDistricts(regencyId) {
        const filePath = path.join(__dirname, `${apilocationDataPath}/districts/${regencyId}.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },

    getDistrict(districtId) {
        const filePath = path.join(__dirname, `${apilocationDataPath}/district/${districtId}.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },

    getVillages(districtId) {
        const filePath = path.join(__dirname, `${apilocationDataPath}/villages/${districtId}.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },

    getVillage(villageId) {
        const filePath = path.join(__dirname, `${apilocationDataPath}/village/${villageId}.json`)
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data)
    },
}

module.exports = locationsModel