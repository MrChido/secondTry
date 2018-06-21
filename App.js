import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HelloComponent from './app/components/HelloComponent/HelloComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Open up App.js to start working on your app!</Text>
        <Text style={styles.intro}>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <HelloComponent fish='Bass' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,156)',
    alignItems: 'center',
    justifyContent: 'center',
  },
    intro:{
    textAlign: 'center',
    color: 'rgba(42,82,190,2)'
    
    },
});
