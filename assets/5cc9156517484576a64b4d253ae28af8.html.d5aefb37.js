import{r as n,o as s,c as a,a as e,F as l,b as t}from"./app.4630c37e.js";const o={},c=e("h2",{id:"使用-react-devtool-插件调试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-react-devtool-插件调试","aria-hidden":"true"},"#"),t(" 使用 react devtool 插件调试")],-1),p=e("p",null,"前言",-1),r=e("p",null,"虽然绝大多数时候，我们都可以也应该在浏览器调试渲染层的功能，但确实也会有需要在 electron 程序中调试的需求，这里就说明一下 electron 如何安装 chrome 插件 react devtool 调试项目。",-1),u=t("核心依赖: "),i={href:"https://www.npmjs.com/package/electron-devtools-installer",target:"_blank",rel:"noopener noreferrer"},k=t("electron-devtools-installer"),b=e("p",null,"步骤",-1),d=e("p",null,"1、安装依赖",-1),m=e("p",null,[t("cd 到 "),e("em",null,"apps/main"),t(" 目录")],-1),g=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(" -D electron-devtools-installer @types/electron-devtools-installer\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),h=e("p",null,[t("2、添加环境变量 "),e("code",null,'"NODE_ENV": "development"'),t(" 标识为开发环境")],-1),f=e("p",null,[t("修改 "),e("em",null,".env-cmdrc.json"),t(" 配置文件")],-1),v=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),t("\n  "),e("span",{class:"token property"},'"dev"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t("\n    "),e("span",{class:"token property"},'"NODE_ENV"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"development"'),e("span",{class:"token punctuation"},","),t("\n    "),e("span",{class:"token property"},'"ELECTRON_START_URL"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"http://localhost:3000/"'),t("\n  "),e("span",{class:"token punctuation"},"}"),t("\n"),e("span",{class:"token punctuation"},"}"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br")])],-1),y=e("p",null,[t("3、修改 "),e("code",null,"main"),t(" 函数")],-1),w=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// main.ts"),t("\n"),e("span",{class:"token keyword"},"async"),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token function"},"main"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t("\n  app"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"ready"'),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token keyword"},"async"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token operator"},"=>"),t(),e("span",{class:"token punctuation"},"{"),t("\n    "),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("process"),e("span",{class:"token punctuation"},"."),t("env"),e("span",{class:"token punctuation"},"."),e("span",{class:"token constant"},"NODE_ENV"),t(),e("span",{class:"token operator"},"==="),t(),e("span",{class:"token string"},'"development"'),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t("\n      "),e("span",{class:"token comment"},"// 安装 devtool 扩展"),t("\n      "),e("span",{class:"token keyword"},"await"),t(),e("span",{class:"token function"},"installExtension"),e("span",{class:"token punctuation"},"("),e("span",{class:"token constant"},"REACT_DEVELOPER_TOOLS"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t("\n    "),e("span",{class:"token punctuation"},"}"),t("\n\n    "),e("span",{class:"token keyword"},"await"),t(),e("span",{class:"token function"},"createMainWindow"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t("\n"),e("span",{class:"token punctuation"},"}"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br")])],-1),E=e("p",null,[t("4、修改 "),e("code",null,"createMainWindow"),t(" 函数")],-1),j=e("p",null,"一般，我们在开发环境还习惯打开控制台，这里也可以在创建窗口后自动打开它。",-1),x=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"// main.ts"),t("\n"),e("span",{class:"token keyword"},"async"),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token function"},"createMainWindow"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t("\n  "),e("span",{class:"token comment"},"// 创建新的 electron 窗口"),t("\n  "),e("span",{class:"token keyword"},"const"),t(" mainWindow "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token class-name"},"BrowserWindow"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t("\n  "),e("span",{class:"token comment"},"// 载入生产环境的 url"),t("\n  "),e("span",{class:"token keyword"},"await"),t(" mainWindow"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"loadURL"),e("span",{class:"token punctuation"},"("),t("\n    process"),e("span",{class:"token punctuation"},"."),t("env"),e("span",{class:"token punctuation"},"."),e("span",{class:"token constant"},"ELECTRON_START_URL"),t(),e("span",{class:"token operator"},"||"),t(" path"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"join"),e("span",{class:"token punctuation"},"("),t("__dirname"),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token string"},'"./build/index.html"'),e("span",{class:"token punctuation"},")"),t("\n  "),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t("\n  "),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("process"),e("span",{class:"token punctuation"},"."),t("env"),e("span",{class:"token punctuation"},"."),e("span",{class:"token constant"},"NODE_ENV"),t(),e("span",{class:"token operator"},"==="),t(),e("span",{class:"token string"},'"development"'),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t("\n    mainWindow"),e("span",{class:"token punctuation"},"."),t("webContents"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"openDevTools"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t("\n  "),e("span",{class:"token punctuation"},"}"),t("\n"),e("span",{class:"token punctuation"},"}"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br")])],-1),_=e("blockquote",null,[e("p",null,[t("可能的错误参考: "),e("a",{href:"/p/c68829779f5449d0afe0e67806dc7fc1"},"常见问题"),t(),e("strong",null,"安装浏览器扩展报错")])],-1),N=e("p",null,"5、启动 electron 开发环境",-1),O=e("p",null,"启动后可以看到自动打开了控制台，然后可以看到 react devtool",-1),D=e("p",null,[e("img",{src:"/assets/4bdfd0cdf55c4e098b1f5b3a92fb7947.e460e93c.png",alt:"实际效果"})],-1),R=e("h2",{id:"让主进程的代码也能热更新",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#让主进程的代码也能热更新","aria-hidden":"true"},"#"),t(" 让主进程的代码也能热更新")],-1),L=e("p",null,"前言",-1),T=e("p",null,[t("可能你也发现了，渲染层使用 cra 创建的项目默认包含了热更新，这都要得益于 webpack HMR 技术，但主进程并非如此，即便使用 "),e("code",null,"tsc -w"),t(" 监听并编译 ts 代码，但想要生效仍然需要重启 electron，不厌其烦。幸运的是，有人已经实现了这个需求。")],-1),S=t("核心依赖: "),W={href:"https://www.npmjs.com/package/electron-reloader",target:"_blank",rel:"noopener noreferrer"},q=t("electron-reloader"),V=e("p",null,"1、安装依赖",-1),C=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(" -D electron-reloader\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),M=e("p",null,"2、在主进程入口文件载入 electron-reloader",-1),A=e("div",{class:"language-typescript ext-ts line-numbers-mode"},[e("pre",{class:"language-typescript"},[e("code",null,[e("span",{class:"token comment"},"//添加热更新功能"),t("\n"),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("process"),e("span",{class:"token punctuation"},"."),t("env"),e("span",{class:"token punctuation"},"."),e("span",{class:"token constant"},"NODE_ENV"),t(),e("span",{class:"token operator"},"==="),t(),e("span",{class:"token string"},'"development"'),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t("\n  "),e("span",{class:"token keyword"},"require"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"electron-reloader"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"("),t("module"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t("\n"),e("span",{class:"token punctuation"},"}"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br")])],-1),U=e("p",null,"3、启动 electron 开发环境",-1),B=e("p",null,[e("img",{src:"/assets/d2a07efc8ff24354b49289c2d4210b79.093240b2.gif",alt:"效果"})],-1),F=t("注 2: 当修改代码时，重启 electron 应用是由 electron-reloader 负责，即它不在 WebStorm 的控制之下了。 注 2: 目前另一个 "),H={href:"https://www.npmjs.com/package/electron-reload",target:"_blank",rel:"noopener noreferrer"},P=t("electron-reload"),z=t(" 还存在一些小问题。"),G=e("h2",{id:"使用-esbuild-优化渲染层打包性能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-esbuild-优化渲染层打包性能","aria-hidden":"true"},"#"),t(" 使用 esbuild 优化渲染层打包性能")],-1),I=e("blockquote",null,[e("p",null,"如果你还没有感觉到 cra 打包很慢，可以跳过这一节。")],-1),J=e("h3",{id:"禁止-ts-babel-将代码编译为-es5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#禁止-ts-babel-将代码编译为-es5","aria-hidden":"true"},"#"),t(" 禁止 ts/babel 将代码编译为 ES5")],-1),K=e("p",null,"由于 electron 捆绑的浏览器和 nodejs 版本都比较新，所以实际上渲染层我们基本不需要 babel 转义，可以优化一些配置项。",-1),Q=e("ul",null,[e("li",null,[e("p",null,[t("将 "),e("code",null,"browserslist"),t(" 设置为仅支持最后一个 chrome 版本")]),e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),t("\n  "),e("span",{class:"token property"},'"browserslist"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"last 1 chrome version"'),e("span",{class:"token punctuation"},"]"),t("\n"),e("span",{class:"token punctuation"},"}"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])])]),e("li",null,[e("p",null,[t("修改 "),e("em",null,"tsconfig.json"),t(" 中的配置，将编译目标修改为 "),e("code",null,"ESNext")]),e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),t("\n  "),e("span",{class:"token property"},'"compilerOptions"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t("\n    "),e("span",{class:"token property"},'"target"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"ESNext"'),t("\n  "),e("span",{class:"token punctuation"},"}"),t("\n"),e("span",{class:"token punctuation"},"}"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br")])])])],-1),X=e("h3",{id:"使用-esbuild-编译-typescript-代码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-esbuild-编译-typescript-代码","aria-hidden":"true"},"#"),t(" 使用 esbuild 编译 typescript 代码")],-1),Y=t("核心依赖: "),Z={href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"},$=t("esbuild"),nn=t(", "),sn={href:"https://github.com/gsoft-inc/craco",target:"_blank",rel:"noopener noreferrer"},an=t("craco"),en=e("p",null,"esbuild 是一个使用 golang 编写前端打包工具，官方在性能测试中提出比现有工具快 10-100 倍。",-1),ln=e("p",null,"在 cra 创建的项目中，我们可以通过 craco 将 esbuild 仅用作 ts 编译之用（不会检查类型）。",-1),tn=e("p",null,"1、安装依赖",-1),on=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(" -D @craco/craco craco-esbuild\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),cn=e("p",null,[t("2、修改 npm script，使用 "),e("code",null,"craco"),t(" 替换 "),e("code",null,"react-scripts")],-1),pn=e("div",{class:"language-json ext-json line-numbers-mode"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token punctuation"},"{"),t("\n  "),e("span",{class:"token property"},'"scripts"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t("\n    "),e("span",{class:"token property"},'"start"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"craco start"'),e("span",{class:"token punctuation"},","),t("\n    "),e("span",{class:"token property"},'"build:cra"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"react-scripts build"'),e("span",{class:"token punctuation"},","),t("\n    "),e("span",{class:"token property"},'"build"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"craco build"'),e("span",{class:"token punctuation"},","),t("\n    "),e("span",{class:"token property"},'"test"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"craco test"'),t("\n  "),e("span",{class:"token punctuation"},"}"),t("\n"),e("span",{class:"token punctuation"},"}"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br")])],-1),rn=e("p",null,"生产项目中的对比测试结果（6000+ 行 ts 代码）",-1),un=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"分类"),e("th",null,"ESBuild"),e("th",null,"tsc")])]),e("tbody",null,[e("tr",null,[e("td",null,"无缓存"),e("td",null,"17.61"),e("td",null,"36.57")]),e("tr",null,[e("td",null,"有缓存（运行 5 次）"),e("td",null,"15252.8"),e("td",null,"17095.2")])])],-1);o.render=function(t,o){const kn=n("OutboundLink");return s(),a(l,null,[c,p,r,e("blockquote",null,[e("p",null,[u,e("a",i,[k,e(kn)])])]),b,d,m,g,h,f,v,y,w,E,j,x,_,N,O,D,R,L,T,e("blockquote",null,[e("p",null,[S,e("a",W,[q,e(kn)])])]),V,C,M,A,U,B,e("blockquote",null,[e("p",null,[F,e("a",H,[P,e(kn)]),z])]),G,I,J,K,Q,X,e("blockquote",null,[e("p",null,[Y,e("a",Z,[$,e(kn)]),nn,e("a",sn,[an,e(kn)])])]),en,ln,tn,on,cn,pn,rn,un],64)};export default o;
