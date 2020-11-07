// import templatesApi from "../apis/templates";
import template_data from "../../src/data/templates.json"
// import chunk from 'lodash.chunk';

export const fetchTemplates = () => {
  // return async (dispatch, getState) => {
  //   try {
  //     const response = await templatesApi.get('/task_templates');
  //     let chunked = chunk(response.data, 100)
  //     dispatch({ type: 'FETCH_TEMPLATES', payload: chunked[0]})
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   // console.log(chunk(['a', 'b', 'c', 'd'], 2)) 
  // }
  return {
    type: "FETCH_TEMPLATES",
    payload: template_data
  }
};

export const filterTemplatesParams = (param) => {
  return{
    type: "TEMPLATES_FILTER_PARAM",
    payload: {
      param
    }
  }
};

export const searchTemplate = (param) => {
  return {
    type: "SEARCH_TEMPLATE",
    payload: {
      param
    }
  }
};

export const setSelectedTemplate = (name) => {
  return {
    type: "SELECT_TEMPLATE",
    payload: name
  }
};





