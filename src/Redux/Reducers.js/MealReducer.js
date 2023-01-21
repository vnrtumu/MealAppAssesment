import {ActionTypes} from '../constants/ActionTypes';
const intialState = {
  meals: [],
};

export const mealsReducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_MEALS:
      return {...state, meals: payload};
    default:
      return state;
  }
};

export const selectedMealsReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_MEAL:
      return {...state, ...payload};
    default:
      return state;
  }
};
