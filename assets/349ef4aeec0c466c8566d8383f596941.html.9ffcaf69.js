import{r as n,o as s,c as a,a as p,F as e,d as t,b as o}from"./app.ba20e0a6.js";const l={},r=t('<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p>graphql 提供前后端一致的 api 架构元数据，同时通过请求合并、按需获取加快 web 与后端交互的性能。</p><h2 id="结合-ts-使用" tabindex="-1"><a class="header-anchor" href="#结合-ts-使用" aria-hidden="true">#</a> 结合 ts 使用</h2><p>基本思路</p><ol><li>扫描代码中所有 <code>gql</code> 字符串</li><li>获取到代码中 <code>graphql</code> 字符串然后生成类型定义</li><li>使用这些类型定义</li></ol><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2><blockquote><p>以下使用 github api@v4 进行演示</p></blockquote><p>获取后端的元数据</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> https://docs.github.com/public/schema.docs.graphql <span class="token operator">&gt;</span> schema.graphql\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装基础 sdk</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> i @apollo/client graphql\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装代码生成器相关依赖</p><ul><li><code>@graphql-codegen/cli</code> 基础 cli</li><li><code>@graphql-codegen/typescript</code> ts 插件</li><li><code>@graphql-codegen/typescript-operations</code> ts 操作生成插件</li><li><code>@graphql-codegen/near-operation-file-preset</code> ts 预设配置</li></ul><p>创建配置 <em>codegen.yml</em></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">overwrite</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">schema</span><span class="token punctuation">:</span> <span class="token string">&quot;schema.graphql&quot;</span>\n<span class="token key atrule">generates</span><span class="token punctuation">:</span>\n  <span class="token key atrule">./src/graphql.gql.ts</span><span class="token punctuation">:</span>\n    <span class="token key atrule">plugins</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> typescript\n  <span class="token key atrule">./</span><span class="token punctuation">:</span>\n    <span class="token key atrule">documents</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;src/**/*.ts&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;!src/**/*.gql.ts&quot;</span>\n    <span class="token key atrule">preset</span><span class="token punctuation">:</span> near<span class="token punctuation">-</span>operation<span class="token punctuation">-</span>file\n    <span class="token key atrule">presetConfig</span><span class="token punctuation">:</span>\n      <span class="token key atrule">baseTypesPath</span><span class="token punctuation">:</span> ./src/graphql.gql.ts\n      <span class="token key atrule">extension</span><span class="token punctuation">:</span> .gql.ts\n    <span class="token key atrule">plugins</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> typescript<span class="token punctuation">-</span>operations\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在代码中添加一些 graphql 变量</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> gql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@apollo/client&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> findRepoStar <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  query findRepoStar($name: String!, $owner: String!) {\n    repository(name: $name, owner: $owner) {\n      name\n      stargazerCount\n    }\n  }\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> findRepo <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  query findRepo($name: String!, $owner: String!) {\n    repository(name: $name, owner: $owner) {\n      name\n    }\n  }\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>使用 cli 生成类型定义</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>pnpm graphql<span class="token operator">-</span>codegen <span class="token operator">--</span>config codegen<span class="token punctuation">.</span>yml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>生成结果大致如下，基本上就是参数和结果类型</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Types <span class="token keyword">from</span> <span class="token string">&quot;../graphql.gql&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FindRepoStarQueryVariables</span> <span class="token operator">=</span> Types<span class="token punctuation">.</span>Exact<span class="token operator">&lt;</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> Types<span class="token punctuation">.</span>Scalars<span class="token punctuation">[</span><span class="token string">&quot;String&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  owner<span class="token operator">:</span> Types<span class="token punctuation">.</span>Scalars<span class="token punctuation">[</span><span class="token string">&quot;String&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FindRepoStarQuery</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  __typename<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;Query&quot;</span><span class="token punctuation">;</span>\n  repository<span class="token operator">?</span><span class="token operator">:</span>\n    <span class="token operator">|</span> <span class="token punctuation">{</span> __typename<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;Repository&quot;</span><span class="token punctuation">;</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> stargazerCount<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>\n    <span class="token operator">|</span> <span class="token keyword">null</span>\n    <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FindRepoQueryVariables</span> <span class="token operator">=</span> Types<span class="token punctuation">.</span>Exact<span class="token operator">&lt;</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> Types<span class="token punctuation">.</span>Scalars<span class="token punctuation">[</span><span class="token string">&quot;String&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  owner<span class="token operator">:</span> Types<span class="token punctuation">.</span>Scalars<span class="token punctuation">[</span><span class="token string">&quot;String&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FindRepoQuery</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  __typename<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;Query&quot;</span><span class="token punctuation">;</span>\n  repository<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> __typename<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;Repository&quot;</span><span class="token punctuation">;</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>我们可以这样使用它</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">query</span><span class="token generic class-name"><span class="token operator">&lt;</span>FindRepoStarQuery<span class="token punctuation">,</span> FindRepoStarQueryVariables<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  query<span class="token operator">:</span> findRepoStar<span class="token punctuation">,</span>\n  variables<span class="token operator">:</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&quot;liuli-tools&quot;</span><span class="token punctuation">,</span>\n    owner<span class="token operator">:</span> <span class="token string">&quot;rxliuli&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;res: &quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="jetbrains-ide-支持" tabindex="-1"><a class="header-anchor" href="#jetbrains-ide-支持" aria-hidden="true">#</a> Jetbrains IDE 支持</h2>',24),c=o("安装插件 "),u={href:"https://plugins.jetbrains.com/plugin/8097",target:"_blank",rel:"noopener noreferrer"},i=o("JS GraphQL"),k=p("li",null,[p("p",null,[o("创建 graphql 基础配置文件 "),p("em",null,".graphqlconfig")]),p("div",{class:"language-json ext-json line-numbers-mode"},[p("pre",{class:"language-json"},[p("code",null,[p("span",{class:"token punctuation"},"{"),o("\n  "),p("span",{class:"token property"},'"name"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token string"},'"github GraphQL Schema"'),p("span",{class:"token punctuation"},","),o("\n  "),p("span",{class:"token property"},'"schemaPath"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token string"},'"schema.graphql"'),p("span",{class:"token punctuation"},","),o("\n  "),p("span",{class:"token property"},'"extensions"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token punctuation"},"{"),o("\n    "),p("span",{class:"token property"},'"endpoints"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token punctuation"},"{"),o("\n      "),p("span",{class:"token property"},'"Default GraphQL Endpoint"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token punctuation"},"{"),o("\n        "),p("span",{class:"token property"},'"url"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token string"},'"https://api.github.com/graphql"'),p("span",{class:"token punctuation"},","),o("\n        "),p("span",{class:"token property"},'"headers"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token punctuation"},"{"),o("\n          "),p("span",{class:"token property"},'"user-agent"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token string"},'"JS GraphQL"'),p("span",{class:"token punctuation"},","),o("\n          "),p("span",{class:"token property"},'"Authorization"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token string"},'"bearer <token>"'),o("\n        "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),o("\n        "),p("span",{class:"token property"},'"introspect"'),p("span",{class:"token operator"},":"),o(),p("span",{class:"token boolean"},"false"),o("\n      "),p("span",{class:"token punctuation"},"}"),o("\n    "),p("span",{class:"token punctuation"},"}"),o("\n  "),p("span",{class:"token punctuation"},"}"),o("\n"),p("span",{class:"token punctuation"},"}"),o("\n")])]),p("div",{class:"line-numbers"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br"),p("span",{class:"line-number"},"6"),p("br"),p("span",{class:"line-number"},"7"),p("br"),p("span",{class:"line-number"},"8"),p("br"),p("span",{class:"line-number"},"9"),p("br"),p("span",{class:"line-number"},"10"),p("br"),p("span",{class:"line-number"},"11"),p("br"),p("span",{class:"line-number"},"12"),p("br"),p("span",{class:"line-number"},"13"),p("br"),p("span",{class:"line-number"},"14"),p("br"),p("span",{class:"line-number"},"15"),p("br"),p("span",{class:"line-number"},"16"),p("br")])])],-1),b=p("li",null,[p("p",null,[o("最终效果 "),p("img",{src:"/assets/994d6f1aee71444b983d982bf216fd1c.c68b9849.png",alt:"1635317727128"})])],-1),m=p("h2",{id:"vscode-支持",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#vscode-支持","aria-hidden":"true"},"#"),o(" VSCode 支持")],-1),d=o("安装插件 "),g={href:"https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo",target:"_blank",rel:"noopener noreferrer"},h=o("Apollo GraphQL"),y=p("li",null,[p("p",null,[o("添加配置 "),p("em",null,"apollo.config.js")]),p("div",{class:"language-javascript ext-js line-numbers-mode"},[p("pre",{class:"language-javascript"},[p("code",null,[o("module"),p("span",{class:"token punctuation"},"."),o("exports "),p("span",{class:"token operator"},"="),o(),p("span",{class:"token punctuation"},"{"),o("\n  client"),p("span",{class:"token operator"},":"),o(),p("span",{class:"token punctuation"},"{"),o("\n    service"),p("span",{class:"token operator"},":"),o(),p("span",{class:"token punctuation"},"{"),o("\n      name"),p("span",{class:"token operator"},":"),o(),p("span",{class:"token string"},'"github GraphQL Schema"'),p("span",{class:"token punctuation"},","),o("\n      localSchemaFile"),p("span",{class:"token operator"},":"),o(),p("span",{class:"token string"},'"./schema.graphql"'),p("span",{class:"token punctuation"},","),o("\n    "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),o("\n  "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),o("\n"),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},";"),o("\n")])]),p("div",{class:"line-numbers"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br"),p("span",{class:"line-number"},"6"),p("br"),p("span",{class:"line-number"},"7"),p("br"),p("span",{class:"line-number"},"8"),p("br")])])],-1),q=p("li",null,[p("p",null,[o("最终效果 "),p("img",{src:"/assets/6dd72b1c51114beebd38ba4f65ca4976.fe204b88.png",alt:"1635316734084"})])],-1),f=p("h2",{id:"框架",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#框架","aria-hidden":"true"},"#"),o(" 框架")],-1),v={href:"https://www.apollographql.com/docs/react/get-started/",target:"_blank",rel:"noopener noreferrer"},w=o("@apollo/client"),x=p("h2",{id:"参考",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),o(" 参考")],-1),S={href:"https://jimkyndemeyer.github.io/js-graphql-intellij-plugin/",target:"_blank",rel:"noopener noreferrer"},j=o("jetbrains ide 使用 graphql"),Q={href:"https://www.graphql-code-generator.com/",target:"_blank",rel:"noopener noreferrer"},R=o("graphql 代码生成器");l.render=function(t,o){const l=n("OutboundLink");return s(),a(e,null,[r,p("ol",null,[p("li",null,[p("p",null,[c,p("a",u,[i,p(l)])])]),k,b]),m,p("ol",null,[p("li",null,[p("p",null,[d,p("a",g,[h,p(l)])])]),y,q]),f,p("ul",null,[p("li",null,[p("a",v,[w,p(l)])])]),x,p("ul",null,[p("li",null,[p("a",S,[j,p(l)])]),p("li",null,[p("a",Q,[R,p(l)])])])],64)};export{l as default};
