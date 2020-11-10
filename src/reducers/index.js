import { combineReducers } from 'redux';

const initState = { templates: [], filteredTemplates: [], searchParam: "", selectedTemplate: "All", templateFilterParam: "", order: "", dateCreated: "", page: 0 };

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
      return {
        ...state,
        filteredTemplates: action.payload.MatchedTemplates,
        templateFilterParam: action.payload.templateFilterParam,
        selectedTemplate: action.payload.selectedTemplate,
        dateCreated: action.payload.empty,
        order: action.payload.empty
      };
    case "ORDER_TEMPLATES_BY_NAME":
      return {
        ...state,
        filteredTemplates: action.payload.items,
        order: action.payload.order
      };
    case "ORDER_TEMPLATES_BY_DATE_CREATED":
      return {
        ...state,
        filteredTemplates: action.payload.items,
        dateCreated: action.payload.dateCreated
      };
    case "INCREMENT_PAGE":
      return {
        ...state,
        page: state.page + 1
      }
    case "DECREMENT_PAGE":
      return {
        ...state,
        page: state.page - 1
      }
    case "EMPTY_FIELDS":
      return {
        ...state,
        filteredTemplates: action.payload.allTemplates, 
        searchParam: action.payload.templateFilterParam,
        order: action.payload.templateFilterParam,
        dateCreated: action.payload.templateFilterParam,
        selectedTemplate: action.payload.selectedTemplate
      }
    default:
      return state;
  }
}

export default combineReducers({
  templates: templatesReducer
});