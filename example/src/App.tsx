import 'setimmediate';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Text, ScrollView } from '@src/components/Base';
import ThemeProvider from '@src/theme/ThemeProvider';
import Demo from '@src/components/Button/_example/index';
import { Test } from './Test';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App(): JSX.Element {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar />

      <ThemeProvider>
        <View style={styles.container}>
          <ScrollView>
            <Text>Open up App.js to start working on your app!</Text>
            <Text className="brand7">Open up App.js to start working on your app!</Text>
            <Test />
            <Demo />
          </ScrollView>
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
}
export default App;
