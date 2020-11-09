// import templatesApi from "../apis/templates";
import template_data from "../../src/data/templates.json";
// import { sortBy } from '../utils/arrayFilterer';
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
  return {
    type: "FILTER_TEMPLATES_CATEGORY",
    payload: {
      templateFilterParam: templateFilterParam,
      MatchedTemplates: templateFilterParam.category === "All" ? allTemplates : allTemplates.filter((template) => (
        // return typeof template == "string" ? template == templateFilterParam.value : category.indexOf(templateFilterParam.value) >= 0;
        template.category.indexOf(templateFilterParam.category) > -1
      )),
      console: console.log(templateFilterParam)
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

export const sortTemplatePerNameOrder = (allTemplates, order) => (dispatch) => {
  const templates = allTemplates.slice();

  if (order !== "") {
    templates.sort((a, b) =>
      order === "ascending"
        ? a.name > b.name
          ? 1
          : -1
        : a.name < b.name
          ? 1
          : -1
    );
  } else {
    templates.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: "ORDER_TEMPLATES_BY_NAME",
    payload: {
      order: order,
      items: templates,
    },
  });
}

export const sortTemplatePerDate = (allTemplates, dateCreated) => (dispatch) => {
  const templates = allTemplates.slice();
  if (dateCreated !== "") {
    templates.sort((a, b) =>
      dateCreated === "ascending"
        ? a.created > b.created
          ? 1
          : -1
        : a.created < b.created
          ? 1
          : -1
    );
  } else {
    templates.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: "ORDER_TEMPLATES_BY_DATE_CREATED",
    payload: {
      dateCreated: dateCreated,
      items: templates
    }
  })
};

export const setSelectedTemplate = (name) => {
  return {
    type: "SET_CURRENT_TEMPLATE_NAME",
    payload: name
  }
};

export const emptyFields = (templateFilterParam) => {
  return {
    type: "EMPTY_FIELDS",
    payload: {
      templateFilterParam: templateFilterParam === "All" ? "" : null
    }
  }
};