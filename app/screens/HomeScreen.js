import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import userServices from '../api/UserServices';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';

function HomeScreen(props) {
  const dispatch = useDispatch;

  useEffect(function () {
    const getUserData = async () => {
      try {
        const {
          result: {data},
        } = await userServices.fetchUsers();
        dispatch({users: data.results});
      } catch (err) {}
    };

    getUserData();
  });

  const users = useSelector(state => state.users);

  return (
    <View style={styles.container}>
      <FlatList></FlatList>
      <ListItem
        name={{first: 'Shariq', last: 'Khan', username: 'shariq123'}}
        email={'shariq@gmail.com'}
        imageSource={'https://picsum.photos/200/300'}
      />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;
