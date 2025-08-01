import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeDetailScreen, HomeScreen } from '../screens';
import { Button } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
function AppStack() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => {
                navigation.navigate('Details');
              }}
            >
              View
            </Button>
          ),
        }}
      />
      <Stack.Screen name="Details" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
}
export default AppStack;
