import { LegendList, LegendListRef, useRecyclingState } from '@legendapp/list';
import { useRef, useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, useTheme } from 'react-native-paper';
const data = Array.from({ length: 1000 }, (_, index) => index);
const UserList = () => {
  const listRef = useRef<LegendListRef | null>(null);
  const { colors, fonts } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item, index }: { item: number; index: number }) => {
    const [toggle, setToggle] = useRecyclingState(false);

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={{
            backgroundColor:
              index % 2 === 0 ? colors.backdrop : colors.backdrop,
            marginVertical: 1,
            padding: 10,
          }}
        >
          <Text style={[fonts.titleMedium]}>Title</Text>
          <Text style={[fonts.labelSmall]}>Lorem ipsum dolor</Text>

          <Button
            onPress={() => {
              setToggle(!toggle);
            }}
          >
            {!toggle ? 'Open' : 'Close'}
          </Button>

          {toggle && (
            <Text style={[fonts.bodySmall]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Adipisci, vitae pariatur suscipit deserunt aliquam ab dolorem eos
              blanditiis quisquam. Dolor deleniti laudantium itaque excepturi
              recusandae nulla ex iusto facilis eius!
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <LegendList
        // Required Props
        data={data}
        style={{ flex: 1 }}
        renderItem={renderItem}
        // Recommended props (Improves performance)
        keyExtractor={(_, index) => index.toString()}
        recycleItems={true}
        contentContainerStyle={{ gap: 12 }}
        // Recommended if data can change
        maintainVisibleContentPosition
        ref={listRef}
      />
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default UserList;
