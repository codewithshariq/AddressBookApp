import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {getUsersData} from '../redux/actions';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import {createSelector} from 'reselect';
import UserDetailsModal from '../components/UserDetailsModal';
import _ from 'lodash';
import {updateData} from '../redux/reducers/Users';

const selectUsers = createSelector(
  state => state.users,
  users => users,
);

function HomeScreen(props) {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getUsersData());
  }, []);

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
    const formattedQuery = text.toLowerCase();

    const data = _.filter(usersData, user => {
      return contains(user, formattedQuery);
    });
    dispatch(updateData({users: data}));
  };

  const contains = ({name, email}, query) => {
    const {first, last} = name;

    if (
      first.includes(query) ||
      last.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }

    return false;
  };

  console.log('This is usersData', usersData);

  return (
    <View style={styles.container}>
      <SearchBar handleSearch={handleSearch} />
      <FlatList
        data={usersData}
        renderItem={renderUsersData}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={item => item.login.uuid}
        // onEndReached={() => dispatch(getUsersData())}
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
