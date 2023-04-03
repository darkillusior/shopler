import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
   
    name: 'noOfItems',
    initialState: { cartItems: 0},
   
    reducers: {
        nextComp(state,action) {
            state.cartItems = action.payload
        }

    
    }
})

export const actions = counterSlice.actions
const store = configureStore({
    reducer: counterSlice.reducer
})
export default store

