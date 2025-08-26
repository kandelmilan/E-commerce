import WishList from "../../component/Header/WishList";
import reducer from "./userSlice";

const initialList=JSON.parse(localStorage.getItem("wishlist"))||[];

const wishSlice=createslice({
    name:"wishlist",
    initialState:{
        item:initialList,
    },
    reducer:{
        WishList:(state,action)=>{
            const list=action.payload;
            const existing=state.list.find((i)=>i.id==item.id);
            if(existing){
                existing.quantity+=item.quantity?item.quantity:1
            }else{
                state.item.push({...item,quantity:item.quantity||1});
            }
            localStorage.set("")
        }
    }
})