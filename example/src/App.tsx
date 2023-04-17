import 'setimmediate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useTheme } from '@src/theme';
import { Text, ScrollView, View, Button } from '@src/components';
import ThemeProvider from '@src/theme/ThemeProvider';
import { SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets } from 'react-native-safe-area-context';
import { lazy, useCallback, Suspense } from 'react';
import { ListItem } from './components/ListItem';
import listConfig from './list-config';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function ExampleList() {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View className="flex1 bg">
      <StatusBar />
      <ScrollView>
        <View className="flex1 bg" style={{ paddingBottom: bottom }}>
          {listConfig?.map?.((list, index) => {
            const endIndex = (list?.children?.length ?? 0) - 1;
            return (
              <View className="mt16" key={list.title + index}>
                <Text className="px12">{list.title}</Text>
                {list?.children?.map?.((child, childIndex) => {
                  return (
                    <ListItem
                      key={childIndex}
                      hideBorder={index === endIndex}
                      label={child.title}
                      onPressItem={() => {
                        navigation.navigate(child.key as never);
                      }}
                    />
                  );
                })}
              </View>
            );
          })}
          {/* <Test /> */}
          {/* <Demo /> */}
        </View>
      </ScrollView>
    </View>
  );
}

function DrawerMenu(props: any) {
  const progress = useDrawerProgress();
  const { setThemeName, themeName } = useTheme();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(progress?.value || 0, [0, 1], [-100, 0]);
    return {
      transform: [{ translateX }],
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={animatedStyle}>
        {/* <DrawerItemList {...props} /> */}
        {/* <DrawerItem
          label="Help"
          onPress={() => {
            console.log(111);
          }}
        /> */}
        <View className="mx12">
          <Button
            theme="primary"
            content="change theme"
            onPress={() => {
              setThemeName(themeName === 'light' ? 'dark' : 'light');
            }}
          />
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
}
function Home() {
  const Menu = useCallback((props: any) => <DrawerMenu {...props} />, []);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
      }}
      drawerContent={Menu}
    >
      <Drawer.Screen name="Example" component={ExampleList} />
    </Drawer.Navigator>
  );
}
function App(): JSX.Element {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <Suspense fallback={<Text>loading...</Text>}>
              <Stack.Navigator
                initialRouteName="ExampleList"
                screenOptions={{
                  headerMode: 'screen',
                  presentation: 'card',
                  cardOverlayEnabled: true,
                  animationEnabled: true,
                }}
              >
                <Stack.Screen options={{ headerShown: false }} name="ExampleList" component={Home} />
                {listConfig?.map?.((list) => {
                  return list?.children?.map((item) => {
                    return (
                      <Stack.Screen
                        name={item.key}
                        options={{
                          headerBackTitleVisible: false,
                          headerTitle: item.title,
                          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        }}
                        component={lazy(() => import('@src/components/Button/_example/index'))}
                      />
                    );
                  });
                })}
              </Stack.Navigator>
            </Suspense>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
