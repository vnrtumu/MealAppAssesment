import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet, Alert} from 'react-native';

import {getMealListApiCall, getMealSearchApiCall} from '../Services';
import MealItem from '../components/MealItem';
import Header from '../components/Header';
import Search from '../components/Search';
import {useDispatch, useSelector} from 'react-redux';

import {setMeals} from '../Redux/Actions.js/MealActions';

const MealList = ({navigation, props}) => {
  const mealData = useSelector(state => state.allMeals.meals);

  const dispatch = useDispatch();

  function updateSearch(value) {
    getMealSearchApiCall(value)
      .then(data => {
        dispatch(setMeals(data));
      })
      .catch(err => {
        Alert.alert('Server Issue', err);
      });
  }

  useEffect(() => {
    getMealListApiCall()
      .then(meals => {
        dispatch(setMeals(meals));
      })
      .catch(err => {
        Alert.alert('Server Issue', err);
      });
  }, []);

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.strMeal}
        url={itemData.item.strMealThumb}
        category={itemData.item.strCategory}
        area={itemData.item.strArea}
        onSelectMeal={() => {
          navigation.navigate('Detail', {
            mealId: itemData.item.idMeal,
            mealTitle: itemData.item.strMeal,
          });
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mailWrapper}>
      <View style={styles.list}>
        <Header value="Meals App" />
        <Search updateSearch={updateSearch} />
        <FlatList
          data={mealData}
          keyExtractor={item => item.idMeal}
          renderItem={renderMealItem}
          style={{width: '100%'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mailWrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
