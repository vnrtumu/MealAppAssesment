import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation, onPress, value, icon}) => {
  return (
    <View>
      {icon === 'true' ? (
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={onPress}>
            <Icon name="arrow-back" size={30} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{value}</Text>
        </View>
      ) : (
        <View style={styles.headerFalseContainer}>
          <Text style={styles.headerFalseText}>{value}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    // justifyContent: 'center',
  },
  headerFalseContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  headerFalseText: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 70,
  },
});

export default Header;
