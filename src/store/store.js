import { configureStore, combineReducers } from "@reduxjs/toolkit";
import PositionReducer from "./Features/Position";
import PersonalSectionReducer from "./Features/PersonalSectionSlice";
import ExperienceSectionReducer from "./Features/ExperienceSectionSlice";
import SkillsSectionReducer from "./Features/SkillsSectionSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
  position: PositionReducer,
  personalDetails: PersonalSectionReducer,
  experience: ExperienceSectionReducer,
  skills: SkillsSectionReducer,
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
