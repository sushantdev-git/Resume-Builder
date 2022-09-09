import { configureStore } from '@reduxjs/toolkit'
import PositionReducer from './Features/Position';
import PersonalSectionReducer from './Features/PersonalSectionSlice'

export default configureStore({
  reducer: {
    position : PositionReducer,
    personalDetails:PersonalSectionReducer,
  },
})

