import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView,{Marker} from "react-native-maps"

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={{height:500,width:400}} initialRegion={{latitude:27.7215,longitude:85.32,longitudeDelta:0.0921,latitudeDelta:0.0921}}>

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
