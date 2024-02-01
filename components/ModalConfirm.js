import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { PALETTE } from "../utils/colorPalette";

const ModalConfirm = ({ selectedItem, handleModalClose, handleRemove }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={Boolean(selectedItem.id)}
      onRequestClose={handleModalClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Confirmar borrado</Text>
          <View style={styles.buttonBox}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={() => handleRemove(selectedItem.id)}>Si</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={handleModalClose}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: PALETTE.richBlack50
  },
  modalView: {
    margin: 20,
    backgroundColor: PALETTE.airBlue,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  buttonBox: {
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.richBlack50,
    borderRadius: 10,
    width: 30,
    height: 30,
    margin: 5
  },
  modalText: {
    color: PALETTE.richBlack,
  },
  buttonText: {
    color: PALETTE.airBlue,
  }
});

export default ModalConfirm