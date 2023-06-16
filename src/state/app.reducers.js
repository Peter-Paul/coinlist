import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:"Doctorecoins",
    doctoreTwitter:"https://twitter.com/doctoreclub",
    doctoreTelegram:"https://t.me/doctoreclub",
    coins:undefined,
    coinMap:undefined,
    userAddress:undefined,
    connected:false,
    votes:undefined,
    voteMap:undefined,
    baseUrl:undefined,
    bannerMap:undefined,
    admin:undefined
}

export const appSlice = createSlice({
    name: "application",
    initialState,
    reducers:{
        loadState: (state,action) => {
            state.coins = [...action.payload.coins]
            state.coinMap = {...action.payload.coinMap}
            state.voteMap = {...action.payload.voteMap}
            state.baseUrl = action.payload.baseUrl
            state.bannerMap = action.payload.bannerMap
            state.admin = action.payload.admin
        },

        connectUser: (state,action) => {
            state.userAddress = action.payload.userAddress
            state.connected = action.payload.connected
            state.voteMap = {...action.payload.voteMap}
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

        updateCoin: (state,action) => {
            const coin = action.payload
            const {address} = coin
            state.coins = state.coins.map( c => (c.address === address) ? coin : c )
            state.coinMap = {...state.coinMap, [address]:coin }
        },

        deleteCoin: (state,action) => {
            const address = action.payload
            const { [address]:remove , ...rest } = state.coinMap
            state.coins = state.coins.filter( c => c.address !== address )
            state.coinMap = rest
        }

    }
})

export const { connectUser, loadState, updateVotes, updateBanner, updateCoin, deleteCoin, uploadCoin } = appSlice.actions

export default appSlice.reducer