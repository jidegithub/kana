import { combineReducers } from 'redux';

const initState = { templates: [], filteredTemplates: [], searchParam: "", selectedTemplate: "All", templateFilterParam: {}, order: "", dateCreated: "" };

const templatesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_TEMPLATES":
      return { ...state, templates: action.payload, filteredTemplates: action.payload };
    case "SEARCH_TEMPLATE":
      return {
        ...state,
        filteredTemplates: action.payload.matchedTemplates,
        searchParam: action.payload.searchParam
      };
    case "FILTER_TEMPLATES_CATEGORY":
      return { ...state,
        filteredTemplates: action.payload.MatchedTemplates, 
        templateFilterParam: action.payload.templateFilterParam, 
      };
    case "ORDER_TEMPLATES_BY_NAME" :
      return {
        ...state, 
        filteredTemplates: action.payload.items,
        order: action.payload.order
      };
    case "ORDER_TEMPLATES_BY_DATE_CREATED" :
      return {
        ...state, 
        filteredTemplates: action.payload.items,
        dateCreated: action.payload.dateCreated
      };
    case "SET_CURRENT_TEMPLATE_NAME":
      return { ...state, selectedTemplate: action.payload };
    case "EMPTY_FIELDS":
      return {
        ...state, 
        searchParam: action.payload.templateFilterParam, 
        order: action.payload.templateFilterParam, 
        dateCreated: action.payload.templateFilterParam
      }
    default:
      return state;
  }
}

export default combineReducers({
  templates: templatesReducer
});