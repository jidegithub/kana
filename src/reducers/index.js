import { combineReducers } from 'redux';

const templatesReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCH_TEMPLATES":
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  templates: templatesReducer
});