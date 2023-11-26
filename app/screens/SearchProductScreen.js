import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchProduct = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]); // Adjust the type as per your actual product data type

  const handleSearch = async () => {
    try {
      const searchResult = await fetch(
        `http://192.168.1.203:3000/product/search/?name=${searchQuery}`,
      );

      if (searchResult.ok) {
        const jsonResponse = await searchResult.json();
        setSearchResults(jsonResponse);
      } else {
        console.error('Error fetching search results');
      }
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search Products</Text>
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Search Product"
          underlineColorAndroid="transparent"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      {searchResults.map((product) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B3B98',
  },
  header: {
    backgroundColor: '#474787',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  searchSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#786fa6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
