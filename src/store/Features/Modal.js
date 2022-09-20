import { createSlice } from "@reduxjs/toolkit";


const ModalSlice = createSlice({
    name:"modal",
    initialState: {
        open: false,
        content:"Nothing for Now",
        callBack: null,
    },
    reducers:{
        openModal: (state, action) => {
            const data = action.payload;
            console.log(data)
            state.open = true;
            state.callBack = data.callBack
            state.content = data.content
        },
        closeModal: (state) => {
            state.open = false;
            state.callBack = null;
        }
    }
})

export const ModalActions = ModalSlice.actions;
export default ModalSlice.reducer;