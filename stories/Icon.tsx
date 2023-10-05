import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';

export type IconProps = {
  onPress: () => void;
  src: string;
};

const styles = StyleSheet.create({
  Icon: {
    width: 20,
    height: 33,
    resizeMode: 'contain',
  },
  IconContainer: {
    alignItems: 'center',
  },
});

const Icon = ({src, onPress}: IconProps) => {
  return (
    <View style={styles.IconContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.Icon} source={src} />
      </TouchableOpacity>
    </View>
  );
};

export default Icon;
