import {
  GET_TECHS,
  DELETE_TECH,
  TECHS_ERROR,
  ADD_TECH,
  SET_LOADING
} from "../actions/types";
import { setLoading } from "./techActions";

//get technicians
export const getTechs = () => async dispatch => {
  try {
    setLoadings();
    const res = await fetch("./techs");
    const data = await res.json();
    return dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    return dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// add technicians
export const addTech = tech => async dispatch => {
  try {
    setLoadings();
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "Application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

//delete technicians
export const deleteTech = id => async dispatch => {
  try {
    setLoadings();
    await fetch(`/techs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data
    });
  }
};

//set loading
export const setLoadings = () => {
  return {
    type: SET_LOADING
  };
};
