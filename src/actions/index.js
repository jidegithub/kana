// import templatesApi from "../apis/templates";
import template_data from "../../src/data/templates.json";
import { sortBy } from '../utils/arrayFilterer';
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

// export const sortTemplatePerNameOrder = (allTemplates, sortParam) => {
//   // let toSortAsc = sortBy(allTemplates, { prop: "name", parser: (item) => item.toLowerCase() });
//   // let toSortDesc = sortBy(allTemplates, { prop: "name", desc: true, parser: (item) => item.toLowerCase() });
  
//   return {
//     type: "SORT_TEMPLATE_ORDER",
//     payload: {
//       sortParam: sortParam,
//       sorted: sortParam === 'ascending' ? 
//       sortBy(allTemplates, { prop: "name", parser: (item) => item.toLowerCase() }) : 
//       sortBy(allTemplates, { prop: "name", desc: true, parser: (item) => item.toLowerCase() }),
//     }
//   }
// }

export const sortTemplatePerNameOrder = (allTemplates, order) => (dispatch) => {
  const products = allTemplates.slice();
  
  if (order !== "") {
    products.sort((a, b) =>
      order === "ascending"
        ? a.name > b.name
          ? 1
          : -1
        : a.name < b.name
          ? 1
          : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: "ORDER_TEMPLATES_BY_NAME",
    payload: {
      order: order,
      items: products,
    },
  });


  // return {
  //   type: "SORT_TEMPLATE_ORDER",
  //   payload: {
  //     sortParam: sortParam,
  //     sorted: sortParam === 'ascending' ?
  //       sortBy(allTemplates, { prop: "name", parser: (item) => item.toLowerCase() }) :
  //       sortBy(allTemplates, { prop: "name", desc: true, parser: (item) => item.toLowerCase() }),
  //   }
  // }
}

export const sortTemplatePerDate = (allTemplates, sortParam) => {
  let toSortAsc = sortBy(allTemplates, { prop: "created", parser: (item) => new Date(item)});
  let toSortDesc = sortBy(allTemplates, { prop: "created", desc: true, parser: (item) => new Date(item)});
  return {
    type: "SORT_TEMPLATE_DATE",
    payload:{
      sortParam: sortParam,
      sorted: sortParam == "ascending" ? toSortAsc : toSortDesc
    }
  }
}

export const setSelectedTemplate = (name) => {
  return {
    type: "SELECT_TEMPLATE",
    payload: name
  }
};

