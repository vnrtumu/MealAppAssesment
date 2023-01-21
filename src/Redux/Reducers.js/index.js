import {combineReducers} from 'redux';
import {mealsReducer, selectedMealsReducer} from './MealReducer';

const reducers = combineReducers({
  allMeals: mealsReducer,
  meal: selectedMealsReducer,
});

export default reducers;
