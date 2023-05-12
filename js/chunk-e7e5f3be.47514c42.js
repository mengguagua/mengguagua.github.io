(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7e5f3be"],{"7f0c":function(n,t,e){},dfe0:function(n,t,e){"use strict";e("7f0c")},f4c2:function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n._self._c;return t("div",[t("v-md-editor",{staticClass:"github-markdown-body",attrs:{value:n.text,mode:"preview"}}),t("div",{staticClass:"demo-content"})],1)},a=[],s={components:{},data:function(){return{text:"\n  ### 推荐文章列表\n  [1、Javascript定义类（class）的三种方法](https://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html)\n  > 极简主义法生成`类`，不借用this和prototype\n\n  [2、JavaScript与有限状态机](https://www.ruanyifeng.com/blog/2013/09/finite-state_machine_for_javascript.html)\n  > 了解有限状态机的概念，通过状态机代替回调函数，发布/订阅，事件监听。意思有点类似[Redux](https://www.redux.org.cn/docs/introduction/Motivation.html)\n\n  [3、什么是 Event Loop？](https://www.ruanyifeng.com/blog/2014/10/event-loop.html)\n  > 说明js单线程是怎么实现异步模式。具体细则还可参考[这个文章](https://www.cnblogs.com/yqx0605xi/p/9267827.html)\n\n  [4、Thunk 函数的含义和用法](https://www.ruanyifeng.com/blog/2015/05/thunk.html)\n  > 柯里化？ Thunk+Generator处理异步，看下是不是很像async + await ?\n\n  [5、async 函数的含义和用法](https://www.ruanyifeng.com/blog/2015/05/async.html)\n  > async和await是Thunk+Generator的终极版本\n\n  [6、Flux 架构简单认识](https://www.ruanyifeng.com/blog/2016/01/flux.html)\n  > 相比状态机的概念，Flux和Redux更相近了\n\n  [7、npm 模块安装机制简介](https://www.ruanyifeng.com/blog/2016/01/npm-install.html)\n  > 了解基本流程即可，从缓存取依赖来加快install的方式是否可取，自行判断\n\n  [8、浏览器同源政策及其规避方法](https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)和[跨域资源共享 CORS 详解](https://www.ruanyifeng.com/blog/2016/04/cors.html)\n  > 主要了解基本意义，H5提供的window.postMessage，以及CORS(实现CORS通信的关键是后台服务)\n\n  [9、IntersectionObserver API 使用教程](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)\n  > 用来\"观察\"元素是否可见，是监听scroll的更优解\n\n  [10、Pointfree 编程风格指南](https://www.ruanyifeng.com/blog/2017/03/pointfree.html)\n  > 通过组合可复用的简单函数，生成合乎业务逻辑的复杂函数的方案，是函数式编程的具体应用方式\n\n  [11、Reduce 和 Transduce 的含义](https://www.ruanyifeng.com/blog/2017/03/reduce_transduce.html)\n  > 数组的reduce和map关系令我对map印象加深，而标题Transduce方法，它是Ramda这个js库的，可选择性阅读\n\n  [12、浏览器数据库 IndexedDB](https://www.ruanyifeng.com/blog/2018/07/indexeddb.html)\n  > 主要是了解前端也支持这样一种功能，使用场景可能不多，比如将用户信息如用户个人图片转为base64，存储在浏览器数据库\n\n  [13、Web Worker 使用教程](https://www.ruanyifeng.com/blog/2018/07/web-worker.html)\n  > 解决页面计算复杂，但机器性能优秀，由于js单线程导致ui交互卡顿的问题。公司使用场景不多，但需要前端人员确实知道有这样的功能\n\n  [14、Web Components 入门实例教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html)\n  > 使用Web Components API 提供的`template`标签，实现组件，效果类似vue和react组件\n\n  [15、单钥加密(DES)和双钥加密(RSA)基础认知](https://www.ruanyifeng.com/blog/2006/12/notes_on_cryptography.html)\n  > 公钥用来加密信息，私钥用来数字签名.好处是公钥可以在web四处传递不担心泄露，而私钥只有服务器存在，不用传递。[这是图解说明RSA](https://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html)\n\n  [16、字符编码:ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)\n  > 帮助理解字符(象形文和其它字符)是如何转换成计算机可识别的01，互联网是如何处理不同语言的字符\n\n  [17、2的补码](https://www.ruanyifeng.com/blog/2009/08/twos_complement.html)\n  > 用来理解计算机怎么存储负数，理解为什么是'二进制取反+1'这种逻辑。\n\n  [18、数据压缩与信息熵](https://www.ruanyifeng.com/blog/2014/09/information-entropy.html)\n  > 解释了数据压缩的基本原理\n\n  [19、图解 Monad](https://www.ruanyifeng.com/blog/2015/07/monad.html)\n  > 函数式编程的图解说明，即输入一个值，连续的调用函数，最后得到期望的结果\n\n  [20、DNS 基本原理](https://www.ruanyifeng.com/blog/2016/06/dns.html)\n  > 域名解析的逻辑，[其它详解](https://www.ruanyifeng.com/blog/2022/08/dns-query.html)\n\n  [21、XOR加密](https://www.ruanyifeng.com/blog/2017/05/xor.html)【[其它应用：数据备份](https://www.ruanyifeng.com/blog/2021/01/_xor.html)】\n  > `^`异或运算，任意值message和同一个值key异或两次，得到还是message。密码学应用：1、保证key长度大于message。2、key是一次性的。\n  > 使用场景：登录前调用接口查询一次性的key, 然后密码md5，md5的密码`^`key,生成密文，调用登录接口。后端拿到密文`^`key，得到md5的密码\n\n  [22、IaaS，PaaS，SaaS 的区别](https://www.ruanyifeng.com/blog/2017/07/iaas-paas-saas.html)\n  > SaaS比较常见，就是他人提供成品，你购买了换个logo，最多简单包装(换个界面)一下就进行贩卖\n\n  [23、信息论入门说明](https://www.ruanyifeng.com/blog/2019/08/information-theory.html)\n  > 阐述计算机是怎么通过二进制01来表示食物，怎么做成本最低\n\n  [24、base64基本原理](https://www.ruanyifeng.com/blog/2008/06/base64.html)\n  > 阐述字符是怎么转换成base64的。base64编码的文本会比原文大三分之一左右。\n\n  [25、URL的#号](https://www.ruanyifeng.com/blog/2011/03/url_hash.html)\n  > 阐述url上带#时候浏览器和服务是怎么处理的。spa单页面应用路由经常会依赖#。\n\n  [26、如何使用 Issue 管理软件项目？](https://www.ruanyifeng.com/blog/2017/08/issue.html)\n  > 告诉你什么是issue 以及是如何发展的，有什么使用场景\n\n  [27、如何降低软件的复杂性](https://www.ruanyifeng.com/blog/2018/09/complexity.html)\n  > 告诉你什么行为导致复杂度增加，尽量怎么避免增加复杂性\n\n  [28、OAuth 2.0 的一个简单解释](https://www.ruanyifeng.com/blog/2019/04/oauth_design.html)\n  > 阐述什么是OAuth，为什么需要OAuth\n  "}},methods:{}},w=s,i=(e("dfe0"),e("2877")),l=Object(i["a"])(w,o,a,!1,null,"6681016f",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-e7e5f3be.47514c42.js.map