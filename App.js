import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Basketball!</Text>

        <Button underlayColor="red"
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Join a game!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7300',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
