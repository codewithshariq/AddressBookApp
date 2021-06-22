import React, {memo, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {COLORS} from '../utils/constants';

function ListItem(props) {
  const {
    name: {first, last},
    login,
    email,
    picture,
    location,
    cell,
    phone,
  } = props;

  const handleOnImagePress = () => {
    props.renderUserDetailsModal({location, cell, phone}, true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnImagePress}>
        <Image style={styles.image} source={{uri: picture.thumbnail}} />
      </TouchableOpacity>
      <View style={styles.userDetailsContainer}>
        <Text style={styles.name}>{`${first} ${last}`}</Text>
        <Text style={styles.details}>{login.username}</Text>
        <Text style={styles.details}>{email}</Text>
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
  name: {
    fontSize: 18,
  },
  details: {
    fontSize: 13,
    color: COLORS.GREY_TEXT,
  },
});

export default memo(ListItem);
