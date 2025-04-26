import { combineReducers } from 'redux';
import userReducer from './store/slices/userSlice';
import bookingReducer from './store/slices/bookingSlice';

const rootReducer = combineReducers({
  user: userReducer,
  booking: bookingReducer,
});

export default rootReducer;