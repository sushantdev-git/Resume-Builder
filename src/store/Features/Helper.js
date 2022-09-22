import { createSlice } from "@reduxjs/toolkit";


const HelperSlice = createSlice({
    name:"helper",
    initialState: {
        modal:{
            open: false,
            content:"Nothing for Now",
            callBack: null,
        },
        loc:{
            prevpath:"",
            path:"/"
        }
    },
    reducers:{
        openModal: (state, action) => {
            const data = action.payload;
            console.log(data)
            state.modal.open = true;
            state.modal.callBack = data.callBack
            state.modal.content = data.content
        },
        closeModal: (state) => {
            state.modal.open = false;
            state.modal.callBack = null;
        },
        changePath: (state, action) => {
            state.loc.prevpath = state.loc.path;
            state.loc.path = action.payload;
        }
    }
})

export const HelperActions = HelperSlice.actions;
export default HelperSlice.reducer;