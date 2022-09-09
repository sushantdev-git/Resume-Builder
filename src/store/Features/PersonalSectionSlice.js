import { createSlice } from "@reduxjs/toolkit";

export const personalSectionSlice = createSlice({
    name:"PersonalSection",
    initialState:{
        name:"",
        email:"",
        job:"",
        phoneNumber:"",
        about:"",
    },
    reducers:{
        changeName:(state, action) =>{
            state.name=action.payload;
        },
        changeEmail:(state, action) => {
            state.email=action.payload;
        },
        changeJob:(state, action) => {
            state.job=action.payload;
        },
        changePhoneNumber:(state, action) =>{
            state.phoneNumber=action.payload;
        },
        changeAbout:(state, action) =>{
            state.about=action.payload;
        }
    }
});

export const PersonalSectionActions=personalSectionSlice.actions;
export default personalSectionSlice.reducer;