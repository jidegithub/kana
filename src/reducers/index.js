import { combineReducers } from 'redux';

const templatesReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCH_TEMPLATES":
      return action.payload;
    default:
      return state;
  }
}

const filterTemplateParamReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCH_PARAM_TEMPLATES":

      return action.payload;
    default:
      return state;
  }
}

const getTemplateReducer = (state=[], action) => {
  switch (action.type) {
    case "SEARCH_TEMPLATE":

      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  templates: templatesReducer,
  paramTemplates: filterTemplateParamReducer,
  template: getTemplateReducer
});