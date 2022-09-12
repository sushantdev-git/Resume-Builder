import { createSlice } from "@reduxjs/toolkit";

const SkillObjectTemplate = {
    skillName:"New Skill",
    level:3,
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
        }
    }
})

export const SkillsActions = SkillsSectionSlice.actions;
export default SkillsSectionSlice.reducer;