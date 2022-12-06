/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const ControlledInput: () => Node = () => {
  const [value, setValue] = useState('');
  return (
    <TextInput
      multiline
      value={value}
      onChangeText={setValue}
      style={styles.input}
    />
  );
};

const UncontrolledInput: () => Node = () => {
  const [value, setValue] = useState('');
  return <TextInput multiline onChangeText={setValue} style={styles.input} />;
};

const App: () => Node = () => {
  const [controlledInput, setControlledInput] = useState(true);
  const toggleControlled = () => setControlledInput(previous => !previous);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Switch onValueChange={toggleControlled} value={controlledInput} />
          {controlledInput ? (
            <>
              <Text>Controlled input</Text>
              <ControlledInput />
            </>
          ) : (
            <>
              <Text>Uncontrolled input</Text>
              <UncontrolledInput />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'grey',
    marginTop: 40,
  },
});

export default App;
