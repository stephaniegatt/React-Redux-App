import {
    FETCH_SUPERHERO_START,
    FETCH_SUPERHERO_SUCCESS,
    FETCH_SUPERHERO_FAILURE,
} from "../actions/index";

const initialState = {
    isLoading: false,
    superhero: {},
    error: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SUPERHERO_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_SUPERHERO_SUCCESS:
        return {
          ...state,
          isLoading: false,
          superhero: action.payload,
          error: ""
        };
      case FETCH_SUPERHERO_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
