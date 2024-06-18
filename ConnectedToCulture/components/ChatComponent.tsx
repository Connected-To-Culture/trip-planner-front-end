import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, fetchMessageSuccess, fetchMessageFailure } from '../Redux/chatSlice';
import { RootState } from '../Redux/Store';

const ChatComponent: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return; // early return if input is empty

    dispatch(sendMessage(trimmedInput));
    try {
      const response = await fetch('http://10.0.2.2:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: trimmedInput, sessionId: 'unique-session-id' }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      dispatch(fetchMessageSuccess(data.reply));
      setInput(''); // Clear input only after successful fetch
    } catch (error) {
      console.error('Error fetching chat response:', error);
      dispatch(fetchMessageFailure({ error: error.toString() }));
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer} ref={scrollViewRef}>
        {messages.map((msg, index) => (
          <Text key={index} style={styles.message}>{msg}</Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type your message here..."
        onSubmitEditing={handleSend} // Handle sending on return key
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  messagesContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  message: {
    fontSize: 18,
    color: 'black',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
});

export default ChatComponent;
