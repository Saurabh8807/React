const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log("state=>",state)
            console.log("state.items=>",state.items)
            console.log("action=>",action)
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:()=>{
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,reducer}=cartSlice.actions

export default cartSlice.reducer