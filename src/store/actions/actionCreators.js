import * as actionTypes from './actionTypes';
import axios from 'axios';

export const plantsFetched = () => {

  return dispatch => {
    axios.get('https://garden-planner-api.herokuapp.com/api/plants')
    .then(response => {
      dispatch({type: actionTypes.PLANTS_FETCH, plants: response.data})
    })
  }
}

export const sizeSave = (dimensions, planName) => {
  return dispatch => {
    dispatch({type: actionTypes.SIZE_SAVE, dimensions: dimensions, planName: planName})
  }
}

export const allPlansFetched = (userId) => {
  let url = 'https://garden-planner-api.herokuapp.com/api/plans/' + userId
  return dispatch => {
    axios.get(url)
    .then(response => {
      dispatch({type: actionTypes.PLANS_FETCH, plans: response.data})
    })
  }
}

export const onePlanFetched = (plan) => {
  return dispatch =>
      dispatch({type: actionTypes.PLAN_FETCH, plan: plan})
}

export const newPlan = () => {
  return dispatch =>
  dispatch({ type: actionTypes.NEW_PLAN })
}

export const planPopup = () => {
  return dispatch => dispatch({ type: actionTypes.PLAN_POPUP })
}
