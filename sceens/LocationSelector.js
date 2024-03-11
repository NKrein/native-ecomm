import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { PALETTE } from '../utils/colorPalette'
import MapPreview from '../components/MapPreview'
import { googleAPI } from '../firebase/googleAPI'

const LocationSelector = () => {

  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [error, setError] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Se necesita permisos para acceder a la ubicacion')
        return
      }
      const { coords } = await Location.getCurrentPositionAsync({})
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`
          const response = await fetch(url_reverse_geocode)
          const data = await response.json()
          setAddress(data.results[0].formatted_address)  
        }
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Mis direcciones</Text>
      <View>
        <MapPreview location={location} />
        <Text>{address}</Text>
      </View>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

})