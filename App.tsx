import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyListScreen from './src/MyListScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MyListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
});
