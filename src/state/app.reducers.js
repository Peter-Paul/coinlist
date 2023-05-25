import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    coins:undefined,
    coinMap:undefined,
    userAddress:undefined,
    connected:false,
    votes:undefined,
    voteMap:undefined,
    backendUrl:undefined,
    bannerMap:undefined
}

export const appSlice = createSlice({
    name: "application",
    initialState,
    reducers:{
        loadState: (state,action) => {
            state.coins = [...action.payload.coins]
            state.coinMap = {...action.payload.coinMap}
            state.votes = [...action.payload.votes]
            state.voteMap = {...action.payload.voteMap}
            state.backendUrl = action.payload.backendUrl
            state.bannerMap = action.payload.bannerMap
        },

        connectUser: (state,action) => {
            state.userAddress = action.payload.userAddress
            state.connected = action.payload.connected
        },

        updateVotes: (state,action) => {
            const {address,userAddress} = action.payload
            const voteMapKey = `${userAddress}/${address}`
            state.coins = state.coins.map( 
                c => (c.address === address) ? 
                {...c,votes : (parseInt(c.votes)+1).toString()} : c )
            
            state.coinMap = {...state.coinMap, [address]: 
                {...state.coinMap[address],votes:(parseInt(state.coinMap[address].votes) + 1).toString()}}

            state.votes = [...state.votes, 
                {id:state.votes.length+1,address:userAddress,coin:address,latestTimestamp:Math.floor( new Date().getTime() / 1000 )}]

            state.voteMap = {...state.voteMap,[voteMapKey]:Math.floor( new Date().getTime() / 1000 )}
        },

        updateBanner: (state,action) => {
            const {name,url} = action.payload
            state.bannerMap = {...state.bannerMap,[name]:url}
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