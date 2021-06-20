import React from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react";

const App = () => {
  const [message, setMessage] = React.useState();

  return (
    <View>
      <Button
        title="Say Hello"
        onPress={() => {
          setTimeout(() => {
            setMessage("Hello Tester");
          }, Math.floor(Math.random() * 200));
        }}
      />
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontFamily: "Arial",
    fontSize: 38,
    textAlign: "center",
    marginTop: 10
  }
});

export default App;
