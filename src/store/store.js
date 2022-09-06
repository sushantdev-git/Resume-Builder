import { configureStore } from '@reduxjs/toolkit'
import PositionReducer from './Features/Position';

export default configureStore({
  reducer: {
    position : PositionReducer,
  },
})

