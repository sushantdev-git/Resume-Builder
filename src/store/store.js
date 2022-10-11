import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PositionReducer from "./Features/Position";
import PersonalSectionReducer from "./Features/PersonalSectionSlice";
import ExperienceSectionReducer from "./Features/ExperienceSectionSlice";
import SkillsSectionReducer from "./Features/SkillsSectionSlice";
import EducationSectionReducer from './Features/EducationSectionSlice';
import HelperSlice from './Features/Helper';
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import TemplateSliceReducer from "./Features/TemplateSlice"
import LinksSectionSlice from "./Features/LinksSectionSlice";
import ProjectsSectionSlice from "./Features/ProjectsSectionSlice";

const reducers = combineReducers({
  position: PositionReducer,
  personalDetails: PersonalSectionReducer,
  experience: ExperienceSectionReducer,
  skills: SkillsSectionReducer,
  education: EducationSectionReducer,
  helper: HelperSlice,
  template: TemplateSliceReducer,
  links:LinksSectionSlice,
  projects:ProjectsSectionSlice
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
