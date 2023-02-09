import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {requestUserPermission, NotificationServices} from './src/utils/push';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});
