(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e89575"],{"1c50":function(n,e,s){"use strict";s.r(e);var t=function(){var n=this,e=n._self._c;return e("div",[e("v-md-editor",{staticClass:"github-markdown-body",attrs:{value:n.text,mode:"preview"}}),e("div",{staticClass:"demo-content"})],1)},r=[],o={components:{},data:function(){return{text:"\n  ### 交互规范1.0.1\n  > 默认规范，实际有变动按产品经理需求落地\n  ####  术语说明\n  页面第一层级：即直接可视化的页面，如查询页面\n  页面第二层级：即需要交互操作触发显示的页面，如弹框\n  鉴权：权限认证，如cookie或者token认证\n  #### 数据交互\n  - `规则1`：只要是会直接影响**数据库数据**的操作，都在页面第二层级操作，如删除，需要弹框内操作确认\n  - `规则2`：只要是更新页面内容的操作，都要在操作后刷新页面，显示最新数据\n  - `规则3`：只要是直接影响数据库的操作，按钮都要添加loading，或者finally里关闭弹窗，防止重复请求\n  - `规则4`：表格分页栏，在只有一页时候也要显示\n  - `规则5`：表单上传功能，默认10M，单文件，不限制文件类型(默认不支持文件压缩)\n  - `规则6`：有静态数据需要区分测试和生产的，默认优先让后端提供接口，其次使用中台的公共配置接口\n  #### 页面交互\n  - `规则1`：有鉴权的页面，以下方式二选一：1、跳到对应页面，无权限提示`没有访问权限`；2、判断权限，无权限跳转到`登录页面`\n  - `规则2`：默认第二层级页面不再提供弹框，有需要，让产品在需求内明确指出\n  - `规则3`：接口全局设置超时，超过30s，~~跳转到统一的404页面~~，弹出对话框提示：'请求超时'，让用户点击关闭\n  - `规则4`：项目不强依赖后端接口，`本地调试`时候，保证在后端接口不通情况下页面不白屏(对空数据做判断)\n  - `规则5`：后端接口状态500，提示文案\"网络拥堵，稍候再试\"\n  #### 报错交互\n  - `规则1`：api接口统一都要经过拦截器\n  - `规则2`：api接口的报错，http状态码为200时，和服务端开发沟通，要求提供三大类状态码。\n  - `规则3`：三大类状态码要求为：`状态1：正常状态`，`状态2：通用错误状态`，`状态3：有错误编码的状态`\n  - `规则4`：通用错误状态：统一提示`'网络拥堵'`\n  - `规则5`：有错误编码的状态：假设服务端不提供`状态3`，则让服务端在`状态2`提供`报错msg`信息，前端显示msg，但限制长度`20`个字符，超长显示`...`\n  - `规则6`：假设服务端提供`状态3`，前端直接显示对应的报错msg。\n  - `规则7`：特殊情况，如导入excel接口，`状态3`提供冗长的数据填报位置的错误信息，前端需要处理为`页面侧面弹窗`，处理文案排列，友好显示报错提示，默认不关闭，支持点`'我知道了'`按钮关闭\n  ```\n  // 伪代码示例\n  resp => {\n    if (resp.response.code == 未登录) {\n      跳转登录页面\n    } else if ( resp.response.code == 正常状态 ) {\n      return res.data;\n    } else if ( resp.response.code == 通用错误状态 ) {\n      弹框提示：网络拥堵\n      return Promise.reject(resp);\n    } else if ( resp.response.code == 特殊场景报错(excel导入报错) ) {\n      侧边弹框提示：具体的长字符串报错信息（如用:Notification组件）\n      return Promise.reject(resp);\n    } else {\n      弹框提示：resp.response.msg(服务端定义的报错消息)\n      return Promise.reject(resp);\n    }\n  }\n  ```\n      "}},methods:{}},i=o,c=(s("f23b"),s("2877")),a=Object(c["a"])(i,t,r,!1,null,"aab78964",null);e["default"]=a.exports},"8af1":function(n,e,s){},f23b:function(n,e,s){"use strict";s("8af1")}}]);
//# sourceMappingURL=chunk-21e89575.8feb4f52.js.map