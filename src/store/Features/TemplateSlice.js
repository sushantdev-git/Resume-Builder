import { createSlice } from "@reduxjs/toolkit";

export const TemplateSlice = createSlice({
    name:"Template",
    initialState:{template:0},
    reducers:{
        selectTemplate:(state, actions) => {
            state.template=actions.payload
        }
    }
})

export const {selectTemplate} = TemplateSlice.actions
export default TemplateSlice.reducer