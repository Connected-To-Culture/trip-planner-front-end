import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import COLORS from '../../../constants/theme';
import { Dimensions } from 'react-native';
// Get the dimensions of the screen
const windowHeight = Dimensions.get('window').height;

interface Props {
    onPress: () => void;
    btnText: string;
    textColor: string | keyof typeof COLORS;
    width:any;
    backgroundColor:string | keyof typeof COLORS;
    borderWidth: number;
    borderColor:string |  keyof typeof COLORS| undefined;
    paddingHorizantal:number;
    paddingVertical:number;
    size:number;
    borderRadius:number
}

const ResuableButton: React.FC<Props> = ({ onPress, btnText, textColor, width, backgroundColor, borderWidth=1, borderColor,paddingHorizantal,paddingVertical,size, borderRadius}) => {
    const defaultBorderColor = typeof borderColor === 'undefined' ? backgroundColor : borderColor
    const btnTextStyle: TextStyle = {
        fontFamily: 'Almarai',
        fontSize: size,
        color: typeof textColor === 'string' ? textColor : COLORS[textColor],
    };

    const btnContainerStyle: ViewStyle = {
        width:width,
        backgroundColor:typeof backgroundColor === 'string' ? backgroundColor : COLORS[backgroundColor],
        alignItems: "center",
        justifyContent: "center",
        height: 'auto',
        borderRadius: borderRadius || 5,
        borderColor: typeof defaultBorderColor === 'string' ? defaultBorderColor : COLORS[defaultBorderColor],
        borderWidth: borderWidth,
        paddingHorizontal: paddingHorizantal,
        paddingVertical: paddingVertical,
    };

    return (
        <TouchableOpacity onPress={onPress} style={btnContainerStyle}>
            <Text style={btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    );
};
export default ResuableButton;
