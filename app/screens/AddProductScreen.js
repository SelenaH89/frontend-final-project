import axios from 'axios';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddProduct = ({ navigation }) => {
  const [productDetails, setProductDetails] = useState({
    name: '',
    quantity: '',
    price: '',
    barcode: '',
  });

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.203:3000/product/add',
        productDetails,
      );

      const addedProduct = response.data;

      console.log('Product added successfully:', addedProduct);

      navigation.navigate('SearchProductScreen');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleBarcodeScanner = () => {
    navigation.navigate('BarcodeScannerScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Product Details</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Product</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setProductDetails({ ...productDetails, name: text })
          }
          value={productDetails.name}
          placeholder="Name"
        />
        <Text style={styles.label}>Quantity</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setProductDetails({ ...productDetails, quantity: text })
          }
          value={productDetails.quantity}
          placeholder="Quantity"
        />
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setProductDetails({ ...productDetails, price: text })
          }
          value={productDetails.price}
          placeholder="$0.00"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Barcode</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setProductDetails({ ...productDetails, barcode: text })
          }
          value={productDetails.barcode}
          placeholder="Barcode/QR Code Number"
        />
        <TouchableOpacity style={styles.button} onPress={handleBarcodeScanner}>
          <Text style={styles.buttonText}>Scan Barcode/QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B3B98',
  },
  header: {
    backgroundColor: '#474787',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Cursive',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    color: '#fff',
    height: 40,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#786fa6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AddProduct;
