import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Modal, View, Text, StyleSheet} from 'react-native';
import SurveyStart from '../../screens/survey/SurveyStart';
import Survey1 from '../../screens/survey/Survey1';
import Survey2 from '../../screens/survey/Survey2';
import Survey3 from '../../screens/survey/Survey3';
import {SurveyDataProviderWrapper} from '../../context/surveyData';
import {
  SurveyModalContext,
  SurveyModalContextWrapper,
} from '../../context/surveyModal';

const Stack = createNativeStackNavigator();

const SurveyNavigator = () => {
  const {modalOpen} = useContext(SurveyModalContext);


  return (
    <SurveyDataProviderWrapper>
      <SurveyModalContextWrapper>
        <SafeAreaView style={{flex: 1}}>

          <Modal visible={modalOpen}>
            <View style={styles.modalContainer}>
              <Text>Hello from the modal</Text>
            </View>
          </Modal>

          <Stack.Navigator>
            <Stack.Screen
              name="SurveyStart"
              component={SurveyStart}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Survey1"
              component={Survey1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Survey2"
              component={Survey2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Survey3"
              component={Survey3}
              options={{headerShown: false}}
            />
            {/* Define other screens within the Survey Navigator if needed */}
          </Stack.Navigator>
        </SafeAreaView>
      </SurveyModalContextWrapper>
    </SurveyDataProviderWrapper>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
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

export default SurveyNavigator;
