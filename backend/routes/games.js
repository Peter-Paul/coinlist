const express = require("express")
let router = express.Router()
const db = require("../db/index.js") 
const { gameSchema } = require("../schemas/gameType.js")
const database = new db.Database()
const table = "games"

const validPayload = (req,res,next) => { // middleware checking payload
    const {error} = gameSchema.validate(req.body)
    if(error){
        console.log(error)
        res.status(400).json({error})
        return
    }

    next()
}

router.get('/games/', async (req,res) => {
    try{
        let response = await database.getAll(table)
        const modResponse = response.map( ({ GameData }) => { return { ...JSON.parse(GameData) }} )
        res.status(200).json(modResponse)
    }catch(err){
        res.status(500).json({err})
    }
})

router.post('/games/', validPayload, async (req,res) => {
    try{
        const data = req.body
        let response = await database.addRow(table, data)
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({err})
    }
})

router.patch('/games/:address', validPayload, async (req,res) => {
    try{
        let address = req.params.address
        const data = req.body
        await database.updateRow(table,address,data)
        res.status(200).json({status:200})
    }catch(err){
        res.status(500).json({err})
    }
})

router.delete('/games/:address', async (req,res) => {
    try{
        let address = req.params.address
        await database.deleteRow(table,address)
        res.status(200).json({status:200})
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router