import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./app.reducers"

export const store = configureStore({
  reducer: {
      app:appReducer
  },
})