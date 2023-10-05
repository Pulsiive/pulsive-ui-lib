import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  label: string;
  color?: string;
  second?: boolean;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 9,
    flexGrow: 0,
    backgroundColor: '#81cd2c',
  },
  secondButton: {
    paddingVertical: 12,
    paddingHorizontal: 111,
    borderRadius: 9,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#ffffff1a',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  secondContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

const DefaultButton = ({label, onPress, color, second}: ButtonProps) => {
  if (second) {
    return (
      <View style={styles.secondContainer}>
        <TouchableOpacity
          style={styles.secondButton}
          onPress={onPress}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, !!color && {backgroundColor: color}]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DefaultButton;
