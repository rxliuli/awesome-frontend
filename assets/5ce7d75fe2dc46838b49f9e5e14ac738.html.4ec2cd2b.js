import{r as n,o as s,c as a,a as p,F as t,d as e,b as o}from"./app.4630c37e.js";const c={},l=e('<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p>有时候我们需要在主进程和渲染层共享某些数据，而 <a href="/p/76393a60949c47c7add910df0206734c">electron ipc 通信</a> 显然更适合传递消息而不适合共享数据。</p><h2 id="相关依赖" tabindex="-1"><a class="header-anchor" href="#相关依赖" aria-hidden="true">#</a> 相关依赖</h2><p>事实上，我们这个需求已经有人考虑过了，例如 electron-store 就已经实现了可以在渲染层、主进程均可使用。</p>',4),u={href:"https://www.npmjs.com/package/is-electron",target:"_blank",rel:"noopener noreferrer"},r=o("is-electron"),k=o(": 判断是否 electron 环境"),i={href:"https://www.npmjs.com/package/electron-store",target:"_blank",rel:"noopener noreferrer"},b=o("electron-store"),m=o(": 在 electron 应用中存储数据"),d=e('<p>那么，我们直接用 electron-store 有什么问题么？ 是的，electron 仅能在 electron 中使用，所以在浏览器上会报错，而这对于开发环境而言是无法接受的，故而还需要检测环境使用不同的实现。</p><h2 id="创建浏览器兼容层" tabindex="-1"><a class="header-anchor" href="#创建浏览器兼容层" aria-hidden="true">#</a> 创建浏览器兼容层</h2><p>使用策略模式实现不同环境下使用不同的存储</p><ul><li>浏览器使用 localStorage 实现</li><li>electron 中则使用 electron-store 实现</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token class-name">Store</span> <span class="token keyword">from</span> <span class="token string">&quot;electron-store&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> isElectron <span class="token keyword">from</span> <span class="token string">&quot;is-electron&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DeepReadonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;utility-types&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">BaseStore</span> <span class="token punctuation">{</span>\n  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ElectronStoreImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BaseStore</span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> store<span class="token operator">:</span> Store<span class="token punctuation">;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> Store <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;electron-store&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">LocalStorageImpl</span> <span class="token keyword">implements</span> <span class="token class-name">BaseStore</span> <span class="token punctuation">{</span>\n  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;ElectronStore.store&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ElectronStore</span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token operator">:</span> BaseStore <span class="token operator">=</span> <span class="token function">isElectron</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">ElectronStoreImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">LocalStorageImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">static</span> <span class="token generic-function"><span class="token function">getInstance</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n    init<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>\n  <span class="token punctuation">)</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> DeepReadonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> electronStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElectronStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> text <span class="token operator">=</span> electronStore<span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>text <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> text <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>\n        electronStore<span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>\n          p<span class="token punctuation">,</span>\n          value <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> value\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>init<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>init<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>k<span class="token punctuation">,</span> v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> text <span class="token operator">=</span> electronStore<span class="token punctuation">[</span><span class="token builtin">symbol</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>text <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> text <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          proxy<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> proxy<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><p>你可能发现了，为了简化使用的 API，这里使用了代理模式拦截了对实例的访问，修改为使用 <code>get/set</code> 方法取值和设值。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>使用起来和一个普通的对象没什么区别，直接通过 <code>.</code> 访问或设置属性即可。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> userStore <span class="token operator">=</span> ElectronStore<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">getInstance</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuserStore<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;liuli&quot;</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;liuli&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuserStore<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userStore<span class="token punctuation">.</span>age <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',9),y=o("具体代码在 "),w={href:"https://github.com/rxliuli/electron_example/blob/ed158e9d013d7138697c76b52ddefb4748fe1af0/libs/electron-util/src/ElectronStore.ts#L40",target:"_blank",rel:"noopener noreferrer"},g=o("electron_example"),f=o("，由于是一个浅层封装，所以并未发布，但可以直接将模块复制到项目中使用。");c.render=function(e,o){const c=n("OutboundLink");return s(),a(t,null,[l,p("ul",null,[p("li",null,[p("a",u,[r,p(c)]),k]),p("li",null,[p("a",i,[b,p(c)]),m])]),d,p("blockquote",null,[p("p",null,[y,p("a",w,[g,p(c)]),f])])],64)};export default c;
