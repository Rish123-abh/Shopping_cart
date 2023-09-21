import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slice/Cartslice";

export const store1=configureStore({
    reducer:{
        cart:Cartslice
    },
});