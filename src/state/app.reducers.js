import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    coins:undefined,
    coinMap:undefined,
    userAddress:undefined,
    connected:false,
    votes:undefined,
    voteMap:undefined
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
        }
    }
})

export const { connectUser, loadState, updateVotes } = appSlice.actions

export default appSlice.reducer