(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{398:function(a,t,e){"use strict";e.r(t);var s=e(44),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"快捷键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[a._v("#")]),a._v(" 快捷键")]),a._v(" "),e("h3",{attrs:{id:"系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统"}},[a._v("#")]),a._v(" 系统")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("Win-E")]),a._v("：打开系统文件浏览器")]),a._v(" "),e("li",[e("code",[a._v("Win-Tab")]),a._v("：打开程序网格面板，类似于 "),e("code",[a._v("C-Tab")]),a._v("，但默认不会切换，而是展开全屏面板选择一个正在运行的程序切换过去")]),a._v(" "),e("li",[e("code",[a._v("Win-R")]),a._v("：打开"),e("strong",[a._v("运行")])]),a._v(" "),e("li",[e("code",[a._v("Win-S")]),a._v("：搜索任何东西")]),a._v(" "),e("li",[e("code",[a._v("Win-A")]),a._v("：展开右侧通知面板")]),a._v(" "),e("li",[e("code",[a._v("C-Tab")]),a._v("：切换程序")]),a._v(" "),e("li",[e("code",[a._v("CS-Esc")]),a._v("：打开任务管理器")]),a._v(" "),e("li",[e("code",[a._v("C-F")]),a._v("：在当前页内容中搜索关键字\n"),e("ul",[e("li",[e("code",[a._v("Enter")]),a._v("：下一个匹配关键字")]),a._v(" "),e("li",[e("code",[a._v("S-Enter")]),a._v("：上一个匹配关键字")])])])]),a._v(" "),e("h3",{attrs:{id:"非常见"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非常见"}},[a._v("#")]),a._v(" 非常见")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("C-空格")]),a._v("：切换半角/全角标点符号")]),a._v(" "),e("li",[e("code",[a._v("C-.")]),a._v("：切换中英文标点符号（隐藏的很深。。。）")]),a._v(" "),e("li",[e("code",[a._v("Win-长按")]),a._v(": 显示快捷键指南")]),a._v(" "),e("li",[e("code",[a._v("Win-Top")]),a._v(": 最大化")]),a._v(" "),e("li",[e("code",[a._v("Win-Down")]),a._v(": 最小化")]),a._v(" "),e("li",[e("code",[a._v("Win-Left")]),a._v(": 左侧贴靠")]),a._v(" "),e("li",[e("code",[a._v("Win-Left")]),a._v(": 右侧贴靠")])]),a._v(" "),e("h2",{attrs:{id:"高级功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级功能"}},[a._v("#")]),a._v(" 高级功能")]),a._v(" "),e("h3",{attrs:{id:"定时关机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时关机"}},[a._v("#")]),a._v(" 定时关机")]),a._v(" "),e("p",[a._v("使用以下命令会在指定时间后关机")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" –s –t "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("second time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("例如以下命令指的是在 1h 后关机")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" –s –t "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3600")]),a._v("\n")])])]),e("blockquote",[e("p",[a._v("参考: "),e("a",{attrs:{href:"https://jingyan.baidu.com/article/93f9803f06bb90e0e46f55ec.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("百度 win10 怎么定时关机？"),e("OutboundLink")],1)])]),a._v(" "),e("h3",{attrs:{id:"powertoys-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#powertoys-使用"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"/p/0bfcb8d2846a4c37ad37d7f0f7ff709a"}},[a._v("PowerToys 使用")])]),a._v(" "),e("h3",{attrs:{id:"windows-为当前用户添加开机自启项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-为当前用户添加开机自启项"}},[a._v("#")]),a._v(" Windows 为当前用户添加开机自启项")]),a._v(" "),e("p",[a._v("每次打开电脑，开机之后总是要启动 Chrome 浏览器等一些常用应用，而常用应用中有的有开机自启的选项，有些则没有。每次打开都是重复性的操作，真是不厌其烦。。。")]),a._v(" "),e("p",[a._v("下面是 Windows 当前用户的自启动目录的路径")]),a._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("C:\\Users\\{你的用户名}\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\n")])])]),e("p",[a._v("我们可以为想要自启动的程序创建一个快捷方式，然后将快捷方式放到这个目录下就可以啦")]),a._v(" "),e("p",[a._v("然而，直接放快捷方式太多的话管理起来可能会是个麻烦，所以我们可以使用脚本，下面给出两种脚本示例")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("ahk 脚本")]),a._v(" "),e("div",{staticClass:"language-ahk extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("; 开机自启 Chrome 浏览器\nRun Chrome\n")])])])]),a._v(" "),e("li",[e("p",[a._v("cmd 脚本")]),a._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("rem 开机自启 Chrome 浏览器\nstart chrome\n")])])])])]),a._v(" "),e("p",[a._v("那么，关于在 Windows 下添加自启项到这里边结束啦，很简单的吧！")]),a._v(" "),e("h3",{attrs:{id:"cmd-命令提示符工具文件所在路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-命令提示符工具文件所在路径"}},[a._v("#")]),a._v(" cmd 命令提示符工具文件所在路径？")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("where cmd\n")])])]),e("blockquote",[e("p",[a._v("参考："),e("a",{attrs:{href:"https://www.zhihu.com/question/49124998",target:"_blank",rel:"noopener noreferrer"}},[a._v("知乎：cmd 命令提示符工具文件所在路径？"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[a._v("#")]),a._v(" 开发")]),a._v(" "),e("h3",{attrs:{id:"设置正确的网络环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置正确的网络环境"}},[a._v("#")]),a._v(" 设置正确的网络环境")]),a._v(" "),e("p",[a._v("在国内网络环境中，开发是一件比较痛苦的事情，尤其是各种依赖，包括但不限于 Linux 包、NPM、GitHub、Maven、AWS 等等，都 TMD 慢的心态爆炸。")]),a._v(" "),e("ol",[e("li",[a._v("购买一个代理服务")]),a._v(" "),e("li",[a._v("使用 SSR")]),a._v(" "),e("li",[a._v("使用 Proxifier 透明代理")]),a._v(" "),e("li",[a._v("自定义 DNS：使用世界上最好的 "),e("a",{attrs:{href:"https://1.1.1.1/",target:"_blank",rel:"noopener noreferrer"}},[a._v("1.1.1.1"),e("OutboundLink")],1),a._v(" 代替默认的 DNS。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);