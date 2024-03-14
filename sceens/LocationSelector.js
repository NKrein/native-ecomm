import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { PALETTE } from '../utils/colorPalette'
import MapPreview from '../components/MapPreview'
import { googleAPI } from '../firebase/googleAPI'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from '../features/authSlice'
import { usePostUserLocationMutation } from '../services/shopAPI'

const LocationSelector = () => {

  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [error, setError] = useState('')
  const [address, setAddress] = useState('')
  const dispatch = useDispatch()
  const [triggerPostAddress, result] = usePostUserLocationMutation()
  const { user } = useSelector(({ authReducer }) => authReducer.value)

  const handleLocationConfirm = () => {
    const newLocation = {
      ...location,
      address
    }
    dispatch(setUserLocation(newLocation))
    triggerPostAddress({ location: newLocation, uid: user.localId })
  }

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
  }, [location])

  return (
    <View style={styles.container}>
      <Text>Mi ubicación actual</Text>
      <MapPreview location={location} />
      <Text>{address}</Text>
      {address &&
        <Pressable style={styles.button} onPress={handleLocationConfirm}>
          <Text style={styles.buttonText}>
            Confirmar ubicación
          </Text>
        </Pressable>
      }
      <Loading isLoading={!address || result.isLoading} message={'Obteniendo ubicación...'} />
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minWidth: 40,
    minHeight: 40,
    margin: 16,
  },
  buttonText: {
    color: PALETTE.flame,
    fontFamily: 'playBold',
    fontSize: 18,
  },
})