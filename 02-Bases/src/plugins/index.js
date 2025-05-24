//Barrel file

const {getUUID} = require("../plugins/get-id.plugin")
const {getAge} = require("../plugins/get-age.plugin")
const { http } = require("../plugins/http-client")

module.exports = {
    getUUID,
    getAge,
    http,
}