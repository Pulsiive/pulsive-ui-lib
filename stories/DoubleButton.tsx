import React from 'react';
import {StyleSheet, View} from 'react-native';

export type DoubleButtonProps = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  DoubleButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const DoubleButton = ({children}: DoubleButtonProps) => {
  return <View style={styles.DoubleButton}>{children}</View>;
};

export default DoubleButton;
