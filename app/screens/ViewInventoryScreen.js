import React from 'react';
import { FlatList, Text, View } from 'react-native';

const ViewInventory = ({ product, getProduct }) => {
  return (
    <View>
      <Text>Product Inventory:</Text>
      <FlatList
        data={product}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ product }) => (
          <View>
            <Text>{`Name: ${product.name}, Quantity: ${product.quantity}, Price: ${product.price}, Barcode: ${product.barcode}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ViewInventory;
