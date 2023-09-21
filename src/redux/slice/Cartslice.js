import { createSlice } from "@reduxjs/toolkit"
export const Cartslice=createSlice({
name:"cart",
initialState:[],
reducers:{
    add:(state,action) => {
        // to access the data which has been passed in reducer payload is used here action.payload->input ko darshaata hai 
        state.push(action.payload);
    },
    remove:(state,action) => {
        return state.filter((item) => item.id !== action.payload);
    },
}
}
);
export const{add,remove}=Cartslice.actions;
export default Cartslice.reducer;