import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
        latitude: 10.9496303,
        longitude: -74.8225348,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
    };
  }

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={this.state.region}
        showsUserLocation={true}
        onMapReady={this.onMapReady}
        onRegionChangeComplete={this.onRegionChange}>
        <MapView.Marker
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
          title={'Mi casa'}
          draggable
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 100,
    flex: 1,
  },
});
