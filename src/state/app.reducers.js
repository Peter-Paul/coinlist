import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:"Doctorecoins",
    doctoreTwitter:"https://twitter.com/doctoreclub",
    doctoreTelegram:"https://t.me/doctoreclub",
    coins:undefined,
    coinMap:undefined,
    games:undefined,
    gameMap:undefined,
    userAddress:undefined,
    connected:false,
    votes:undefined,
    voteMap:undefined,
    gameVotes:undefined,
    gameVoteMap:undefined,
    baseUrl:undefined,
    bannerMap:undefined,
    admin:undefined,
    partners:undefined
}

export const appSlice = createSlice({
    name: "application",
    initialState,
    reducers:{
        loadState: (state,action) => {
            state.coins = [...action.payload.coins]
            state.coinMap = {...action.payload.coinMap}
            state.games = [...action.payload.games]
            state.gameMap = {...action.payload.gameMap}
            state.voteMap = {...action.payload.voteMap}
            state.gameVoteMap = {...action.payload.gameVoteMap}
            state.baseUrl = action.payload.baseUrl
            state.bannerMap = action.payload.bannerMap
            state.admin = action.payload.admin
            state.partners = action.payload.partners
        },

        connectUser: (state,action) => {
            state.userAddress = action.payload.userAddress
            state.connected = action.payload.connected
            state.voteMap = {...action.payload.voteMap}
            state.gameVoteMap = {...action.payload.gameVoteMap}
        },

        updateVotes: (state,action) => {
            const coin = action.payload.updatedCoin
            const {address,votes} = coin
            state.coins = state.coins.map( 
                c => (c.address === address) ? 
                {...c,votes} : c )
            
            state.coinMap = {...state.coinMap, [address]: 
                {...state.coinMap[address],votes}}

            state.voteMap = {...state.voteMap,[address]:true}
        },


        updateGameVotes: (state,action) => {
            const game = action.payload.updatedGame
            const {address,votes} = game
            state.games = state.games.map( 
                c => (c.address === address) ? 
                {...c,votes} : c )
            
            state.gameMap = {...state.gameMap, [address]: 
                {...state.gameMap[address],votes}}

            state.gameVoteMap = {...state.gameVoteMap,[address]:true}
        },

        updateBanner: (state,action) => {
            const {name,url,link} = action.payload
            state.bannerMap = {...state.bannerMap,[name]:{url,link}}
        },
        
        uploadCoin: (state,action) => {
            const coin = action.payload
            const {address} = coin
            state.coins = [...state.coins,coin]
            state.coinMap = {...state.coinMap, [address]:coin }
        },

        uploadGame: (state,action) => {
            const game = action.payload
            const {address} = game
            state.games = [...state.games,game]
            state.gameMap = {...state.gameMap, [address]:game }
        },

        updateCoin: (state,action) => {
            const coin = action.payload
            const {address} = coin
            state.coins = state.coins.map( c => (c.address === address) ? coin : c )
            state.coinMap = {...state.coinMap, [address]:coin }
        },

        updateGame: (state,action) => {
            const game = action.payload
            const {address} = game
            state.games = state.games.map( c => (c.address === address) ? game : c )
            state.gameMap = {...state.gameMap, [address]:game }
        },

        deleteCoin: (state,action) => {
            const address = action.payload
            const { [address]:remove , ...rest } = state.coinMap
            state.coins = state.coins.filter( c => c.address !== address )
            state.coinMap = rest
        },

        deleteGame: (state,action) => {
            const address = action.payload
            const { [address]:remove , ...rest } = state.gameMap
            state.games = state.games.filter( c => c.address !== address )
            state.gameMap = rest
        }

    }
})

export const { 
                connectUser, 
                loadState, 
                updateVotes, 
                updateGameVotes,
                updateBanner, 
                uploadCoin, 
                updateCoin, 
                deleteCoin,
                uploadGame,
                updateGame,
                deleteGame 
            } = appSlice.actions

export default appSlice.reducer