(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(t,s,a){t.exports=a.p+"assets/img/addf49c903f840bfa59ebaa1513ec689.50ab1c04.png"},401:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("在 "),n("a",{attrs:{href:"/p/475d21afd2404d5ba1f71f600c44da09"}},[t._v("基本项目搭建")]),t._v(" 中，我们已经能够启动一个 electron 应用程序了（开发环境），现在来看如何将之打包为二进制程序便于分发给最终用户。")]),t._v(" "),n("h2",{attrs:{id:"依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.electron.build/",target:"_blank",rel:"noopener noreferrer"}},[t._v("electron-builder"),n("OutboundLink")],1),t._v(": 打包的主要工具库，负责这个 electron 的跨平台打包工作\n"),n("blockquote",[n("p",[t._v("事实上，还有一些其它的打包工具，但目前还没有比它更好的，参考: "),n("a",{attrs:{href:"https://npmcompare.com/compare/electron-builder,electron-forge,electron-packager",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://npmcompare.com/compare/electron-builder,electron-forge,electron-packager"),n("OutboundLink")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"渲染层打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渲染层打包"}},[t._v("#")]),t._v(" 渲染层打包")]),t._v(" "),n("p",[t._v("直接使用 cra 的打包工具即可，没什么大不了的，但确实存在一些注意事项")]),t._v(" "),n("ul",[n("li",[t._v("因为 electron 在生产环境会从文件系统中加载静态资源，所以打包出来的静态资源必须支持相对路径，下面是常见的两个设置。\n"),n("ul",[n("li",[t._v("必须在 "),n("em",[t._v("apps/renderer/package.json")]),t._v(" 中声明 "),n("code",[t._v('"homepage": "."')]),t._v("，参考: "),n("a",{attrs:{href:"https://create-react-app.dev/docs/deployment/#building-for-relative-paths",target:"_blank",rel:"noopener noreferrer"}},[t._v("Building for Relative Paths"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("路由必须是 "),n("code",[t._v("hash")]),t._v(" 模式")])])])]),t._v(" "),n("h2",{attrs:{id:"主进程打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主进程打包"}},[t._v("#")]),t._v(" 主进程打包")]),t._v(" "),n("p",[t._v("electron-builder 打包需要以下几个步骤")]),t._v(" "),n("h3",{attrs:{id:"更新-package-json-的一些配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新-package-json-的一些配置"}},[t._v("#")]),t._v(" 更新 package.json 的一些配置")]),t._v(" "),n("ol",[n("li",[t._v("使用 package.json 中的 "),n("code",[t._v("build")]),t._v(" 字段作为配置项，参考: "),n("a",{attrs:{href:"https://www.electron.build/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.electron.build/"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("electron-builder 使用 "),n("code",[t._v("main")]),t._v(" 字段作为启动脚本文件")]),t._v(" "),n("li",[t._v("electron-builder 要求必须使用固定的版本号，意味着 electron 依赖需要指定为 "),n("code",[t._v('"electron": "10.2.0"')])])]),t._v(" "),n("p",[t._v("下面是一个基本的配置示例")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/main.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个非常基本的打包脚本")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pkg"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electron-builder"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"electron"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.2.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"electron-builder"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^22.9.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// electron 主进程实际上是 nodejs 环境，所以为了更好的开发体验，安装 nodejs 的类型定义")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@types/node"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^12.19.12"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 程序的唯一标识符")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"appId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.rxliuli.electron_example"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包出来的 exe 名字")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"productName"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electron 示例应用"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包的目录")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"directories"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"output"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"win"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包目标，参考: https://www.electron.build/")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nsis"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"复制静态资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复制静态资源"}},[t._v("#")]),t._v(" 复制静态资源")]),t._v(" "),n("p",[t._v("现在，我们需要打包静态资源并复制到主进程模块里面")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("cd apps/renderer")]),t._v(" 目录")]),t._v(" "),n("li",[n("code",[t._v("yarn build")]),t._v(" 打包静态资源")]),t._v(" "),n("li",[t._v("将静态资源复制到 "),n("code",[t._v("build/dist")]),t._v(" 目录下")])]),t._v(" "),n("h3",{attrs:{id:"修改主进程入口文件-main-ts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改主进程入口文件-main-ts"}},[t._v("#")]),t._v(" 修改主进程入口文件 main.ts")]),t._v(" "),n("p",[t._v("还需要修改 "),n("em",[t._v("src/main.ts")]),t._v(" 代码，主要修改 BrowserWindow 对象载入的 "),n("code",[t._v("url")]),t._v(" 地址")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BrowserWindow "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electron"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMainWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建新的 electron 窗口")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mainWindow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BrowserWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 载入生产环境的 url")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" mainWindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadURL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./build/index.html"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他代码...")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("注意，这个 url 路径是相对于打包后的 "),n("code",[t._v("dist/main.js")]),t._v(" 而言的，因为最终打包的程序运行时的相对路径也是这样。")])]),t._v(" "),n("h3",{attrs:{id:"打包主进程的-exe-程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包主进程的-exe-程序"}},[t._v("#")]),t._v(" 打包主进程的 exe 程序")]),t._v(" "),n("blockquote",[n("p",[t._v("因为 electron-builder 需要下载基本的 electron 程序，所以请提前设置好透明代理，如果不知道它是什么，参考: "),n("a",{attrs:{href:"https://github.com/rxliuli/haoel.github.io#7-%E9%80%8F%E6%98%8E%E7%BD%91%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("透明网关"),n("OutboundLink")],1),t._v("，"),n("a",{attrs:{href:"http://www.proxifier.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Proxifier"),n("OutboundLink")],1)])]),t._v(" "),n("ol",[n("li",[t._v("使用 "),n("code",[t._v("yarn compile")]),t._v(" 编译 ts 代码")]),t._v(" "),n("li",[t._v("使用 "),n("code",[t._v("yarn pkg")]),t._v(" 打包 electron 应用")])]),t._v(" "),n("p",[t._v("现在，我们应该可以在 "),n("em",[t._v("apps/main/release/win-unpacked")]),t._v(" 下看到 exe 程序，双击它即可看到之前在开发环境的首页了。")]),t._v(" "),n("blockquote",[n("p",[t._v("参考: "),n("a",{attrs:{href:"https://github.com/rxliuli/electron_example/tree/85d398fc2c6ba6c918ad9641dbb5d8bae2d4216b/apps/main",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rxliuli/electron_example/tree/85d398fc2c6ba6c918ad9641dbb5d8bae2d4216b/apps/main"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"优化打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化打包"}},[t._v("#")]),t._v(" 优化打包")]),t._v(" "),n("p",[t._v("虽然打包已经实现，但确实还存在一些问题")]),t._v(" "),n("ul",[n("li",[t._v("打包脚本仍然不是一键的")]),t._v(" "),n("li",[t._v("不能兼容开发、生产环境")])]),t._v(" "),n("p",[t._v("下面我们来解决这两个问题")]),t._v(" "),n("h3",{attrs:{id:"实现一键打包二进制程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现一键打包二进制程序"}},[t._v("#")]),t._v(" 实现一键打包二进制程序")]),t._v(" "),n("p",[t._v("使用 gulp 复制渲染层的静态资源")]),t._v(" "),n("p",[t._v("1、添加 gulp 相关依赖 "),n("code",[t._v("yarn add -D gulp ts-node @types/gulp fs-extra @types/fs-extra")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("gulp @types/gulp")]),t._v(": gulp 核心依赖")]),t._v(" "),n("li",[n("code",[t._v("ts-node")]),t._v(": 使用 ts 编写 gulp 脚本必须的依赖")]),t._v(" "),n("li",[n("code",[t._v("fs-extra @types/fs-extra")]),t._v(": fs 的扩展增强，使用 Promise 包装异步 api")])]),t._v(" "),n("p",[t._v("2、添加 gulp 脚本文件")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remove "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs-extra"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyByMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("copyMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    copyMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destDir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" srcPath "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" destPath "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destDir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("basename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("srcPath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("srcPath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" destPath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 清理最终生成目录\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 复制一些资源到 dist 目录中\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyStatic")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyByMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../renderer/build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("3、添加 npm script")]),t._v(" "),n("blockquote",[n("p",[t._v("注: lerna 的好处之一就是可以运行其它模块的 npm script。")])]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包渲染层的静态资源")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build:web"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lerna run --scope renderer build"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包渲染层的静态资源之后复制然后使用 electron-builder 打包 exe 程序")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pkg"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gulp clean && yarn compile && yarn build:web && gulp copyStatic && electron-builder"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("4、修改 tsconfig.json")]),t._v(" "),n("p",[t._v("此时在 "),n("em",[t._v("apps/main")]),t._v(" 模块根目录下也有 ts 文件了，所以 tsc 翻译代码会将它们也包含进去，但实际上不需要。")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("现在，我们可以使用一个命令打包 exe 程序了。")]),t._v(" "),n("blockquote",[n("p",[t._v("参考: "),n("a",{attrs:{href:"https://github.com/rxliuli/electron_example/blob/3dacff5dc0/apps/main/package.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rxliuli/electron_example/blob/3dacff5dc0/apps/main/package.json"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"使用环境变量来兼容开发、生产环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用环境变量来兼容开发、生产环境"}},[t._v("#")]),t._v(" 使用环境变量来兼容开发、生产环境")]),t._v(" "),n("p",[t._v("解决方案简单来说就一句话：使用环境变量指定开发环境的 URL。\n这里使用 "),n("a",{attrs:{href:"https://github.com/toddbluhm/env-cmd",target:"_blank",rel:"noopener noreferrer"}},[t._v("env-cmd"),n("OutboundLink")],1),t._v(" 来跨平台写入环境变量（不使用 "),n("a",{attrs:{href:"https://github.com/motdotla/dotenv",target:"_blank",rel:"noopener noreferrer"}},[t._v("dotenv"),n("OutboundLink")],1),t._v(" 的原因在于自定义环境使用起来有点麻烦，不像 env-cmd 那么直观），而另一个 "),n("a",{attrs:{href:"https://github.com/kentcdodds/cross-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("cross-env"),n("OutboundLink")],1),t._v(" 并未提供管理环境变量的解决方案。下面说一下使用 env-cmd 的步骤")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("安装依赖 "),n("code",[t._v("yarn add -D env-cmd")])])]),t._v(" "),n("li",[n("p",[t._v("添加配置文件 "),n("em",[t._v(".env-cmdrc.json")]),t._v("\n基本上是一个键值映射文件，键是环境，值对象是环境变量")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ELECTRON_START_URL"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:3000/"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("在 "),n("code",[t._v("dev:electron")]),t._v(" 命令之前设定环境变量 "),n("code",[t._v("env-cmd -e dev electron ./dist/main.js")])])]),t._v(" "),n("li",[n("p",[t._v("修改 "),n("em",[t._v("src/main.ts")]),t._v(" 读取环境变量")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" mainWindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadURL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ELECTRON_START_URL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./build/index.html"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),n("p",[t._v("现在，像 "),n("a",{attrs:{href:"/p/475d21afd2404d5ba1f71f600c44da09"}},[t._v("基本项目搭建")]),t._v(" 中 "),n("strong",[t._v("更新 "),n("em",[t._v("package.json")]),t._v(" 添加几个 npm script")]),t._v(" 说的那样启动开发环境就会显示开发环境的页面，打包后显示的则是打包后的静态资源。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(367),alt:"效果"}})]),t._v(" "),n("blockquote",[n("p",[t._v("参考: "),n("a",{attrs:{href:"https://github.com/rxliuli/electron_example/blob/f8b4f94435/apps/main/.env-cmdrc.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/rxliuli/electron_example/blob/f8b4f94435/apps/main/.env-cmdrc.json"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("虽然 electron-builder 已经足够好用了，但它仍然不能解决 electron 项目工程上的问题，所以这里结合了 "),n("code",[t._v("lerna/gulp/env-cmd")]),t._v(" 打包。")])])}),[],!1,null,null,null);s.default=e.exports}}]);