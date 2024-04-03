import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import * as Location from 'expo-location'
import { PALETTE } from '../utils/colorPalette'
import MapPreview from '../components/MapPreview'
import { googleAPI } from '../firebase/googleAPI'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from '../features/authSlice'
import { usePostUserLocationMutation } from '../services/shopAPI'
import editIcon from '../../assets/icons/icon-edit-flame.png'
import { Toast } from 'toastify-react-native'

const LocationSelector = ({ navigation }) => {

  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [error, setError] = useState('')
  const [address, setAddress] = useState('')
  const dispatch = useDispatch()
  const [triggerPostAddress, result] = usePostUserLocationMutation()
  const { user } = useSelector(({ authReducer }) => authReducer.value)
  const inputRef = useRef()

  const handleLocationConfirm = async () => {
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

  useEffect(() => {
    if (result.isError) {
      console.error(result.error)
      Toast.error('Error al guardar la nueva dirección.\nIntente nuevamente.')
    }
    if (result.isSuccess) {
      Toast.success('Dirección actualizada con éxito.')
      navigation.goBack()
    }
  }, [result])
  

  return (
    <ScrollView 
      keyboardShouldPersistTaps="handled" 
      scrollEnabled={false}
      style={{ flex: 1, width: '100%', backgroundColor: PALETTE.white }} 
      contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Ubicación actual</Text>
        <MapPreview location={location} />
        <View style={styles.inputGroup}>
          <TextInput multiline={true} style={styles.input} onChangeText={setAddress} ref={inputRef}>
            {address}
          </TextInput>
          <Pressable onPress={() => inputRef.current.focus()}>
            <Image style={styles.icon} source={editIcon} resizeMode='contain' />
          </Pressable>
        </View>
        {address &&
          <Pressable style={styles.button} onPress={handleLocationConfirm}>
            <Text style={styles.buttonText}>
              Confirmar ubicación
            </Text>
          </Pressable>
        }
      </View>
      <Loading isLoading={!address || result.isLoading} message={'Obteniendo ubicación...'} />
    </ScrollView>
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
  heading: {
    fontFamily: 'playBold',
    fontSize: 28,
    marginBottom: 16,
    color:PALETTE.white,
  },
  card: {
    flex: 1,
    width: '90%',
    marginHorizontal: '5%',
    backgroundColor: PALETTE.timberwolf,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minWidth: 250,
    minHeight: 40,
    margin: 16,
  },
  buttonText: {
    color: PALETTE.flame,
    fontFamily: 'playBold',
    fontSize: 18,
  },
  inputGroup: {
    flexDirection: 'row',
    backgroundColor: PALETTE.white,
    width: '90%',
    marginTop: 16,
    borderRadius: 10,
  },
  input: {
    margin: 8,
    width: '80%'
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    margin: 16,
  },
})