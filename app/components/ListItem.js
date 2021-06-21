import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

function ListItem(props) {
  const {
    name: {first, last, username},
    email,
    imageSource,
  } = props;

  const handleOnImagePress = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.image} source={{uri: imageSource}} />
      </TouchableOpacity>
      <View style={styles.userDetailsContainer}>
        <Text>{`${first} ${last}`}</Text>
        <Text>{username}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
  },
  userDetailsContainer: {
    paddingLeft: '2%',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

export default ListItem;
