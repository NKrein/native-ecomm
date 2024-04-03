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
    backgroundColor: PALETTE.eerieBlack50
  },
  modalView: {
    margin: 20,
    backgroundColor: PALETTE.white,
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
    backgroundColor: PALETTE.white,
    borderColor: PALETTE.flame,
    borderWidth: 2,
    borderRadius: 10,
    minWidth: 40,
    minHeight: 40,
    margin: 5
  },
  modalText: {
    color: PALETTE.eerieBlack,
    marginBottom: 10
  },
  buttonText: {
    color: PALETTE.flame,
    padding: 10,
  }
});

export default ModalConfirm