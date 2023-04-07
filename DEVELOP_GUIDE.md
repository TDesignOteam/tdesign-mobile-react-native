# 参与贡献

非常感谢你对 TDesign 的关注，如果你想为组件库或其他产品贡献一份力量，请先了解下以下内容。

## 开启 issue

如果你想要贡献一个新特性，请在实际写代码前先开一个 issue 与社区里的小伙伴一起讨论必要性及实现方案。

## Github flow 贡献流程

- 请将本项目 fork & clone 至本地
- 创建 feature/fix 分支
- 开发过程中可以使用 `git fetch` 或 `git rebase` 来同步上游分支代码
- 提交代码到 forked 仓库，commit message 撰写请参照 [Angular Commits 规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
- 发起 pr
- 会有 PMC 同学来 CR 本次提交的代码，请及时关注 CR 评论通知信息
- CR 通过后会合并进入 develop 分支，等待周迭代或紧急 patch 版本发布 npm

## 目录结构
```
├── CHANGELOG.md      更新日志
├── DEVELOP_GUIDE.md  开发者readme
├── README.md         readme
├── example           演示项目运行目录
├── scripts           通用脚本目录
├── site              站点目录
├── src               源码目录
```
## 开发

```bash
git clone fork仓库代码
cd tdesign-react-native
修改.gitmodules子仓库为自己fork的仓库，分支main
git submodule sync
git submodule init
git submodule update

# 开发预览
cd ..
yarn
cd example && yarn web

```

## 编写demo

为了demo和文档的对应，编写demo时需要使用特定格式及组件进行编写，便于自动提取demo生成文档。

每个组件对应demo应在该组件的_example文件夹下，可以分文件编写demo，但应以index文件作为入口进行汇总。

`example/src/components`目录下提供以下组件：

```
export { CodeSpace } from './CodeSpace';
export { Section } from './Section';
export { H3, H4, H5, P } from './Element';

Section: 每部分demo容器
CodeSpace: 引用的demo组件的容器
H3, H4, H5, P: 文字说明内容组件
```

例如需要根据Button不同属性去编写示例：

```jsx
// index.tsx

// 不同尺寸
const Demo1 = () => {
  return <>
    <Button style={{ marginTop: 10 }} theme="primary" content={'默认'} />
    <Button style={{ marginTop: 10 }} size="small" theme="primary" content={'size=small'} />
    <Button style={{ marginTop: 10 }} size="large" theme="primary" content={'size=large'} />
  </>
}

// 不同状态
const Demo2 = () => {
  return <Button style={{ marginTop: 10 }} disabled theme="primary" content={'disabled'} />
}

const Demo = () => (
  <>
    <Section>
      <H3>按钮尺寸</H3>
      <P>按钮根据尺寸分为small、normal、large，默认为normal</P>
      <CodeSpace>
        <Demo1 />
      </CodeSpace>
    </Section>
    <Section>
      <H3>按钮状态</H3>
      <P>按钮可以设置禁用的disable状态</P>
      <CodeSpace>
        <Demo2 />
      </CodeSpace>
    </Section>
  </>
);
export default Demo;
```

根据以上demo示例会生成如下类似如下文档：

```md
### 按钮尺寸

按钮根据尺寸分为small、normal、large，默认为normal

``
const Demo1 = () => {
  return <>
    <Button style={{ marginTop: 10 }} theme="primary" content={'默认'} />
    <Button style={{ marginTop: 10 }} size="small" theme="primary" content={'size=small'} />
    <Button style={{ marginTop: 10 }} size="large" theme="primary" content={'size=large'} />
  </>
}
``

### 按钮状态

按钮可以设置禁用的disable状态

``
const Demo2 = () => {
  return <Button style={{ marginTop: 10 }} disabled theme="primary" content={'disabled'} />
}
``

```

更多指引请参考：

- [开发指南](./DEVELOP_GUIDE.md)
<!-- - [测试指南](./TEST_GUIDE.md) -->













