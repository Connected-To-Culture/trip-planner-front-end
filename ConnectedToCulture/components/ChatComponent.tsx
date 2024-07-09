import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, ScrollView, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, fetchMessageSuccess, fetchMessageFailure } from '../Redux/chatSlice';
import { RootState } from '../Redux/Store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../constants/theme.tsx";

const ChatComponent: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSend = async (text: string, isUserMessage = true) => {
    const trimmedInput = text.trim();
    if (!trimmedInput) return;

    const message = { text: trimmedInput, isUser: isUserMessage };
    dispatch(sendMessage(message));
    setInput('');

    if (isUserMessage) {
      try {
        let endpoint = '/api/chat';
        let body = { text: trimmedInput, sessionId: 'unique-session-id' };

        // Check if the input matches any specific intents
        if (trimmedInput.toLowerCase().includes('invest')) {
          endpoint = '/dialogflow-webhook';
          body = {
            queryResult: {
              queryText: trimmedInput,
              intent: { displayName: "ask about investing" },
              parameters: {}
            }
          };
        } else if (trimmedInput.toLowerCase().includes('stock')) {
          endpoint = '/dialogflow-webhook';
          body = {
            queryResult: {
              queryText: trimmedInput,
              intent: { displayName: "ask about stocks" },
              parameters: {}
            }
          };
        }

        console.log(`Sending request to: http://10.0.2.2:8000${endpoint}`);
        const response = await fetch(`http://10.0.2.2:8000${endpoint}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(`HTTP error! Status: ${response.status}, Body: ${errorText}`);
        }

        const data = await response.json();
        console.log('Received data:', data);

        let replyText;
        if (endpoint === '/api/chat') {
          replyText = data.reply;
        } else {
          replyText = data.fulfillmentText;
        }

        if (replyText) {
          dispatch(fetchMessageSuccess({ text: replyText, isUser: false }));
        } else {
          throw new Error('No valid response text found');
        }
      } catch (error) {
        console.error('Error fetching chat response:', error);
        dispatch(fetchMessageFailure({ error: error.toString() }));
      }
    }
  };

  const renderMessage = (msg: { text: string; isUser: boolean }, index: number) => (
    <View key={index} style={[styles.messageBubble, msg.isUser ? styles.userMessage : styles.botMessage]}>
      <Text style={[styles.messageText, msg.isUser ? styles.userMessageText : styles.botMessageText]}>
        {msg.text}
      </Text>
    </View>
  );

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat with Sefa</Text>
      </View>
      <ScrollView
        style={styles.messagesContainer}
        ref={scrollViewRef}
      >
        {messages.map(renderMessage)}
      </ScrollView>
      <View style={styles.optionsContainer}>
        {["I want to dance!", "Some good Seafood!", "Random"].map((option) => (
          <TouchableOpacity key={option} style={styles.optionButton} onPress={() => handleSend(option)}>
            <Text style={styles.optionButtonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message here..."
          onSubmitEditing={() => handleSend(input)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => handleSend(input)}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
        <Icon name="home" size={24} color="#000" />
        <Icon name="explore" size={24} color="#000" />
        <Icon name="public" size={24} color="#000" />
        <Icon name="chat" size={24} color="#4a90e2" />
        <Icon name="person" size={24} color="#000" />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 4,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  optionButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 14,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.primary,
  },
    userMessageText: {
    color: 'white', // make the user's message text white
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
});

export default ChatComponent;