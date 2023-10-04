import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  label: string;
  color?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
});

export const Button = ({label, onPress, color}: ButtonProps) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, !!color && {backgroundColor: color}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  </View>
);
