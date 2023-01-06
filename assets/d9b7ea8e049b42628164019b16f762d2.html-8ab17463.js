import{_ as o,M as t,p as l,q as i,R as a,t as e,N as s,a1 as r}from"./framework-96b046e1.js";const d="/assets/019d27e1c9224c39b2214fb943dd3c06-896c4044.png",c={},p=r(`<blockquote><p>已转入 yarn2，放弃使用 lerna+yarn1 的组合，具体原因参考 <a href="/p/556ea9eee38842c0be108ada810b711f">yarn2 使用</a> 中描述的动机。</p></blockquote><h2 id="根据依赖图并行运行-npm-命令" tabindex="-1"><a class="header-anchor" href="#根据依赖图并行运行-npm-命令" aria-hidden="true">#</a> 根据依赖图并行运行 npm 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lerna run --include-dependencies <span class="token parameter variable">--stream</span> <span class="token operator">&lt;</span>npm script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),u={href:"https://github.com/lerna/lerna/blob/main/commands/run/README.md#--stream",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/lerna/lerna/blob/main/core/filter-options/README.md#--include-dependencies",target:"_blank",rel:"noopener noreferrer"},b=a("h2",{id:"rollup-捆绑-monorepo-仍然存在错误",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#rollup-捆绑-monorepo-仍然存在错误","aria-hidden":"true"},"#"),e(" rollup 捆绑 monorepo 仍然存在错误")],-1),m={href:"https://github.com/rollup/plugins/issues/743",target:"_blank",rel:"noopener noreferrer"},_={href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},f=r(`<h2 id="有时候会始终无法安装正确的版本" tabindex="-1"><a class="header-anchor" href="#有时候会始终无法安装正确的版本" aria-hidden="true">#</a> 有时候会始终无法安装正确的版本</h2><p>例如在 package.json 中声明了依赖</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.51.0&quot;</span> <span class="token comment">// 实际安装的可能是 2.50.6</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="1622999313766"></p><h2 id="强制发布新版本" tabindex="-1"><a class="header-anchor" href="#强制发布新版本" aria-hidden="true">#</a> 强制发布新版本</h2><p>有时候，你也许不小心发布了一个错误的版本，如果希望重新发布，请使用 <code>lerna publish --force-publish</code>。</p><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ul><li>多个开源工具库：例如 babel、react、vue 这种包含许多功能的开源项目</li><li>不同技术栈的功能的分离：例如分离 electron 主进程与渲染进程，分别在不同的模块开发</li></ul><h2 id="如何清理所有-node-modules-和-dist" tabindex="-1"><a class="header-anchor" href="#如何清理所有-node-modules-和-dist" aria-hidden="true">#</a> 如何清理所有 node_modules 和 dist</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>lerna clean <span class="token parameter variable">-y</span> <span class="token operator">&amp;&amp;</span> lerna <span class="token builtin class-name">exec</span> -- rimraf dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function v(g,k){const n=t("ExternalLinkIcon");return l(),i("div",null,[p,a("blockquote",null,[a("p",null,[e("参考: "),a("a",u,[e("--stream"),s(n)]),e(" 和 "),a("a",h,[e("--include-dependencies"),s(n)])])]),b,a("p",null,[e("目前 rollup + node-resolve 插件捆绑本地依赖时仍然存在一些问题，参考："),a("a",m,[e("https://github.com/rollup/plugins/issues/743"),s(n)]),e("，目前的替代方案是 "),a("a",_,[e("esbuild"),s(n)]),e("。")]),f])}const q=o(c,[["render",v],["__file","d9b7ea8e049b42628164019b16f762d2.html.vue"]]);export{q as default};
