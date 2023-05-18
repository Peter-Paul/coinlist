const express = require("express")
let router = express.Router()
const db = require("../db/index.js") 
const database = new db.Database()
const table = "votes"

router.get('/', async (req,res) => {
    try{
        let response = await database.getAll(table)
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err})
    }
})

router.post('/', async (req,res) => {
    try{
        const data = req.body
        let response = await database.addRow(table, data)
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router