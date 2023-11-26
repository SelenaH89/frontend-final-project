import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';

const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <TouchableOpacity
        style={[styles.button, styles.addButton]}
        onPress={() => navigation.navigate('AddProductScreen')}
      >
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.deleteButton]}
        onPress={() => navigation.navigate('DeleteProductScreen')}
      >
        <Text style={styles.buttonText}>Delete Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.viewButton]}
        onPress={() => navigation.navigate('ViewProductScreen')}
      >
        <Text style={styles.buttonText}>View Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.inventoryButton]}
        onPress={() => navigation.navigate('ViewInventoryScreen')}
      >
        <Text style={styles.buttonText}>View Inventory</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  welcomeText: {
    fontSize: 22,
    color: 'orange',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    padding: 20,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#8e44ad',
  },
  deleteButton: {
    backgroundColor: '#f39c12',
  },
  viewButton: {
    backgroundColor: '#3498db',
  },
  inventoryButton: {
    backgroundColor: '#2ecc71',
  },
  logoutButton: {
    backgroundColor: '#c0392b',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DashboardScreen;
