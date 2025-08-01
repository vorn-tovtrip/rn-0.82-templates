import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const Home = () => {
  const { fonts } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={[{ fontFamily: 'OpenSans-Italic' }]}>
        Welcome to React Native 0.88
      </Text>
    </View>
  );
};

export default Home;
