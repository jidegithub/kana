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

export const filterTemplatesParams = (allTemplates, templateFilterParam) => {
  return{
    type: "TEMPLATES_FILTER_PARAM",
    payload: {
      templateFilterParam: templateFilterParam,
      MatchedTemplates: templateFilterParam.category === "All" ? allTemplates : allTemplates.filter((template) => (
        // return typeof template == "string" ? template == templateFilterParam.value : category.indexOf(templateFilterParam.value) >= 0;
        template.category.indexOf(templateFilterParam.category) > -1
      ))
    }
  }
};

export const searchTemplate = (allTemplates, searchParam) => {
  return {
    type: "SEARCH_TEMPLATE",
    payload: {
      searchParam: searchParam,
      matchedTemplates: searchParam === "" ? allTemplates : allTemplates.filter(
        temp => temp.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    }
  }
};

export const sortTemplate = (allTemp, filterParam) => {

}

export const setSelectedTemplate = (name) => {
  return {
    type: "SELECT_TEMPLATE",
    payload: name
  }
};

