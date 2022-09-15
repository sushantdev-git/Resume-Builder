import { createSlice } from "@reduxjs/toolkit";

const SkillObjectTemplate = {
    skillName:"New Skill",
    level:3,
}

function swap(ind1, ind2, arr){
    const temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

export const SkillsSectionSlice = createSlice({
    name:"SkillsSection",
    initialState : {
        skills:[],
    },
    reducers: {
        addNewSkill: (state) => {
            console.log("add skill called")
            state.skills.push(SkillObjectTemplate);
        },
        updateName: (state, action) => {
            const data = action.payload;
            state.skills[data.index].skillName = data.value;
        },
        updateLevel: (state, action) => {
            const data = action.payload;
            state.skills[data.index].level = data.value;
        },
        deleteSkill: (state, action) => {
            const data = action.payload;
            const skills = state.skills.filter((_, ind) => ind != data.index);
            state.skills = skills;
        },
        moveUp: (state,action) => {
            console.log()
            const data = action.payload;
            const skills = state.skills;
            swap(data.index, data.index-1, skills);
            state.skills = skills;
        },
        moveDown: (state,action) => {
            const data = action.payload;
            const skills = state.skills;
            swap(data.index, data.index+1, skills);
            state.skills = skills;
        }
    }
})

export const SkillsActions = SkillsSectionSlice.actions;
export default SkillsSectionSlice.reducer;