import { Image, StyleSheet, View } from 'react-native'
import beanIcon from '../assets/icons/icon-coffee-bean.png' // cambiar svg por png
import beanIconSolid from '../assets/icons/icon-coffee-bean-solid.png' // cambiar svg por png

const LevelIndicator = ({ level = 0, max }) => {
  const roastLevel = []
  for (let i = 0; i <= (max - 1); i++) {
    roastLevel[i] = (i < level) ? beanIconSolid : beanIcon
  }
  return (
    <View style={styles.container}>
      {roastLevel.map((source, i) => {
        return <Image key={i} source={source} style={styles.icon} alt='coffee icon' />
      })}
    </View>
  )
}

export default LevelIndicator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  }
})