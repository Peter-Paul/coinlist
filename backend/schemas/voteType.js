const Joi = require('joi')
const {coinSchema} =  require("./coinType.js")
const {gameSchema} =  require("./gameType.js")

const voteSchema = Joi.object({
    address: Joi.string().required(),
    coin: Joi.string().required(),
    time: Joi.string().required(),
    coinData: coinSchema
})

const gameVoteSchema = Joi.object({
    address: Joi.string().required(),
    game: Joi.string().required(),
    time: Joi.string().required(),
    gameData: gameSchema
})


module.exports = {voteSchema,gameVoteSchema}