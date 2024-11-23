import apiClient from '../../services/request';
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from '../types/actionTypes';

const getCategory = (page, limit, search) => async (dispatch) => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  try {
    const response = await apiClient.get(
      `/category?page=${page}&limit=${limit}&search=${search}1`
    );
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: {
        category: response.data.category,
        totalCount: response.data.totalCount,
      },
    });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES_FAILURE, error });
  }
};

export { getCategory };