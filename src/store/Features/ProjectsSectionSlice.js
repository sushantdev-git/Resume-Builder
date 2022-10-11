import { createSlice } from "@reduxjs/toolkit";

const projectTemplate = {
    projectTitle: "Project Name",
    about: [],
}

function swap(ind1, ind2, arr){
    const temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

export const ProjectsSectionSlice = createSlice({
    name: "ProjectSection",
    initialState: {
        projects: [],
    },
    reducers: {
        addNew: (state) => {
            state.projects.push(projectTemplate);
        },

        updateTitle: (state, action) => {
            const data = action.payload;
            state.projects[data.index].projectTitle=data.value;
        },

        addAbout: (state, action) => {
            const data = action.payload;
            state.projects[data.index].about.push("Type Here. . .");
        },

        updateAbout: (state, action) => {
            const data=action.payload;
            state.projects[data.index].about[data.ind] = data.value;
        },

        deleteAbout: (state, action) => {
            const data = action.payload;
            const about = state.projects[data.index].about.filter(
                (_, ind) => ind!=data.ind
            );
            state.projects[data.index].about=about;
        },

        moveProjectUp: (state, action) => {
            const data=action.payload;
            swap(data.index, data.index-1, state.projects);
        },

        moveProjectDown: (state, action) => {
            const data=action.payload;
            swap(data.index, data.index+1, state.projects);
        },

        deleteProject: (state, action) => {
            const data=action.payload;
            const projects = state.projects.filter((_, ind) => ind!=data.index);
            state.projects=projects;
        }
    }
});

export const ProjectsActions = ProjectsSectionSlice.actions;
export default ProjectsSectionSlice.reducer;