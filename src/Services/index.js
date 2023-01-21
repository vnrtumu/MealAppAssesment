import axios from 'axios';

/* ======== Meal Api Call ==========*/
export const getMealListApiCall = async () => {
  const res = await axios.get(
    'https://www.themealdb.com/api/json/v1/1/search.php?s',
  );
  return res.data.meals;
};

/* ======== Meal Detail Api Service ==========*/
export const getMealDetailApiCall = async id => {
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  return res.data.meals;
};

/* ======== Meal Search Api Service ==========*/
export const getMealSearchApiCall = async value => {
  if (value) {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`,
    );
    return res.data.meals;
  } else {
    const res = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s',
    );
    return res.data.meals;
  }
};
