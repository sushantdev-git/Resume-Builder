import { createSlice } from "@reduxjs/toolkit";

const jobObjectTemplate = {
  jobTitle: "Job Name",
  employer: "",
  fromDate: "",
  toDate: "",
  city: "",
  About: [],
  listType:"disc"
};

function swap(ind1, ind2, arr){
  const temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

export const ExperienceSectionSlice = createSlice({
  name: "ExperienceSection",
  initialState: {
    jobs: [],
  },
  reducers: {
    addNew: (state) => {
      state.jobs.push(jobObjectTemplate);
    },
    updateTitle: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].jobTitle = data.value;
    },
    updateEmployer: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].employer = data.value;
    },
    updateFromDate: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].fromDate = data.value;
    },
    updateToDate: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].toDate = data.value;
    },
    updateCity: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].city = data.value;
    },
    updateCity: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].city = data.value;
    },
    addAbout: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].About.push("Type Here...");
    },
    updateAbout: (state, action) => {
      const data = action.payload;
      state.jobs[data.index].About[data.ind] = data.value;
    },
    deleteAbout: (state, action) => {
      const data = action.payload;
      const About = state.jobs[data.index].About.filter(
        (_, ind) => ind != data.ind
      );
      state.jobs[data.index].About = About;
    },
    moveJobUp:(state, action) => {
      const data = action.payload;
      swap(data.index, data.index-1, state.jobs);
    },
    moveJobDown:(state,action) => {
      const data = action.payload;
      swap(data.index, data.index+1, state.jobs);
    },
    deleteJob:(state,action) => {
      const data = action.payload;
      const jobs = state.jobs.filter((_, ind) => ind != data.index);
      state.jobs = jobs;
    }
  },
});

export const JobsActions = ExperienceSectionSlice.actions;
export default ExperienceSectionSlice.reducer;
