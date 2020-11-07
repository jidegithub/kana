import Templates from "../apis/templates";
import chunk from 'lodash.chunk';

export const fetchTemplates = () => {
  return async (dispatch, getState) => {
    try {
      const response = await Templates.get('/task_templates');
      let chunked = chunk(response.data, 100)
      dispatch({ type: 'FETCH_TEMPLATES', payload: chunked[0]})
    } catch (error) {
      console.error(error);
    }
    // console.log(chunk(['a', 'b', 'c', 'd'], 2)) 
  }
};

export const filterTemplatesParams = (param) => {
  return{
    type: "FETCH_PARAM_TEMPLATES",
    payload: {
      param
    }
  }
};

export const SearchTemplate = (param) => {
  return {
    type: "SEARCH_TEMPLATE",
    payload: {
      param
    }
  }
}



