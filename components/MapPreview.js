import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { googleAPI } from '../firebase/googleAPI'

const MapPreview = ({ location, style, imageResizeMode = 'contain', mapZoom=13 }) => {

  const mapPreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=${mapZoom}&size=300x300&maptype=roadmap&markers=color:blue%7Clabel:%7C${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`

  return (
    <View style={{ ...styles.container, ...style }}>
      <Image source={{ uri: mapPreviewURL }} style={styles.mapImage} resizeMode={imageResizeMode} />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
})