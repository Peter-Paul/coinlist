import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    coins:undefined,
    coinMap:undefined
}

export const appSlice = createSlice({
    name: "application",
    initialState,
    reducers:{
        loadCoins: (state,action) => {
            state.coins = [...action.payload.coins]
            state.coinMap = {...action.payload.coinMap}
        }
    }
})

export const { loadCoins } = appSlice.actions

export default appSlice.reducer