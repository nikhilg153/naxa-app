import {
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  projects: [],
  error: null,
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, loading: false, projects: action.payload };
    case FETCH_PROJECTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
