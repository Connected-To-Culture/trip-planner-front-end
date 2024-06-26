// Import necessary libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import the chat functionality
import ChatComponent from '../components/ChatComponent'; // Adjust path as necessary

const ChatScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Chat with Sefa</Text>
      <ChatComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default ChatScreen;
