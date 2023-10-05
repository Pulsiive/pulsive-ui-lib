import React from 'react';
import {StyleSheet, View} from 'react-native';

export type DoubleButtonProps = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  DoubleButton: {
    display: 'flex',
    flexDirection: 'row',
    width: '27%',
    justifyContent: 'space-between',
  },
  DoubleButtonContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
});

const DoubleButton = ({children}: DoubleButtonProps) => {
  return (
    <View style={styles.DoubleButtonContainer}>
      <View style={styles.DoubleButton}>{children}</View>
    </View>
  );
};

export default DoubleButton;
