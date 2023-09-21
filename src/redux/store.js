import { configureStore } from '@reduxjs/toolkit';
import CounterSlice  from './slice/counterslice';
// Redux store create karna hota hai ek global store banane ke liye 
// Store consist of multiple slices  
// configure store function =>global store tyaar karta hai jha pe centralised data hoga 
export const store = configureStore({
  reducer:{
    // different slices aayenge iske andar
    // abhi ek hee slice hai
    //  counter naam ka slice hai aur uska reducer counterslice hai
    counter: CounterSlice
  },
})

