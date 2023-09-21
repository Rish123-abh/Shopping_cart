import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value:0,
}
// createSlice funciton ke andar ek object jaayega jisme 3 input jaayenge name,initialstate and functionality
export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    // reducers ke andar ek object banega jiske andar functionality denge
    // increment key hogyi jisko ek arrow function se map kardiya 
    reducers: {
        increment : (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})
// yeh functionality jo banayi hai usko use karne ke liye export karna padega
// har function keliye  Action creaters generate hote hai basically Action creaters ke andar implementation of functions hai jisko
//  hum export karte hai use karne ke liye    
// createSlice()-> do cheeze deta hai ek actions and dusra  reducers 

// yeh do cheezen humesha hee export karna padegi 
export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;