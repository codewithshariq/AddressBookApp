import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersData, appendUserData} from '../redux/actions';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import {createSelector} from 'reselect';
import UserDetailsModal from '../components/UserDetailsModal';
import _ from 'lodash';
import SettingsButton from '../components/SettingsButton';

const selectUsers = createSelector(
  state => state.users,
  users => users,
);

function HomeScreen(props) {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getUsersData());
  }, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: 'Home Page',
      headerRight: () => (
        <SettingsButton
          naviagteToSettings={() => props.navigation.navigate('Settings')}
        />
      ),
      headerRightContainerStyle: {
        paddingRight: 15,
      },
    });
  }, [props.navigation]);

  const dummyProps = {
    location: {
      street: '',
      city: '',
      state: '',
    },
    cell: '',
    phone: '',
  };

  const usersData = useSelector(selectUsers);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState(dummyProps);
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
        data={usersData}
        renderItem={renderUsersData}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={item => item.login.uuid}
        onEndReached={() => {
          !searchText && dispatch(appendUserData());
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
