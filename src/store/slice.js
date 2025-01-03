import {createSlice } from "@reduxjs/toolkit"



export const typingSlice= createSlice({


    name:"typing",
    initialState:{
        text:"",
        wpm:0,
        input:0,
    },

    reducers:{
        
        setTypedText:(state,action)=>{
            state.text = action.payload
        },
        setInputValue:(state,action)=>{
            state.input = action.payload
        },
        setWpm:(state,action)=>{
            state.wpm = action.payload
        }


    }
})

export const {setTypedText,setInputValue,setWpm} = typingSlice.actions

export default typingSlice.reducer