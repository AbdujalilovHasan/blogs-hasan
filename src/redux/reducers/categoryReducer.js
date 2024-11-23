import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from '../types/actionTypes';

const initialState = {
  category: [],
  totalCount: 0,
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload.category,
        totalCount: action.payload.totalCount,
      };

    case GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default categoryReducer;