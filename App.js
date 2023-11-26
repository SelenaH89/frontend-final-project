import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import AddProductScreen from './app/screens/AddProductScreen';
import LoginScreen from './app/screens/auth/LoginScreen';
import RegistrationScreen from './app/screens/auth/RegistrationScreen';
import BarcodeScannerScreen from './app/screens/BarcodeScannerScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import DeleteProductScreen from './app/screens/DeleteProductScreen';
import SearchProductScreen from './app/screens/SearchProductScreen';
import ViewInventoryScreen from './app/screens/ViewInventoryScreen';
import store from './app/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
          />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />

          <Stack.Screen
            name="BarcodeScannerScreen"
            component={BarcodeScannerScreen}
          />

          <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
          <Stack.Screen
            name="ViewInventoryScreen"
            component={ViewInventoryScreen}
          />
          <Stack.Screen name="SearchProduct" component={SearchProductScreen} />
          <Stack.Screen
            name="DeleteProductScreen"
            component={DeleteProductScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
