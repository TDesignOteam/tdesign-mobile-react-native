---
title: 主题配置
spline: explain
---

### 使用主题

在根组件外层添加`ThemeProvider`组件，在需要使用主题的组件中使用`useTheme`hook，获取到主题，使用对应token即可。

```js
import { ThemeProvider } from '@src/theme';

function App() {
    return (
        <ThemeProvider>
            <Root/>
        </ThemeProvider>
    )
}

import { useTheme } from '@src/theme';
function Root() {
    const { theme } = useTheme();
    return <Text style={{color: theme.colors.fontGray1}}>测试</Text>
}
```

### 使用className

组件提供类似`Tailwind CSS`的便捷样式功能，需要配合组件库提供的View、Text等组件共同使用。可以查看`tdesign-react-native/src/theme/light/classnames.ts`支持哪些样式。

```js
import { Text, ScrollView, View, Button } from '@src/components';

function Demo() {
    return <View className="bg mt12">
        <Text className="text4">测试</Text>
    </View>
}

```

### 自定义样式

`ThemeProvider`组件接收`config`参数可以配置一些自定义样式或覆盖已有样式。

```js
<ThemeProvider config={{
    light: {
        // 覆盖样式
        colors: {
            fontGray2: 'red',
        },
        classnames: {
            // 自定义样式
            testBg: {
                backgroundColor: 'red',
            },
        },
    },
    }}
></ThemeProvider>

function Demo() {
    return <View className="testBg">
        <Text className="fontGray2">测试</Text>
    </View>
}
```
