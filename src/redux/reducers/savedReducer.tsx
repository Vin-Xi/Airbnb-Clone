import { createReducer,PayloadAction} from "@reduxjs/toolkit";
import { IListing } from "../../Components/Lister/listings";
import { save, del } from "../actions/savedActions";

interface IInitialState{
    listings:IListing[]
}
const initialState:IInitialState={
    listings:[]
}

const containsObject=(list:IListing[],item:IListing)=>{
    return list.some((m)=>m.id==item.id)
}
const indexOf = (list:IListing[],item:IListing)=>{
    let indexO
    list.map((m,index)=>{if(m.id==item.id) indexO=index })
    return indexO
}
export const savedReducer=createReducer(
    initialState,
    (builder)=>{
        builder
        .addCase(save,(state,action)=>{
            if(!containsObject(state.listings,action.payload)){
            state.listings.push(action.payload)
            }
            
        })
        .addCase(del,(state,action)=>{
            console.log("Here")
            const index = indexOf(state.listings,action.payload)
            if (index!=-1){
                state.listings.splice(index,1)
            }
        })
    }

)