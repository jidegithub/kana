// Action creator
import Templates from "../apis/templates";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await Templates.get('/');

    dispatch({ type: 'FETCH_TEMPLATES', payload: response})
  }
};