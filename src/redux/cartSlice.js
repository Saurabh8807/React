const { createSlice,current } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            console.log("state=>",current(state))
            console.log("state.items=>",state.items)
            console.log("action=>",action)
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions

export default cartSlice.reducer