import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PALETTE } from '../utils/colorPalette'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage } from '../features/authSlice';
import { usePostProfileImageMutation } from '../services/shopAPI';

const ImageSelector = ({ navigation }) => {

  const { user, profileImage } = useSelector(({ authReducer }) => authReducer.value)
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()

  const verifyCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    return Boolean(granted)
  }

  const verifyGalleryPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    return Boolean(granted)
  }

  const handleCameraPick = async () => {
    const permission = await verifyCameraPermission()
    if (permission) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      })
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const handleGalleryPick = async () => {
    const permission = await verifyGalleryPermission()
    if (permission) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      })
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const handleConfirm = () => {
    triggerSaveProfileImage({ image, uid: user.localId})
    dispatch(setProfileImage(image))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {(image || profileImage)
          ? <Image source={{ uri: image || profileImage }} style={styles.image} resizeMode='contain' />
          : <Text style={styles.imageText}>No se seleccionó ninguna imagen aún.</Text>
        }
      </View>
      <Pressable style={styles.button} onPress={handleCameraPick}>
        <Text style={styles.buttonText}>Abrir cámara</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleGalleryPick}>
        <Text style={styles.buttonText}>Seleccionar de la galería</Text>
      </Pressable>
      {image &&
        <Pressable style={styles.button} onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirmar cambios</Text>
        </Pressable>
      }
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: PALETTE.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
    backgroundColor: PALETTE.flame50,
    borderColor: PALETTE.flame80,
    borderWidth: 3,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16
  },
  image: {
    height: 194,
    width: 194,
    borderRadius: 12,
  },
  imageText: {
    color: PALETTE.eerieBlack,
    fontFamily: 'playRegular',
    width: '90%',
    textAlign: 'center'
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
    width: '70%',
  },
  buttonText: {
    color: PALETTE.flame,
    fontFamily: 'playBold',
    fontSize: 18,
    textAlign: 'center'
  },
})