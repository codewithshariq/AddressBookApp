import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

function UserDetailsModal(props) {
  const renderCancelButton = () => {
    return (
      <View style={{position: 'absolute', top: 0, right: 0, padding: 15}}>
        <TouchableOpacity onPress={props.closeModal}>
          <Icon name="close" size={20} color="#000000" />
        </TouchableOpacity>
      </View>
    );
  };

  const {
    location: {street, city, state, postcode},
  } = props;
  const {phone, cell, showModal} = props;

  return (
    <Modal isVisible={showModal}>
      <View style={styles.container}>
        {renderCancelButton()}
        <Text style={styles.heading}>{`User's Details`}</Text>
        <Text style={styles.text}>{`Street: ${street.name}`}</Text>
        <Text style={styles.text}>{`City: ${city}`}</Text>
        <Text style={styles.text}>{`State: ${state}`}</Text>
        <Text style={styles.text}>{`Postcode: ${postcode}`}</Text>
        <Text style={styles.text}>{`Phone: ${phone}`}</Text>
        <Text style={styles.text}>{`Cell: ${cell}`}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    height: '40%',
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 1.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  heading: {
    alignSelf: 'center',
    paddingVertical: 15,
    fontSize: 22,
    fontWeight: '700',
  },
  text: {
    fontSize: 15,
    paddingBottom: 10,
  },
});

export default UserDetailsModal;
