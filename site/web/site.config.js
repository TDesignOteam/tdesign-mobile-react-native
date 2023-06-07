import baseConfig from '@example/component-list.ts';

const componentConfig = baseConfig.map((config) => {
  const result = {
    title: config.title,
    type: 'component',
  };
  if (config.children) {
    result.children = config.children?.map((child) => ({
      title: child.title,
      name: child.key,
      path: `/react-native/${child.key}`,
      component: () => import(`../../src/components/${child.key}/${child.key}.md`),
    }));
  }
  return result;
});

const siteConfig = {
  docs: [
    {
      title: '开始',
      type: 'document', // 普通文档
      children: [
        {
          title: '快速开始',
          name: 'getting-started',
          path: '/react-native/getting-started',
          component: () => import('@doc/getting-started.md'),
        },
        {
          title: '更新日志',
          name: 'changelog',
          path: '/react-native/changelog',
          component: () => import('@/CHANGELOG.md'),
        },
        {
          title: '组件概览',
          name: 'overview',
          path: '/react-native/overview',
          // TODO FIX
          component: () => import('@common/docs/mobile/overview.md'),
          // component: () => null,
        },
      ],
    },
    {
      title: '全局配置',
      type: 'config',
      children: [
        {
          title: '主题',
          name: 'theme',
          path: '/react-native/theme',
          component: () => import('tdesign-react-native/theme/theme.md'),
        },
      ],
    },
    ...componentConfig,
    // {
    //   title: '基础组件',
    //   type: 'component', // 组件文档
    //   children: [
    //     {
    //       title: 'Button 按钮',
    //       name: 'button',
    //       path: '/react-native/components/button',
    //       component: () => import('tdesign-react-native/components/Button/button.md'),
    //     },
    //     // {
    //     //   title: 'Fab 悬浮按钮',
    //     //   name: 'fab',
    //     //   path: '/react-native/components/fab',
    //     //   component: () => import('tdesign-react-native/fab/fab.md'),
    //     // },

    //     // {
    //     //   title: 'Icon 图标',
    //     //   name: 'icon',
    //     //   path: '/react-native/components/icon',
    //     //   component: () => import('tdesign-react-native/icon/icon.md'),
    //     // },
    //   ],
    // },
    // {
    //   title: '布局',
    //   type: 'component', // 组件文档
    //   children: [
    //     // {
    //     //   title: 'Cell 单元格',
    //     //   name: 'cell',
    //     //   path: '/react-native/components/cell',
    //     //   component: () => import('tdesign-react-native/cell/cell.md'),
    //     // },
    //     // {
    //     //   title: 'Divider 分割符',
    //     //   name: 'divider',
    //     //   path: '/react-native/components/divider',
    //     //   component: () => import('tdesign-react-native/divider/divider.md'),
    //     // },
    //     // {
    //     //   title: 'Grid 宫格',
    //     //   name: 'grid',
    //     //   path: '/react-native/components/grid',
    //     //   component: () => import('tdesign-react-native/grid/grid.md'),
    //     // },
    //   ],
    // },
    // {
    //   title: '导航',
    //   type: 'component',
    //   children: [
    //     // {
    //     //   title: 'DropdownMenu 下拉菜单',
    //     //   name: 'dropdown-menu',
    //     //   path: '/react-native/components/dropdown-menu',
    //     //   component: () => import('tdesign-react-native/dropdown-menu/dropdown-menu.md'),
    //     // },
    //     // {
    //     //   title: 'Navbar 导航条',
    //     //   name: 'navbar',
    //     //   path: '/react-native/components/navbar',
    //     //   component: () => import('tdesign-react-native/navbar/navbar.md'),
    //     // },
    //     // {
    //     //   title: 'Steps 步骤条',
    //     //   name: 'steps',
    //     //   path: '/react-native/components/steps',
    //     //   component: () => import('tdesign-react-native/steps/steps.md'),
    //     // },
    //     // {
    //     //   title: 'Sticky 吸顶容器',
    //     //   name: 'sticky',
    //     //   path: '/react-native/components/sticky',
    //     //   component: () => import('tdesign-react-native/sticky/sticky.md'),
    //     // },
    //     // {
    //     //   title: 'TabBar 标签栏',
    //     //   name: 'tab-bar',
    //     //   path: '/react-native/components/tabbar',
    //     //   component: () => import('tdesign-react-native/tab-bar/tab-bar.md'),
    //     // },
    //     // {
    //     //   title: 'Navbar 导航栏',
    //     //   name: 'navbar',
    //     //   path: '/react-native/components/navbar',
    //     //   component: () => import('tdesign-react-native/navbar/navbar.md'),
    //     // },
    //     // {
    //     //   title: 'Tabs 选项卡',
    //     //   name: 'tabs',
    //     //   path: '/react-native/components/tabs',
    //     //   component: () => import('tdesign-react-native/tabs/tabs.md'),
    //     // },
    //     // {
    //     //   title: 'Indexes 索引',
    //     //   name: 'indexes',
    //     //   path: '/react-native/components/indexes',
    //     //   component: () => import('tdesign-react-native/indexes/indexes.md'),
    //     // },
    //   ],
    // },
    // {
    //   title: '输入',
    //   type: 'component',
    //   children: [
    //     // {
    //     //   title: 'CheckBox 多选框',
    //     //   name: 'checkbox',
    //     //   path: '/react-native/components/checkbox',
    //     //   component: () => import('tdesign-react-native/checkbox/checkbox.md'),
    //     // },
    //     // // {
    //     // //   title: 'DateTimePicker 时间选择器',
    //     // //   name: 'date-time-picker',
    //     // //   path: '/react-native/components/date-time-picker',
    //     // //   component: () => import('tdesign-react-native/date-time-picker/date-time-picker.md'),
    //     // // },
    //     // {
    //     //   title: 'Input 输入框',
    //     //   name: 'input',
    //     //   path: '/react-native/components/input',
    //     //   component: () => import('tdesign-react-native/input/input.md'),
    //     // },
    //     // {
    //     //   title: 'Picker 选择器',
    //     //   name: 'picker',
    //     //   path: '/react-native/components/picker',
    //     //   component: () => import('tdesign-react-native/picker/picker.md'),
    //     // },
    //     // {
    //     //   title: 'Radio 单选框',
    //     //   name: 'radio',
    //     //   path: '/react-native/components/radio',
    //     //   component: () => import('tdesign-react-native/radio/radio.md'),
    //     // },
    //     // {
    //     //   title: 'Rate 评分',
    //     //   name: 'rate',
    //     //   path: '/react-native/components/rate',
    //     //   component: () => import('tdesign-react-native/rate/rate.md'),
    //     // },
    //     // {
    //     //   title: 'Search 搜索框',
    //     //   name: 'search',
    //     //   path: '/react-native/components/search',
    //     //   component: () => import('tdesign-react-native/search/search.md'),
    //     // },
    //     // {
    //     //   title: 'Slider 滑动选择器',
    //     //   name: 'slider',
    //     //   path: '/react-native/components/slider',
    //     //   component: () => import('tdesign-react-native/slider/slider.md'),
    //     // },
    //     // {
    //     //   title: 'Stepper 步进器',
    //     //   name: 'stepper',
    //     //   path: '/react-native/components/stepper',
    //     //   component: () => import('tdesign-react-native/stepper/stepper.md'),
    //     // },
    //     // {
    //     //   title: 'Switch 开关',
    //     //   name: 'switch',
    //     //   path: '/react-native/components/switch',
    //     //   component: () => import('tdesign-react-native/switch/switch.md'),
    //     // },
    //     // {
    //     //   title: 'Textarea 多行输入框',
    //     //   name: 'textarea',
    //     //   path: '/react-native/components/textarea',
    //     //   component: () => import('tdesign-react-native/textarea/textarea.md'),
    //     // },
    //     // {
    //     //   title: 'Upload 上传',
    //     //   name: 'upload',
    //     //   path: '/react-native/components/upload',
    //     //   component: () => import('tdesign-react-native/upload/upload.md'),
    //     // },
    //   ],
    // },
    // {
    //   title: '数据展示',
    //   type: 'component',
    //   children: [
    //     // {
    //     //   title: 'Avatar 头像',
    //     //   name: 'avatar',
    //     //   path: '/react-native/components/avatar',
    //     //   component: () => import('tdesign-react-native/avatar/avatar.md'),
    //     // },
    //     // {
    //     //   title: 'Badge 徽标',
    //     //   name: 'badge',
    //     //   path: '/react-native/components/badge',
    //     //   component: () => import('tdesign-react-native/badge/badge.md'),
    //     // },
    //     // {
    //     //   title: 'Collapse 折叠面板',
    //     //   name: 'collapse',
    //     //   path: '/react-native/components/collapse',
    //     //   component: () => import('tdesign-react-native/collapse/collapse.md'),
    //     // },
    //     // {
    //     //   title: 'CountDown 倒计时',
    //     //   name: 'count-down',
    //     //   path: '/react-native/components/count-down',
    //     //   component: () => import('tdesign-react-native/count-down/count-down.md'),
    //     // },
    //     // {
    //     //   title: 'Image 图片',
    //     //   name: 'image',
    //     //   path: '/react-native/components/image',
    //     //   component: () => import('tdesign-react-native/image/image.md'),
    //     // },
    //     // {
    //     //   title: 'List 列表',
    //     //   name: 'list',
    //     //   path: '/react-native/components/list',
    //     //   component: () => import('tdesign-react-native/list/list.md'),
    //     // },
    //     // {
    //     //   title: 'ImageViewer 图片预览',
    //     //   name: 'image-viewer',
    //     //   path: '/react-native/components/image-viewer',
    //     //   component: () => import('tdesign-react-native/image-viewer/image-viewer.md'),
    //     // },
    //     // {
    //     //   title: 'Skeleton 骨架屏',
    //     //   name: 'skeleton',
    //     //   path: '/react-native/components/skeleton',
    //     //   component: () => import('tdesign-react-native/skeleton/skeleton.md'),
    //     // },
    //     // {
    //     //   title: 'Swiper 轮播',
    //     //   name: 'swiper',
    //     //   path: '/react-native/components/swiper',
    //     //   component: () => import('tdesign-react-native/swiper/swiper.md'),
    //     // },
    //     // {
    //     //   title: 'SwipeCell 滑动单元格',
    //     //   name: 'swipe-cell',
    //     //   path: '/react-native/components/swipe-cell',
    //     //   component: () => import('tdesign-react-native/swipe-cell/swipe-cell.md'),
    //     // },
    //     // {
    //     //   title: 'Tag 标签',
    //     //   name: 'tag',
    //     //   path: '/react-native/components/tag',
    //     //   component: () => import('tdesign-react-native/tag/tag.md'),
    //     // },
    //   ],
    // },
    // {
    //   title: '消息提醒',
    //   type: 'component', // 组件文档
    //   children: [
    //     // {
    //     //   title: 'ActionSheet 动作面板',
    //     //   name: 'action-sheet',
    //     //   path: '/react-native/components/actionsheet',
    //     //   component: () => import('tdesign-react-native/action-sheet/action-sheet.md'),
    //     // },
    //     // {
    //     //   title: 'BackTop 返回顶部',
    //     //   name: 'back-top',
    //     //   meta: { docType: 'base' },
    //     //   path: '/react-native/components/back-top',
    //     //   component: () => import('tdesign-react-native/back-top/back-top.md'),
    //     // },
    //     // {
    //     //   title: 'Dialog 弹出框',
    //     //   name: 'dialog',
    //     //   path: '/react-native/components/dialog',
    //     //   component: () => import('tdesign-react-native/dialog/dialog.md'),
    //     // },
    //     // {
    //     //   title: 'Drawer 抽屉',
    //     //   name: 'drawer',
    //     //   path: '/react-native/components/drawer',
    //     //   component: () => import('tdesign-react-native/drawer/drawer.md'),
    //     // },
    //     // {
    //     //   title: 'Loading 加载',
    //     //   name: 'loading',
    //     //   path: '/react-native/components/loading',
    //     //   component: () => import('tdesign-react-native/loading/loading.md'),
    //     // },
    //     // {
    //     //   title: 'Message 消息通知',
    //     //   name: 'message',
    //     //   path: '/react-native/components/message',
    //     //   component: () => import('tdesign-react-native/message/message.md'),
    //     // },
    //     // {
    //     //   title: 'Popup 弹出层',
    //     //   name: 'popup',
    //     //   path: '/react-native/components/popup',
    //     //   component: () => import('tdesign-react-native/popup/popup.md'),
    //     // },
    //     // {
    //     //   title: 'Progress 进度条',
    //     //   name: 'progress',
    //     //   path: '/react-native/components/progress',
    //     //   component: () => import('tdesign-react-native/progress/progress.md'),
    //     // },
    //     // {
    //     //   title: 'PullDownRefresh 下拉刷新',
    //     //   name: 'pull-down-refresh',
    //     //   path: '/react-native/components/pull-down-refresh',
    //     //   component: () => import('tdesign-react-native/pull-down-refresh/pull-down-refresh.md'),
    //     // },
    //     // {
    //     //   title: 'Toast 轻提示',
    //     //   name: 'toast',
    //     //   path: '/react-native/components/toast',
    //     //   component: () => import('tdesign-react-native/toast/toast.md'),
    //     // },
    //     // {
    //     //   title: 'NoticeBar 公告栏',
    //     //   name: 'notice-bar',
    //     //   path: '/react-native/components/notice-bar',
    //     //   component: () => import('tdesign-react-native/notice-bar/notice-bar.md'),
    //     // },
    //   ],
    // },
  ],
};

export default siteConfig;
