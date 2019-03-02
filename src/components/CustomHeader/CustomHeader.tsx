import React from 'react';
import { Platform, View } from 'react-native';
import { Header } from 'react-navigation';

const CustomHeader = (props: any) => {
  return (
    <View
      style={[styles.container, { marginTop: Platform.OS === 'ios' ? 20 : 0 }]}
    >
      <Header {...props} />
    </View>
  );
};

const styles = {
  container: {
    height: 56,
    backgroundColor: '#F00'
  }
};

export default CustomHeader;
