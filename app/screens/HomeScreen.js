import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersData, appendUserData} from '../redux/operators';
import ListItem from '../components/HomeScreen/ListItem';
import SearchBar from '../components/HomeScreen/SearchBar';
import {createSelector} from 'reselect';
import UserDetailsModal from '../components/HomeScreen/UserDetailsModal';
import _ from 'lodash';
import SettingsButton from '../components/HomeScreen/SettingsButton';
import {useIsFocused} from '@react-navigation/native';

const selectUsers = createSelector(
  state => state.users,
  users => users,
);

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(
    function () {
      isFocused && dispatch(getUsersData());
    },
    [isFocused],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home Page',
      headerRight: () => (
        <SettingsButton
          naviagteToSettings={() => navigation.navigate('Settings')}
        />
      ),
      headerRightContainerStyle: {
        paddingRight: 15,
      },
    });
  }, [navigation]);

  const initialProps = {
    location: {
      street: '',
      city: '',
      state: '',
    },
    cell: '',
    phone: '',
  };

  const users = useSelector(selectUsers);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState(initialProps);
  const [searchText, setSearchText] = useState('');

  const renderUserDetailsModal = (modalProps, isModalVisible) => {
    setShowModal(isModalVisible);
    setModalProps(modalProps);
  };

  const renderUsersData = ({item}) => {
    return (
      <ListItem {...item} renderUserDetailsModal={renderUserDetailsModal} />
    );
  };

  const handleSearch = text => {
    setSearchText(text);
    const formattedQuery = text.toLowerCase();
    dispatch(getUsersData({formattedQuery}));
  };

  return (
    <View style={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      <FlatList
        refreshing={users.status === 'idle' || users.status === 'pending'}
        data={users.data}
        renderItem={renderUsersData}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={item => {
          return item.login.uuid;
        }}
        onEndReached={() => {
          !searchText && users.length < 1000 && dispatch(appendUserData());
        }}
      />
      <UserDetailsModal
        {...modalProps}
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  seperator: {
    height: 8,
  },
});

export default HomeScreen;
