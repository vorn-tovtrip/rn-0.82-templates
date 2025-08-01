import { View, Text } from 'react-native';
import React from 'react';
import UserList from '@components/UserList';

const HomeDetail = () => {
  return (
    <View style={{ flex: 1 }}>
      <UserList />
    </View>
  );
};

export default HomeDetail;
