import 'setimmediate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { ThemeProvider, useTheme } from '@src/theme';
import { Text, ScrollView, View, Button } from '@src/components';
import { SafeAreaProvider, initialWindowMetrics, useSafeAreaInsets } from 'react-native-safe-area-context';
import { lazy, useCallback, Suspense, useState, useEffect } from 'react';
import { ListItem } from './components/ListItem';
import listConfig from './component-list';

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
            loading
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
  const [themeConfig, setThemeConfig] = useState({});

  // 测试异步加载主题
  useEffect(() => {
    setTimeout(() => {
      setThemeConfig({
        light: {
          colors: {
            fontGray2: 'violet',
          },
          classnames: {
            test: {
              backgroundColor: 'violet',
            },
          },
        },
      });
    }, 5000);
  }, []);

  return (
    <ThemeProvider config={themeConfig} theme="light">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <NavigationContainer>
            <Suspense
              fallback={
                <View className="flex1 flexCenter">
                  <Text>loading...</Text>
                </View>
              }
            >
              <Stack.Navigator
                initialRouteName="ExampleList"
                screenOptions={{
                  headerMode: 'screen',
                  presentation: 'card',
                  cardOverlayEnabled: true,
                  animationEnabled: true,
                  cardStyle: { flex: 1 },
                }}
              >
                <Stack.Screen options={{ headerShown: false }} name="ExampleList" component={Home} />
                {listConfig?.map?.((list) => {
                  return list?.children?.map((item) => {
                    const LazyComponent = lazy(() => import('@src/components/Button/_example/index'));
                    function component(_props: any) {
                      return (
                        <ScrollView>
                          <LazyComponent {..._props} />
                        </ScrollView>
                      );
                    }
                    return (
                      <Stack.Screen
                        name={item.key}
                        options={{
                          headerBackTitleVisible: false,
                          headerTitle: item.title,
                          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        }}
                      >
                        {(props) => component(props)}
                      </Stack.Screen>
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
