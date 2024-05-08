import React from 'react';
import {View, StyleSheet} from 'react-native';

type ProgressBarProps = {
  progress: number;
};

const ProgressBar = ({progress}: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, {width: `${progress}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CECECE',
    borderRadius: 5,
    height: 6,
    marginBottom: 32,
  },
  progressBar: {
    backgroundColor: '#3AA99F',
    borderRadius: 5,
    height: '100%',
  },
});

export default ProgressBar;
