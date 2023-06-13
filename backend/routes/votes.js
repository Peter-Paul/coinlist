const express = require("express")
let router = express.Router()
const db = require("../db/index.js") 
const { voteSchema } = require("../schemas/voteType.js")
const database = new db.Database()
const table = "votes"

router.get('/votes/', async (req,res) => {
    try{
        let response = await database.getAll(table)
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err})
    }
})

router.post('/votes/', async (req,res) => {
    try{
        const data = req.body
        const {error} = voteSchema.validate(data)
        if(error){
            res.status(400).json({error})
            return
        }
        const {coinData,...vote} = data
        const {coin} = vote
        const coinTable = "coins"
        await database.updateRow(coinTable,coin,coinData)
        let response = await database.addRow(table, vote)
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router