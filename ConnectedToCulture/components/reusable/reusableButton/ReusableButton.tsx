import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import COLORS from '../../../constants/theme';
import {Dimensions} from 'react-native';
// Get the dimensions of the screen
const windowHeight = Dimensions.get('window').height;

interface Props {
  onPress: () => void;
  btnText: string;
  textColor: string | keyof typeof COLORS;
  width: any;
  backgroundColor: string | keyof typeof COLORS;
  borderWidth: number;
  borderColor: string | keyof typeof COLORS | undefined;
  paddingHorizantal: number;
  paddingVertical: number;
  size: number;
  borderRadius: number;
  alignItems: string;
  disabled: boolean;
}

const ResuableButton: React.FC<Props> = ({
  onPress,
  btnText,
  textColor,
  width,
  backgroundColor,
  borderWidth = 1,
  borderColor,
  paddingHorizantal,
  paddingVertical,
  size,
  borderRadius,
  alignItems,
  disabled = false,
}) => {
  const defaultBorderColor =
    typeof borderColor === 'undefined' ? backgroundColor : borderColor;

  const btnTextStyle: TextStyle = {
    fontFamily: 'Almarai',
    fontSize: size,
    color: typeof textColor === 'string' ? textColor : COLORS[textColor],
  };

  const btnContainerStyle: ViewStyle = {
    width: width,
    backgroundColor:
      typeof backgroundColor === 'string'
        ? backgroundColor
        : COLORS[backgroundColor],
    alignItems: alignItems || 'center',
    justifyContent: 'center',
    height: 'auto',
    borderRadius: borderRadius || 5,
    borderColor:
      typeof defaultBorderColor === 'string'
        ? defaultBorderColor
        : COLORS[defaultBorderColor],
    borderWidth: borderWidth,
    paddingHorizontal: paddingHorizantal,
    paddingVertical: paddingVertical,
  };

  return (
    <View
      // pointerEvents={disabled ? 'none' : 'auto'}
      style={disabled ? {opacity: 0.5} : {}}>
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        style={btnContainerStyle}
        activeOpacity={disabled ? 1 : 0.2} // Ensure no change in opacity when disabled
      >
        <Text style={btnTextStyle}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ResuableButton;
