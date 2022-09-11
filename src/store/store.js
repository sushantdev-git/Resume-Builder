import { configureStore } from '@reduxjs/toolkit'
import PositionReducer from './Features/Position';
import PersonalSectionReducer from './Features/PersonalSectionSlice'
import ExperienceSectionReducer from './Features/ExperienceSectionSlice';

export default configureStore({
  reducer: {
    position : PositionReducer,
    personalDetails:PersonalSectionReducer,
    experience: ExperienceSectionReducer,
  },
})

