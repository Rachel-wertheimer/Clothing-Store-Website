import { produce } from "immer";

export const InitialState = {
    arrshpping: [
        // { code: "1", codeuser:"1",data:"20/12/2023",sumprice:"500",arr:[{name:"shirt",count:"2"},{name:"pent",count:"3"}] },
        // { code: "2", codeuser:"2",data:"22/11/2022",sumprice:"500",arr:[{name:"shirt",count:"1"},{name:"pent",count:"4"}] },
        // { code: "3", codeuser:"3",data:"10/09/2024",sumprice:"500",arr:[{name:"shirt",count:"3"},{name:"pent",count:"2"}] },
    ],   moneShopping:0
}
export const datashopping=produce((state,action)=>{
    switch(action.type){
        case "ADD_CART_TO_BUYS":{
            state.arrshpping.push(action.payload); break;}
        case "SET_MONES": {
             state.moneShopping = action.payload; break;
        }
    default:
    break;
    }
   },InitialState)
   
