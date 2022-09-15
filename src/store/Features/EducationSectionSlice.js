import { createSlice } from "@reduxjs/toolkit";

const EducationTemplate = {
    institue:"",
    degree:"Degree Name",
    formDate:"",
    tillDate:"",
}


function swap(ind1, ind2, arr){
    const temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

const EducationSectionSlice = createSlice({
    name:"EducationSection",
    initialState:{
        educations:[

        ]
    },
    reducers : {
        addNewEducation: (state) => {
            state.educations.push(EducationTemplate);
        },
        updateInstitute: (state, action) => {
            const data = action.payload;
            state.educations[data.index].institue = data.value;
        },
        updateDegree: (state, action) => {
            const data = action.payload;
            state.educations[data.index].degree = data.value;
        },
        updateFromDate: (state, action) => {
            const data = action.payload;
            state.educations[data.index].formDate = data.value;
        },
        updateTillDate: (state, action) => {
            const data = action.payload;
            state.educations[data.index].tillDate = data.value;
        },
        deleteEducation: (state, action) => {
            const data = action.payload;
            const educations = state.educations.filter((_, ind) => ind != data.index);
            state.educations = educations;
        },
        moveUp: (state, action) => {
            const data = action.payload;
            swap(data.index, data.index-1, state.educations);
        },
        moveDown: (state, action) => {
            const data = action.payload;
            swap(data.index, data.index+1, state.educations);
        },
    }
});


export const EducationActions = EducationSectionSlice.actions;
export default EducationSectionSlice.reducer;