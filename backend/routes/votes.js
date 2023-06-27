const express = require("express")
let router = express.Router()
const db = require("../db/index.js") 
const { voteSchema,gameVoteSchema } = require("../schemas/voteType.js")
const database = new db.Database()
const table = "votes"
const gameVoteTable = "gamevotes"

router.get('/votes/:address', async (req,res) => {
    try{
        // return coins voted in the past 24 hrs
        let address = req.params.address
        const daySeconds = 3600*24
        const now = Math.floor( new Date().getTime() / 1000 )
        let response = await database.getAll(table,address)
        const votedCoins = {}

        for( const {Time,Coin} of response ){
            const difference = now - parseInt(Time)
            if ( difference > daySeconds ) break
            else votedCoins[Coin] = true
        }

        res.status(200).json(votedCoins)
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
        // coinData includes already updated vote count
        await database.updateRow(coinTable,coin,coinData)
        let response = await database.addRow(table, vote)
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err})
    }
})


router.get('/gameVotes/:address', async (req,res) => {
    try{
        // return coins voted in the past 24 hrs
        let address = req.params.address
        const daySeconds = 3600*24
        const now = Math.floor( new Date().getTime() / 1000 )
        let response = await database.getAll(gameVoteTable,address)
        const votedCoins = {}

        for( const {Time,Coin} of response ){
            const difference = now - parseInt(Time)
            if ( difference > daySeconds ) break
            else votedCoins[Coin] = true
        }

        res.status(200).json(votedCoins)
    }catch(err){
        res.status(500).json({err})
    }
})

router.post('/gameVotes/', async (req,res) => {
    try{
        const data = req.body
        const {error} = gameVoteSchema.validate(data)
        if(error){
            res.status(400).json({error})
            return
        }
        const {gameData,...vote} = data
        const {game} = vote
        const gameTable = "games"
        // gameData includes already updated vote count
        await database.updateRow(gameTable,game,gameData)
        let response = await database.addRow(gameVoteTable, {...vote,coin:game})
        res.status(200).json(response)
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router