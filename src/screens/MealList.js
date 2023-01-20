import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import {getMealListApiCall, getMealSearchApiCall} from '../Services';
import MealItem from '../components/MealItem';
import Header from '../components/Header';
import Search from '../components/Search';

const MealList = ({navigation, props}) => {
  const [mealData, setMealData] = useState([]);

  function updateSearch(value) {
    getMealSearchApiCall(value).then(data => {
      setMealData(data);
    });
  }
  useEffect(() => {
    getMealListApiCall().then(meals => {
      setMealData(meals);
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
