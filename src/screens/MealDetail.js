import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import {getMealDetailApiCall} from '../Services';

const MealDetailScreen = ({route, navigation, props}) => {
  const [mealDetail, setMealDetail] = useState({});
  const [loaded, setLoaded] = useState(true);

  const {mealId, mealTitle} = route.params;

  useEffect(() => {
    getMealDetailApiCall(mealId).then(mealData => {
      console.log('Meal Array', mealData);
      setMealDetail(mealData[0]);
      setLoaded(true);
    });
  }, [mealId]);

  return (
    <React.Fragment>
      {loaded && (
        <SafeAreaView style={styles.mainWrapper}>
          <Header
            value={mealTitle}
            icon="true"
            onPress={() => navigation.goBack()}
          />
          <ScrollView style={styles.subWrap}>
            <Image
              source={{
                uri: mealDetail.strMealThumb,
              }}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={{color: '#fff'}}>{mealDetail.strMeal}</Text>
              <Text style={{color: '#fff'}}>{mealDetail.strCategory}</Text>
              <Text style={{color: '#fff'}}>{mealDetail.strArea}</Text>
            </View>

            <View>
              <View style={styles.instructWrap}>
                <Text style={styles.IngridientHeading}>Instructions</Text>
                <Text style={styles.preparation}>
                  {mealDetail.strInstructions}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
      {!loaded && (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  subWrap: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  IngridientHeading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  instructWrap: {
    marginBottom: 20,
  },
  preparation: {
    marginTop: 10,
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '600',
    lineHeight: 25,
    marginBottom: 20,
  },
});

export default MealDetailScreen;
