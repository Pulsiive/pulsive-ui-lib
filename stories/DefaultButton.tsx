import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  label: string;
  color?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 9,
    flexGrow: 0,
    backgroundColor: '#81cd2c',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

const DefaultButton = ({label, onPress, color}: ButtonProps) => {
  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, !!color && {backgroundColor: color}]}
          onPress={onPress}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DefaultButton;
