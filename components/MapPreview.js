import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { googleAPI } from '../firebase/googleAPI'

const MapPreview = ({ location }) => {

  const mapPreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:%7C${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`
  
  return (
    <View style={styles.container}>
      <Text>Lat: {location.latitude}</Text>
      <Text>long: {location.longitude}</Text>
      <Image source={{ uri: mapPreviewURL }} style={styles.mapImage} resizeMode='contain' />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: 250,
    height: 250,
    borderRadius: 15,
    margin: 16
  },
})