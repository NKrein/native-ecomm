import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { PALETTE } from '../utils/colorPalette'
import locationIcon from '../../assets/icons/icon-location-flame.png'
import MapPreview from '../components/MapPreview'

const LocationView = ({ navigation }) => {

  const { userLocation } = useSelector(({ authReducer }) => authReducer.value)

  if (!userLocation) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Aun no hay dirección guardada.</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('LocationSelector')}>
          <Text style={styles.buttonText}>
            Agregar nueva dirección
          </Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mi dirección</Text>
      <View style={styles.cardContainer}>
        <MapPreview 
          location={userLocation} 
          imageResizeMode='cover'
          mapZoom={15}
          style={{ width: '30%', height: 150 }} />
        <View style={styles.addressDetailsContainer}>
          <Image style={styles.icon} source={locationIcon} resizeMode='contain' />
          {userLocation.address.split(', ').map((item, idx) => (
            <Text key={item} style={{ ...styles.cardText, fontSize: 20 - (idx * 2) }}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('LocationSelector')}>
        <Text style={styles.buttonText}>
          Editar
        </Text>
      </Pressable>
    </View>
  )
}

export default LocationView

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
    minWidth: 250,
    minHeight: 40,
    margin: 16,
  },
  buttonText: {
    color: PALETTE.flame,
    fontFamily: 'playBold',
    fontSize: 18,
  },
  heading: {
    color: PALETTE.eerieBlack,
    fontFamily: 'playRegular',
    fontSize: 26,
    margin: 16,
  },
  cardContainer: {
    backgroundColor: PALETTE.timberwolf,
    borderRadius: 10,
    width: '90%',
    marginHorizontal: '5%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    color: PALETTE.eerieBlack,
    fontFamily: 'playRegular',
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    margin: 16,
  },
  addressDetailsContainer: {
    paddingHorizontal: 16,
  }
})