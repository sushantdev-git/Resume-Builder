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
            IDS.ADD_NEW_SECTION,
        ]
    },
    reducers : {
        addNewSection : (state, action) => {
            state.position.pop()
            state.position.push(action.payload);
            state.position.push(IDS.ADD_NEW_SECTION)
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
        },

        removeSection: (state,action) => {
            const sectionName = action.payload;
            const RemainingSections = state.position.filter(Id => Id != sectionName);
            state.position = RemainingSections;
        }
    }
})

export const PositionActions = positionSlice.actions;
export default positionSlice.reducer