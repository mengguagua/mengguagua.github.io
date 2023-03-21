# zj-port

## 阅读地址：https://mengguagua.github.io/

## 目的
  这是一个工具文档，提供各类解决方案和技术指南

  `zj-port`这是一个基于各种第三方框架，js库，css库和具体开发场景，融合产出的一个组件库，主要目的是提高开发的效率。
  
  `gsap`是一个动画函数库，用以实现复杂动画
  
  `highcharts`是一个3d图表库，实现大屏3d效果
  
  `新手指引`交互式的指引浮框
  
  `icon独立组件`,即插即用的独立icon组件
  
  `规范`记录实际项目的一些交互规范
  
  `推荐文章`一些js或其它前端技术文章，用来扩大技术深度和广度
  
  `css指南`个人整理的，系统性的css基本认知

  ## 组件
  ### 组件引用

  ```js
  npm i zj-port
  ```
  同elementUI等组件框架，无需手工注册，在main.js内导入，然后use即可，如下：
  ```js
  import zjport from 'zj-port';
  Vue.use(zjport);
  ```

  ### 新增组件(组员)

  - 1、在目录 src/components 下新增组件同名的文件夹
  - 2、增加组件和对应js，js用于导出单个组件
  - 3、修改 src/index.js 文件，导入导出新增的组件
  - 4、package.json version的版本递增如：1.0.7 -> 1.0.8
  - 5、通知管理员，npm publish 上传到npm库

  >注意：编写的组件需要定义 name 属性，原因如下：
  >```js
  >// 遍历注册组件时候需要使用component.name 默认约定的规范是全小写，或者 小写-小写
  >const install = function (Vue, opts = {}) {
  >		components.map(component => {
  >			Vue.component(component.name, component);
  >		})
  >};
  >```

  ## 附加
  ### 脚手架使用
  - npm地址：https://www.npmjs.com/package/zjport-cli?activeTab=readme
  ```shell
  # 全局安装工具
  $ npm install -g zjport-cli
  ```
  ```shell
  # 创建项目
  $ zjport create 项目名
  ```
  ```shell
  # 查询命令文档
  $ zjport --help
  ```

  ## 修订记录

  | 修订人 | 时间       | 版本  | 备注                                                         |
  | ------ | ---------- | ----- | ------------------------------------------------------------ |
  | 高成成 | 2022-05-24 | 1.3.7 | 新增使用指南                                                 |
  | 高成成 | 2022-07-12 | 1.4.2 | EasyTable增加resetCurrentPage标志：列表刷新后是否将页码重置为1;支持斑马条纹；支持序号扩展项。新增大屏适配组件 |
  | 高成成 | 2023-01-10 | 1.5.2 | 修改示例，增加可视化使用文档
  | 高成成 | 2023-01-26 | 1.5.3 | 新增icon独立库，新增新手指引示例
  | 高成成 | 2023-02-22 | 1.5.4 | 新增规范描述1.0.1
  | 高成成 | 2023-02-28 | 1.5.5 | 修改简介页面内容
  | 高成成 | 2023-03-21 | 1.5.6 | 增加推荐文章，增加css指南，交互规范内容修改

  ps：版本是package.json的version
  ### 其他
  1、代码示例会出现pug预处理写法，[pug传送门](https://pugjs.org/api/getting-started.html)
