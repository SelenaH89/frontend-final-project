import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the backend when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.203:3000/product/inventory',
      );
      const productList = response.data;
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `http://192.168.1.203:3000/product/delete/${productId}`,
      );
      // Refresh the list of products after deletion
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Text>{item.name}</Text>
      {/* Add a delete button for each product */}
      <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
        <Text style={{ color: 'red' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text>Product List:</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Products;
