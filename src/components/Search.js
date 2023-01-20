import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({value, updateSearch, style}) => {
  const [query, setQuery] = useState();
  const [error, setError] = useState();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Icon name="search" size={25} color="#000" />
        </View>
        <TextInput
          value={query}
          placeholder="Search"
          style={styles.textInput}
          onChangeText={text => {
            var letters = /^$|^[a-zA-Z._\b ]+$/;
            if (text.length > 20) setError('Query too long.');
            else if (text.match(letters)) {
              setQuery(text);
              updateSearch(text);
              if (error) setError(false);
            } else setError('Please only enter alphabets');
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txtError: {
    marginTop: '2%',
    width: '89%',
    color: 'white',
  },
  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 25,
    marginTop: 10,
  },
  container: {
    alignItems: 'center',
  },
});

export default Search;
