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
      }
    case "TEMPLATES_FILTER_PARAM":
      return { ...state,
        filteredTemplates: action.payload.MatchedTemplates, 
        templateFilterParam: action.payload.templateFilterParam  
      };
    case "ORDER_TEMPLATES_BY_NAME" :
      return {
        ...state, 
        filteredTemplates: action.payload.items,
        order: action.payload.order
      }
    case "SORT_TEMPLATE_DATE" :
      return {
        ...state, 
        filteredTemplates: action.payload.items,
        dateCreated: action.payload.dateCreated
      }
    case "SELECT_TEMPLATE":
      return { ...state, selectedTemplate: action.payload };
    default:
      return state;
  }
}

export default combineReducers({
  templates: templatesReducer
});