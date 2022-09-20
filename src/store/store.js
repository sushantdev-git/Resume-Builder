import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PositionReducer from "./Features/Position";
import PersonalSectionReducer from "./Features/PersonalSectionSlice";
import ExperienceSectionReducer from "./Features/ExperienceSectionSlice";
import SkillsSectionReducer from "./Features/SkillsSectionSlice";
import EducationSectionReducer from './Features/EducationSectionSlice';
import ModalReducer from './Features/Modal';
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import TemplateSliceReducer from "./Features/TemplateSlice"

const reducers = combineReducers({
  position: PositionReducer,
  personalDetails: PersonalSectionReducer,
  experience: ExperienceSectionReducer,
  skills: SkillsSectionReducer,
  education: EducationSectionReducer,
  modal: ModalReducer,
  template: TemplateSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
