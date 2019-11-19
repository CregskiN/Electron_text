## Electron_text

> 官网：[Electron](https://electronjs.org/)

### 初识

#### 启动项目

``` node
  $ npm start
  $ npm run estart
```

### idea

> 业务层

- [ ] 路由
  - [x] 当前小组件化内容跳转
  - [ ] 封装公用函数
- [x] 目录结构与分配
  - [ ] 组件划分
  - [ ] 模块划分
  - [ ] 逻辑划分
    - [ ] 逻辑函数处理
    - [ ] 共用函数体处理以及特殊情况应用
- [ ] 待续...

> 功能层

- [x] 登录/注册模块
  - [x] 基本功能
  - [ ] 登录信息验证
    - [ ] 后台接口处理 & 前端输入数据处理
    - [ ] 第三方信息验证
  - [ ] 第三方登录/注册
- [ ] 日历，用于记录一日常
- [ ] 用户守则
  - [ ] 中英文切换
  - [ ] 规则
- [x] 欢迎界面 -> 过渡
- [ ] 目录模块
  - [ ] 目录模块划分
  - [ ] 聊天 -> 通讯
  - [ ] 资讯
  - [ ] 支付
  - [ ] 绘图
    - [ ] 二维
      - [ ] Rough
      - [ ] chart.xkcd
    - [ ] 三维
  - [ ] 游戏
    - [ ] 游戏类型、模块细化
  - [ ] GIS
  - [ ] 第三方
    - [ ] 通讯
    - [ ] 特殊功能实现
- [ ] 待续...

> 网络层

- [x] 实现简单后台数据连接
- [ ] 优化封装请求方式
- [ ] 请求安全问题
- [ ] 部分信息暴露
- [ ] 待续...

> 数据层 - 网络安全

- [ ] 防御式编程思想
- [ ] 代码健壮性
- [ ] Single-SPA
- [ ] 待续...

> 代码分支化开发

- [ ] 根据不同的功能进行分支创建
- [ ] 完成某个模块后进行 Code Review
- [ ] 提交 Commit 格式化
  - 使用 `git cz` 代替 `git commit`

### To be resolved
- [x] 不实现新打开窗口，只是在当前状态下进行界面跳转
- [ ] react 嵌入到 electron 中
- [x] 以实现路由封装，但是未实现子级路由获取
  - [x] 默认指定第一个子路由
  - [x] 默认左侧第一项已选中
  - [x] 左侧文字信息消失问题
  - [x] 收缩左侧菜单栏的时候文字消失
    - [ ] 当前方法待优化
    - [ ] 使文字保持在居中位置
  - [x] 默认进入第一个子页面
  - [ ] 多级路由切换问题未解决，需特殊考虑其他子层路由关系
- [ ] 待续...

### Finished

- [x] 实现 IPC 与主进程的交互功能，并实现新窗口的创建以及对应函数的响应操作
- [x] 关闭当前打开窗口以及返回上一级时关闭当前窗口
- [x] react 的 fetch 数据请求，目前传入的格式数据为 json
- [ ] 待续...

### Note

> ajax 的 readyState

0. 初始化，XMLHttpRequest对象还没有完成初始化
1. 载入，XMLHttpRequest对象开始发送请求
2. 载入完成，XMLHttpRequest对象的请求发送完成
3. 解析，XMLHttpRequest对象开始读取服务器的响应
4. 完成，XMLHttpRequest对象读取服务器响应结束

> 组件引入问题

1. 组件一定是首字母大写

> Chart.xkcd

``` bash
 npm i chart.xkcd
 npm i -S chart.xkcd-react
```
``` javascript
  import chartXkcd from 'chart.xkcd'
  import { Line, Bar, Pie, XY } from 'chart.xkcd-react'
```

### Link

1. [React-router路由模块化封装](https://www.jianshu.com/p/d4283e7f3c3c)
