import{o as n,c as s,F as a,a as t,b as o}from"./app.55fed6f8.js";const e={},c=t("h2",{id:"与路由的配合",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#与路由的配合","aria-hidden":"true"},"#"),o(" 与路由的配合")],-1),p=t("p",null,[o("重点是"),t("strong",null,"加载"),o("与"),t("strong",null,"切换")],-1),u=t("p",null,"i18n 下的路由示例（hash 模式要加前缀）",-1),l=t("ul",null,[t("li",null,[t("code",null,"/en-US/***")]),t("li",null,[t("code",null,"/zh-CN/***")]),t("li",null,[t("code",null,"/zh-TW/***")])],-1),i=t("p",null,"示意图",-1),k=t("p",null,[t("img",{src:"/assets/f01422d89e394a48ac730c669c39880b.25a5078c.svg",alt:"加载机制.drawio.svg"}),t("img",{src:"/assets/929ed05b5ef141dbb308e0f3149f4b2a.ee29391c.svg",alt:"切换机制.drawio.svg"})],-1),r=t("hr",null,null,-1),b=t("p",null,"与 react-router 结合的核心代码",-1),g=t("div",{class:"language-typescript ext-ts line-numbers-mode"},[t("pre",{class:"language-typescript"},[t("code",null,[t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token punctuation"},"{"),o(" useHistory"),t("span",{class:"token punctuation"},","),o(" useLocation "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},'"react-router-dom"'),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token punctuation"},"{"),o(" useMemo "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},'"react"'),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"import"),o(),t("span",{class:"token punctuation"},"{"),o(" LanguageEnum "),t("span",{class:"token punctuation"},"}"),o(),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},'"@liuli-util/i18next-util"'),t("span",{class:"token punctuation"},";"),o("\n\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"function"),o(),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("value"),t("span",{class:"token operator"},":"),o(" LanguageEnum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"function"),o(),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("value"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},":"),o(" LanguageEnum"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"function"),o(),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("\n  value"),t("span",{class:"token operator"},":"),o(" LanguageEnum "),t("span",{class:"token operator"},"|"),o(),t("span",{class:"token builtin"},"string"),o("\n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},":"),o(" LanguageEnum "),t("span",{class:"token operator"},"|"),o(),t("span",{class:"token builtin"},"string"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token keyword"},"const"),o(" LanguagePrefixMap "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"{"),o("\n    "),t("span",{class:"token punctuation"},"["),o("LanguageEnum"),t("span",{class:"token punctuation"},"."),o("En"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"/en-US/"'),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token punctuation"},"["),o("LanguageEnum"),t("span",{class:"token punctuation"},"."),o("ZhCN"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"/zh-CN/"'),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token string"},'"/zh-CN/"'),t("span",{class:"token operator"},":"),o(" LanguageEnum"),t("span",{class:"token punctuation"},"."),o("ZhCN"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token string"},'"/en-US/"'),t("span",{class:"token operator"},":"),o(" LanguageEnum"),t("span",{class:"token punctuation"},"."),o("En"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token keyword"},"return"),o(" LanguagePrefixMap"),t("span",{class:"token punctuation"},"["),o("value "),t("span",{class:"token keyword"},"as"),o(),t("span",{class:"token keyword"},"keyof"),o(),t("span",{class:"token keyword"},"typeof"),o(" LanguagePrefixMap"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"function"),o(),t("span",{class:"token function"},"useLanguage"),t("span",{class:"token punctuation"},"("),o("init"),t("span",{class:"token operator"},":"),o(" LanguageEnum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},":"),o(" LanguageEnum "),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token keyword"},"const"),o(" location "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"useLocation"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token keyword"},"const"),o(" history "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"useHistory"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token function"},"useMemo"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"{"),o("\n    "),t("span",{class:"token keyword"},"const"),o(" regexp "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token regex"},[t("span",{class:"token regex-delimiter"},"/"),t("span",{class:"token regex-source language-regex"},"(\\/.+?\\/)"),t("span",{class:"token regex-delimiter"},"/")]),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token keyword"},"const"),o(" res "),t("span",{class:"token operator"},"="),o(" regexp"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"exec"),t("span",{class:"token punctuation"},"("),o("location"),t("span",{class:"token punctuation"},"."),o("pathname"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token keyword"},"if"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),o("res"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n      history"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("init"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n      "),t("span",{class:"token keyword"},"return"),o(" init"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token punctuation"},"}"),o("\n    "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("res"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token punctuation"},"["),o("history"),t("span",{class:"token punctuation"},","),o(" location"),t("span",{class:"token punctuation"},"."),o("pathname"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br")])],-1),m=t("div",{class:"language-tsx ext-tsx line-numbers-mode"},[t("pre",{class:"language-tsx"},[t("code",null,[t("span",{class:"token keyword"},"function"),o(),t("span",{class:"token function"},"App"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token keyword"},"const"),o(" language "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"useLanguage"),t("span",{class:"token punctuation"},"("),o("LanguageEnum"),t("span",{class:"token punctuation"},"."),o("En"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token keyword"},"const"),o(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),o(" value"),t("span",{class:"token operator"},":"),o(" list "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o(" fetch"),t("span",{class:"token punctuation"},"]"),o(),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"useAsyncFn"),t("span",{class:"token punctuation"},"("),o("\n    "),t("span",{class:"token keyword"},"async"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"language"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"{"),o("\n      "),t("span",{class:"token builtin"},"console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"language: "'),t("span",{class:"token punctuation"},","),o(" language"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n      "),t("span",{class:"token keyword"},"await"),o(" i18n"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"init"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),o(" en"),t("span",{class:"token punctuation"},","),o(" zhCN "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o(" language"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n      "),t("span",{class:"token keyword"},"const"),o(" prefix "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("language"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n      "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token function"},"routeList"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"item"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),o("\n        "),t("span",{class:"token operator"},"..."),o("item"),t("span",{class:"token punctuation"},","),o("\n        path"),t("span",{class:"token operator"},":"),o(" PathUtil"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"join"),t("span",{class:"token punctuation"},"("),o("prefix"),t("span",{class:"token punctuation"},","),o(" item"),t("span",{class:"token punctuation"},"."),o("path "),t("span",{class:"token keyword"},"as"),o(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token punctuation"},"["),o("language"),t("span",{class:"token punctuation"},"]"),o("\n  "),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n\n  "),t("span",{class:"token function"},"useMount"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token function"},"fetch"),t("span",{class:"token punctuation"},"("),o("language"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n\n  "),t("span",{class:"token keyword"},"const"),o(" location "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"useLocation"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token keyword"},"const"),o(" history "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"useHistory"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n\n  "),t("span",{class:"token keyword"},"async"),o(),t("span",{class:"token keyword"},"function"),o(),t("span",{class:"token function"},"changeLanguage"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[o("value"),t("span",{class:"token operator"},":"),o(" LanguageEnum")]),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n    "),t("span",{class:"token keyword"},"const"),o(" path "),t("span",{class:"token operator"},"="),o(" location"),t("span",{class:"token punctuation"},"."),o("pathname"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"replace"),t("span",{class:"token punctuation"},"("),o("\n      "),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("language"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token function"},"convertLanguagePrefix"),t("span",{class:"token punctuation"},"("),o("value"),t("span",{class:"token punctuation"},")"),o("\n    "),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token builtin"},"console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"path: "'),t("span",{class:"token punctuation"},","),o(" language"),t("span",{class:"token punctuation"},","),o(" value"),t("span",{class:"token punctuation"},","),o(" path"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token keyword"},"await"),o(),t("span",{class:"token function"},"fetch"),t("span",{class:"token punctuation"},"("),o("value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    history"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),o("path"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),o("\n\n  "),t("span",{class:"token keyword"},"return"),o(),t("span",{class:"token punctuation"},"("),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("div")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("header")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n        "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("ul")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n          "),t("span",{class:"token punctuation"},"{"),o("list "),t("span",{class:"token operator"},"&&"),o("\n            list"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"item"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"("),o("\n              "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("li")]),o(),t("span",{class:"token attr-name"},"key"),t("span",{class:"token script language-javascript"},[t("span",{class:"token script-punctuation punctuation"},"="),t("span",{class:"token punctuation"},"{"),o("item"),t("span",{class:"token punctuation"},"."),o("path "),t("span",{class:"token keyword"},"as"),o(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n                "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),t("span",{class:"token class-name"},"Link")]),o(),t("span",{class:"token attr-name"},"to"),t("span",{class:"token script language-javascript"},[t("span",{class:"token script-punctuation punctuation"},"="),t("span",{class:"token punctuation"},"{"),o("item"),t("span",{class:"token punctuation"},"."),o("path "),t("span",{class:"token keyword"},"as"),o(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token punctuation"},"{"),o("item"),t("span",{class:"token punctuation"},"."),o("title"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),t("span",{class:"token class-name"},"Link")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n              "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("li")]),t("span",{class:"token punctuation"},">")]),o("\n            "),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token plain-text"},"\n        "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("ul")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n        "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("section")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n          "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("button")]),o(),t("span",{class:"token attr-name"},"onClick"),t("span",{class:"token script language-javascript"},[t("span",{class:"token script-punctuation punctuation"},"="),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token function"},"changeLanguage"),t("span",{class:"token punctuation"},"("),o("LanguageEnum"),t("span",{class:"token punctuation"},"."),o("En"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n            English\n          "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("button")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n          "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("button")]),o(),t("span",{class:"token attr-name"},"onClick"),t("span",{class:"token script language-javascript"},[t("span",{class:"token script-punctuation punctuation"},"="),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token function"},"changeLanguage"),t("span",{class:"token punctuation"},"("),o("LanguageEnum"),t("span",{class:"token punctuation"},"."),o("ZhCN"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n            中文\n          "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("button")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n        "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("section")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("header")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("section")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n        "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),t("span",{class:"token class-name"},"Suspense")]),o(),t("span",{class:"token attr-name"},"fallback"),t("span",{class:"token script language-javascript"},[t("span",{class:"token script-punctuation punctuation"},"="),t("span",{class:"token punctuation"},"{"),t("span",{class:"token string"},'"loading..."'),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token punctuation"},"{"),t("span",{class:"token function"},"renderRoutes"),t("span",{class:"token punctuation"},"("),o("list"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),t("span",{class:"token class-name"},"Suspense")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n      "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("section")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token plain-text"},"\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("div")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br"),t("span",{class:"line-number"},"36"),t("br"),t("span",{class:"line-number"},"37"),t("br"),t("span",{class:"line-number"},"38"),t("br"),t("span",{class:"line-number"},"39"),t("br"),t("span",{class:"line-number"},"40"),t("br"),t("span",{class:"line-number"},"41"),t("br"),t("span",{class:"line-number"},"42"),t("br"),t("span",{class:"line-number"},"43"),t("br"),t("span",{class:"line-number"},"44"),t("br"),t("span",{class:"line-number"},"45"),t("br"),t("span",{class:"line-number"},"46"),t("br"),t("span",{class:"line-number"},"47"),t("br"),t("span",{class:"line-number"},"48"),t("br"),t("span",{class:"line-number"},"49"),t("br"),t("span",{class:"line-number"},"50"),t("br"),t("span",{class:"line-number"},"51"),t("br"),t("span",{class:"line-number"},"52"),t("br"),t("span",{class:"line-number"},"53"),t("br"),t("span",{class:"line-number"},"54"),t("br"),t("span",{class:"line-number"},"55"),t("br"),t("span",{class:"line-number"},"56"),t("br")])],-1);e.render=function(t,o){return n(),s(a,null,[c,p,u,l,i,k,r,b,g,m],64)};export{e as default};
