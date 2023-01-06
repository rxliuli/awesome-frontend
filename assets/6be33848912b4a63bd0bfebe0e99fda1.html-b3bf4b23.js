import{_ as r,M as t,p as n,q as s,R as l,t as e,N as a,a1 as o}from"./framework-96b046e1.js";const d={},h=l("h2",{id:"场景",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#场景","aria-hidden":"true"},"#"),e(" 场景")],-1),c={href:"https://segmentfault.com/q/1010000021851252",target:"_blank",rel:"noopener noreferrer"},u=o('<p>目前在实际业务中遇到了两种情况</p><ol><li>程序的功能在分发给不同组织使用的时候有所差异，即不同的组织都会存在一些定制化的功能。 最常见的差异例如 <ul><li>表单的字段存在差异</li><li>列表展示的字段与相关操作有所不同</li></ul></li><li>组件内的代码在某个权限下才会执行，但是又依赖于组件内的一些状态，如何将这些代码分割到不同的地方（例如不同的文件）便于之后的维护。 <ul><li>一些按钮在指定权限下存在</li><li>一些数据在指定权限下展示</li></ul></li></ol><h2 id="方案" tabindex="-1"><a class="header-anchor" href="#方案" aria-hidden="true">#</a> 方案</h2><ul><li>使用动态配置渲染不同的页面(可序列化的配置)</li><li>根据状态匹配不同的动态组件</li><li>使用 hooks 封装不同的逻辑</li><li>使用状态图控制状态和逻辑</li></ul><h2 id="实际调研结果" tabindex="-1"><a class="header-anchor" href="#实际调研结果" aria-hidden="true">#</a> 实际调研结果</h2><h3 id="使用动态配置渲染不同的页面" tabindex="-1"><a class="header-anchor" href="#使用动态配置渲染不同的页面" aria-hidden="true">#</a> 使用动态配置渲染不同的页面</h3><p>实际上，之前有看过吾辈写的 <a href="/p/c55a6470683e498f92ba05d7ff710b3a">react 通用列表组件封装</a> 就知道，实际上列表已经被配置化了，可以使用配置的形式去渲染一个完整的列表页面，因此可以根据不同的组织使用不同的配置就好了。但是，事实上并没有这么简单，因为就算是简单的列表，也仍然包含<strong>上下文</strong>，而这，正是配置不能拿到的内容。</p><p>上下文主要包括</p><ul><li>需要异步请求的数据，例如下拉框的选择项</li><li>需要从路由上获取的数据，例如搜索条件</li><li>需要对页面内的其它组件进行操作时，例如点击按钮有个新增列表项的弹窗</li></ul><p>可以有几种解决方案</p><ul><li>通过函数，而不是单纯的配置，这样，可以通过参数解决一些上下文的依赖情况</li><li>通过函数且异步，可以解决 api 请求时，此时的 api 必定是可以用的，但是会依赖于 api。</li></ul><p>但这仍然会带来问题</p><ul><li>数据不再纯粹，无法序列化。</li><li>不同配置依赖的数据可能不同，需要配置自己去解决，那么如果这样想的话，那么配置就需要自行获取数据，而不是外部传递数据了</li><li>仍然无法使用<strong>状态</strong></li><li>最重要的是，使用函数之后变得不再像是<strong>配置</strong>了</li></ul><h3 id="根据状态匹配不同的动态组件" tabindex="-1"><a class="header-anchor" href="#根据状态匹配不同的动态组件" aria-hidden="true">#</a> 根据状态匹配不同的动态组件</h3><ul><li>配置更为灵活，能够获取到组件的上下文</li><li>接口请求也没有问题</li><li>对不同配置，可以自行对数据进行处理</li></ul><p>问题</p><ul><li>无法如同纯数据配置那样，复用逻辑这么彻底，但是也可以通过 hooks 解决。</li><li>UI 复用问题 先使用组件的方式编写一下，看具体结果如何</li><li>无法序列化也意味着无法放到后端，甚至意味着很难做动态加载</li></ul><p>使用</p><ul><li>使用一个 wrapper 组件来讲 UI 和通用逻辑给包裹进去</li><li>使用另外一套组件去区分不同租户的配置（因为是在组件内部写配置，所以该配置可以灵活的使用任意接口，组件上下文可能还不太行）也就是用多个组件来解决这个问题。</li></ul><p>可以再尝试一下有没有解决方案。</p><h3 id="使用-hooks-封装不同的代码" tabindex="-1"><a class="header-anchor" href="#使用-hooks-封装不同的代码" aria-hidden="true">#</a> 使用 hooks 封装不同的代码</h3><ul><li>相比于处理 <strong>是哪一个</strong>，更适合处理 <strong>有或没有</strong> 的代码分割</li><li>能够使用 react 的状态</li></ul><p>问题</p>',23),p=l("code",null,"lazy",-1),_={href:"https://zh-hans.reactjs.org/docs/hooks-rules.html",target:"_blank",rel:"noopener noreferrer"},f=l("li",null,"使用 hooks 同样难以序列化存储到后端",-1),b=o('<h3 id="使用状态图控制状态和逻辑" tabindex="-1"><a class="header-anchor" href="#使用状态图控制状态和逻辑" aria-hidden="true">#</a> 使用状态图控制状态和逻辑</h3><p>使用 hooks 封装代码最适合处理元素级的权限控制，但在面对需要根据多个维度的状态决定程序的状态或行为时，就有点力不从心了。而这，也是为什么有限状态机为什么有用的原因。</p><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><p>最终，我们选择了最灵活的 <strong>动态组件 + Hooks 共享逻辑</strong> 的形式，虽然使用动态组件会增加一些冗余度，但也可以通过子组件或 hooks 的形式复用逻辑，实际上在工程化减小的复杂度的收益是要高于代码冗余的。</p><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><blockquote><p>登记相关内容已经使用该方式进行了重构</p></blockquote><ul><li><code>src/pages/register</code><ul><li><code>common</code>: 通用的一些组件和逻辑，例如请求后台接口应该是统一的，但返回的数据类型却应该是单独的 <ul><li><code>form</code>: 表单相关组件，提供给列表/详情页面使用</li><li><code>detail</code>: 详情页面</li><li><code>list</code>: 列表页面</li></ul></li><li><code>organizations</code>: 不同组织的目录 <ul><li><code>org1</code>: 组织 1</li><li><code>org2</code>: 组织 2</li></ul></li></ul></li></ul>',7),g={href:"https://github.com/rxliuli/example/tree/master/dynamic_state",target:"_blank",rel:"noopener noreferrer"},k=o('<p><img src="https://img.rxliuli.com/20200803203027.png" alt="简单示例"></p><h2 id="其他技术问题" tabindex="-1"><a class="header-anchor" href="#其他技术问题" aria-hidden="true">#</a> 其他技术问题</h2><ul><li>[x] 如何在运行时根据组织切换功能 <ul><li>可以再包一层组件而非简单的从 <code>lazy component map</code> 取出组件</li></ul></li><li>[x] 如何在运行时添加新组织的功能 <ul><li>可能需要插件的实现方式，支持动态加载进来，例如 vscode 的插件体系。</li></ul></li><li>[x] 如何使用 hooks 更好的复用逻辑 <ul><li>使用 hooks 封装逻辑，使用小型组件封装 UI/UX</li></ul></li><li>[x] 如何在打包阶段干掉不相关组织的代码 <ul><li>需要修改 webpack 相关的内容，目前不予考虑</li></ul></li></ul>',3);function m(x,q){const i=t("ExternalLinkIcon");return n(),s("div",null,[h,l("blockquote",null,[l("p",null,[e("之前吾辈也在 SF 上询问过 "),l("a",c,[e("类似的问题"),a(i)]),e("。")])]),u,l("ul",null,[l("li",null,[e("使用 hooks 必须放在函数组件最顶层，导致本质上无法 "),p,e(" 加载。参考："),l("a",_,[e("Hook 规则"),a(i)])]),f]),b,l("p",null,[e("吾辈编写了一个简单的示例，代码在 "),l("a",g,[e("dynamic_state"),a(i)])]),k])}const N=r(d,[["render",m],["__file","6be33848912b4a63bd0bfebe0e99fda1.html.vue"]]);export{N as default};
