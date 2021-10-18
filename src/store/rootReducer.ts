import chat from 'components/Chat/reducer';
import users from 'components/User/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  users,
  chat,
});
