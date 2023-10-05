import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type BoxProps = {
  onPress: () => void;
  label: string;
  color?: string;
};

const styles = StyleSheet.create({
  BoxText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  Box: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 100,
    height: 60,
    borderRadius: 4,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  BoxContainer: {
    flex: 1,
    display: 'flex',
  },
});

const Box = ({label}: BoxProps) => {
  return (
    <View style={styles.BoxContainer}>
      <View style={styles.Box}>
        <Text style={styles.BoxText}>{label}</Text>
      </View>
    </View>
  );
};

export default Box;
