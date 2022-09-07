import { createSlice } from '@reduxjs/toolkit';
import * as IDS from '../SectionIDS';

function swap(ind1, ind2, arr){
    const temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

export const positionSlice = createSlice({
    name:"Position",
    initialState : {
        position: [
            IDS.PERSONAL_DETAILS_SECTION,
            IDS.EDUCATION_SECTION,
            IDS.SKILLS_SECTION,
            IDS.EXPERIENCE_SECTION,
            IDS.ADD_NEW_SECTION,
        ]
    },
    reducers : {
        addNewSection : (state, action) => {
            state.position.push(action.payload);
        },

        moveUp : (state, action) => {
            const sectionId = action.payload;
            let ind = state.position.findIndex(id => id === sectionId);
            swap(ind, ind-1, state.position);
        },

        moveDown: (state, action) => {
            const sectionId = action.payload;
            let ind=state.position.findIndex(id => id === sectionId)
            swap(ind, ind+1, state.position)
        }
    }
})

export const PositionActions = positionSlice.actions;
export default positionSlice.reducer