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
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

const MyButton = ({label, onPress, color}: ButtonProps) => {
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

export default MyButton;
