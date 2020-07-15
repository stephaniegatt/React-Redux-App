import axios from "axios";

export const FETCH_SUPERHERO_START = "FETCH_SUPERHERO_START";
export const FETCH_SUPERHERO_SUCCESS = "FETCH_SUPERHERO_SUCCESS";
export const FETCH_SUPERHERO_FAILURE = "FETCH_SUPERHERO_FAILURE";

export const fetchSuperhero = (id) => {
    return dispatch => {
      dispatch({ type: FETCH_SUPERHERO_START });
      axios
        .get(`https://www.superheroapi.com/api.php/10116291001244763/${id}`)
        .then(res => {
          dispatch({ type: FETCH_SUPERHERO_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: FETCH_SUPERHERO_FAILURE, payload: err.message });
        });
    };
  };
  