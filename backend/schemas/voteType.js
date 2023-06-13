const Joi = require('joi')
const {coinSchema} =  require("./coinType.js")

const voteSchema = Joi.object({
    address: Joi.string().required(),
    coin: Joi.string().required(),
    time: Joi.string().required(),
    coinData: coinSchema
})

module.exports = {voteSchema}