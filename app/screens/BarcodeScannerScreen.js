import { Dialog } from '@rneui/themed';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';

const BarcodeScan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [barValue, setBarValue] = useState('');
  const [barType, setBarType] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [inventory, setInventory] = useState([]);

  const cameraRef = useRef(null);

  useEffect(() => {
    const requestCameraPermissions = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      } catch (error) {
        // Handle any errors that occurred during permission request
        console.error(error);
      }
    };

    requestCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setBarValue(data);
    setBarType(type);
    setShowDialog(true);
  };

  const handleAddToInventory = () => {
    setInventory((prevInventory) => [
      ...prevInventory,
      { data: barValue, type: barType },
    ]);
    setShowDialog(false);
  };

  useEffect(() => {
    return () => {
      // Clean up the camera component when the component is unmounted
      if (cameraRef.current) {
        cameraRef.current.pausePreview();
        cameraRef.current.release();
      }
    };
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        flashMode={flash}
        onBarCodeScanned={showDialog ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
      />
      <Button
        title={`Flash ${
          flash === Camera.Constants.FlashMode.torch ? 'OFF' : 'ON'
        }`}
        onPress={() =>
          setFlash(
            flash === Camera.Constants.FlashMode.torch
              ? Camera.Constants.FlashMode.off
              : Camera.Constants.FlashMode.torch,
          )
        }
      />
      <Dialog
        isVisible={showDialog}
        onBackdropPress={() => setShowDialog(false)}
      >
        <Dialog.Title
          titleStyle={{ color: '#000', fontSize: 25 }}
          title="Scanned Barcode:"
        />
        <Text style={{ color: '#000', fontSize: 20 }}>
          {`Data: ${barValue}\nFormat: ${barType}`}
        </Text>
        <Dialog.Actions>
          <Dialog.Button
            title="Add to Inventory"
            onPress={handleAddToInventory}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  iconButtonHomeContainer: { marginRight: 10 },
  titleButtonHome: {
    fontWeight: '700',
    fontSize: 25,
  },
  buttonHome: {
    backgroundColor: '#0C8E4E',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
    height: 100,
  },
  buttonHomeContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 20,
  },
});

export default BarcodeScan;
