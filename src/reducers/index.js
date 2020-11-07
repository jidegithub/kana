import { combineReducers } from 'redux';

const templatesReducer = (state=[], action) => {
  switch (action.type) {
    case "FETCH_TEMPLATES":
      return action.payload;
    case "SEARCH_TEMPLATE":
      return state.filter(template => template.name.toLowerCase().includes(action.payload.param.toLowerCase()))
    default:
      return state;
  }
}

const templatesFilterParamReducer = (state={}, action) => {
  switch (action.type) {
    case "TEMPLATES_FILTER_PARAM":
      return{...state, ...action.payload.param}
    default:
      return state;
  }
}

const setSelectedTemplateReducer = (state="all", action) => {
  switch (action.type) {
    case "SELECT_TEMPLATE":
      return action.payload;
    default:
      return state;
  }

}
export default combineReducers({
  templates: templatesReducer,
  templatesFilterParam: templatesFilterParamReducer,
  selectedTemplate: setSelectedTemplateReducer
});