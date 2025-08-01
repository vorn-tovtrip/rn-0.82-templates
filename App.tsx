/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { PaperProvider } from 'react-native-paper';
import Main from './src/Main';
import { lightTheme } from './src/theme/paper';
function App() {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <PaperProvider theme={lightTheme}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
