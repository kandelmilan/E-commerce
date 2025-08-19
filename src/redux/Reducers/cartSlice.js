import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        item:[],
    },
    reducers:{
        addtocart:(state,action)=>{
            const item=action.payload;
            const existing = state.item.find((i)=>i.id==item.id);
            if(existing){
                existing.quantity+=1;
            }else{
                state.item.push({...item,quantity:1});
            }
        }
    }
})



export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;