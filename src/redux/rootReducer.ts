import { combineReducers } from 'redux';
import userReducer from './slices/userSlice';
import bookingReducer from './slices/bookingSlice';

const rootReducer = combineReducers({
  user: userReducer,
  booking: bookingReducer,
});

export default rootReducer;