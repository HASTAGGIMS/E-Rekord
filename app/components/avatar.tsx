import React from 'react';
import { Image, ImageStyle, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { styles } from '../../auth.styles';
import { COLORS } from '../../constants/Themes';
const placeholder = require('../../assets/images/empty-photo.png');

interface AvatarProps {
  uri?: string| null;
  style?: ViewStyle | ViewStyle[];
  imgStyle?: ImageStyle | ImageStyle[];
  onPress?: () => void;
  onButtonPress?: () => void;
  aviOnly?: boolean;
}
const Avatar: React.FC<AvatarProps> = ({
  uri,
  style,
  imgStyle,
  onPress,
  onButtonPress,
  aviOnly = false,
  ...props
}) => {
  return (
    <View style={[styles.addPhotoImage, style]} {...props}>
      <TouchableOpacity 
        onPress={onButtonPress || onPress} 
        disabled={!(onButtonPress || onPress)}
      >
        <Image 
          source={uri ? { uri } : placeholder}
          style={[
            styless.image,
            aviOnly && styless.aviOnly,
            imgStyle
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

const styless = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  aviOnly: {
    height: 35,
    width: 35,
    borderWidth: 0,
  }
})

export default Avatar;