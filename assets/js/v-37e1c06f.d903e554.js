"use strict";(self.webpackChunkhexo_theme_yun=self.webpackChunkhexo_theme_yun||[]).push([[600],{4384:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-37e1c06f",path:"/guide/faq.html",title:"FAQ",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"自查通用问题解决方案",slug:"自查通用问题解决方案",children:[]},{level:2,title:"hexo server 文章只渲染部分内容",slug:"hexo-server-文章只渲染部分内容",children:[{level:3,title:"临时解决方案",slug:"临时解决方案",children:[]}]},{level:2,title:"标签与分类页面不显示？",slug:"标签与分类页面不显示",children:[]}],filePathRelative:"guide/faq.md",git:{updatedTime:1633589794e3,contributors:[{name:"miaoermua",email:"66155308+miaoermua@users.noreply.github.com",commits:1}]}}},7323:(e,n,s)=>{s.r(n),s.d(n,{default:()=>Z});var a=s(6252);const r=(0,a._)("h1",{id:"faq",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),(0,a.Uk)(" FAQ")],-1),o={class:"custom-container tip"},l=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),t=(0,a.Uk)(" 代表只和开发有关。 "),u=(0,a.Uk)("有任何关于本主题的缺陷报告与功能建议，欢迎发起 "),c={href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("Issues"),p=(0,a.Uk)("。"),h=(0,a.Uk)("如果您想要展示您的成果、或者还有其他相关的想法与问题，可前往 "),d={href:"https://github.com/YunYouJun/hexo-theme-yun/discussions",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("Discussions"),k=(0,a.Uk)("。"),b=(0,a.uE)('<hr><h2 id="自查通用问题解决方案" tabindex="-1"><a class="header-anchor" href="#自查通用问题解决方案" aria-hidden="true">#</a> 自查通用问题解决方案</h2><p>检查文件或仓库命名是否错误。</p><p>检查 <code>Hexo</code> 工作目录下 <code>_config.yml</code> 中 <code>url</code> 是否设置正确。（此部分为 Hexo 初始化时自动生成）</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># If your site is put in a subdirectory</span>\n<span class="token comment"># set url as &#39;https://yoursite.com/child&#39; and root as &#39;/child/&#39;</span>\n<span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.yunyoujun.cn\n<span class="token key atrule">root</span><span class="token punctuation">:</span> /\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>检查是否在 <code>yun.yml</code> 文件中进行主题配置，且已经保存。 检查是否已经执行如下几步：</p><ul><li><code>hexo clean</code>：清除本地缓存</li><li><code>hexo g</code>：生成新的静态文件</li><li><code>hexo s</code>：本地查看效果（如果正常，使用 <code>hexo d</code> 重新部署）</li></ul><p>检查是否已强制刷新本地浏览器缓存（Windows: <code>Ctrl + F5</code>，Mac: <code>Shift + Cmd + R</code>）。</p><p>检查是否为最新版本。</p><p>检查是否因为 CDN 缓存造成的问题，（关闭 <code>cdn.pre</code>）。</p><p>如果仍然存在问题，你可以将你的项目代码作为 <code>hexo</code> 分支推送到 GitHub 上。</p>',11),_={href:"https://www.yunyoujun.cn/share/how-to-build-your-site/#%E4%B8%8E%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%BB%BA%E7%AB%8B%E5%85%B3%E8%81%94",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("与远程仓库建立关联"),f=(0,a.Uk)("主题相关问题请发起 "),y={href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("ISSUE"),U=(0,a.Uk)(" ，其他讨论与展示请使用 "),v={href:"https://github.com/YunYouJun/hexo-theme-yun/discussions",target:"_blank",rel:"noopener noreferrer"},w=(0,a.Uk)("Discussions"),E=(0,a.Uk)("。"),B={id:"hexo-server-文章只渲染部分内容",tabindex:"-1"},W=(0,a._)("a",{class:"header-anchor",href:"#hexo-server-文章只渲染部分内容","aria-hidden":"true"},"#",-1),Y=(0,a.Uk)(),A=(0,a._)("code",null,"hexo server",-1),C=(0,a.Uk)(" 文章只渲染部分内容 "),j=(0,a._)("p",null,[(0,a.Uk)("开发主题的过程中，发现长篇文章只能渲染出一部分，后半部分无法正常显示。 一开始还以为是 "),(0,a._)("code",null,"hexo-renderer-pug"),(0,a.Uk)(" 的问题，折腾了一天，兜兜转转，最后才发现似乎是开发时 "),(0,a._)("code",null,"hexo-browsersync"),(0,a.Uk)(" 的问题。")],-1),q=(0,a.Uk)("相关 Issue ："),D={href:"https://github.com/hexojs/hexo-browsersync/issues/15",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("Problem with long pages"),F=(0,a.uE)('<h3 id="临时解决方案" tabindex="-1"><a class="header-anchor" href="#临时解决方案" aria-hidden="true">#</a> 临时解决方案</h3><p>在根目录的 <code>_config.yml</code> 中设置</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>\n  <span class="token key atrule">compress</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',3),H={href:"https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492",target:"_blank",rel:"noopener noreferrer"},J=(0,a.Uk)("https://github.com/hexojs/hexo-browsersync/issues/15#issuecomment-573492492"),P=(0,a._)("h2",{id:"标签与分类页面不显示",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#标签与分类页面不显示","aria-hidden":"true"},"#"),(0,a.Uk)(" 标签与分类页面不显示？")],-1),S=(0,a.Uk)("标签与分类页面需要参考 "),N={href:"https://yun.yunyoujun.cn/guide/page.html#%E6%A0%87%E7%AD%BE-tags",target:"_blank",rel:"noopener noreferrer"},Q=(0,a.Uk)("页面配置"),R=(0,a.Uk)(" 安装对应插件并自行生成页面。"),T={},Z=(0,s(3744).Z)(T,[["render",function(e,n){const s=(0,a.up)("Badge"),T=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("div",o,[l,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(s,{text:"dev",vertical:"middle"}),t])])]),(0,a._)("p",null,[u,(0,a._)("a",c,[i,(0,a.Wm)(T)]),p]),(0,a._)("p",null,[h,(0,a._)("a",d,[m,(0,a.Wm)(T)]),k]),b,(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a._)("a",_,[g,(0,a.Wm)(T)])])]),(0,a._)("p",null,[f,(0,a._)("a",y,[x,(0,a.Wm)(T)]),U,(0,a._)("a",v,[w,(0,a.Wm)(T)]),E]),(0,a._)("h2",B,[W,Y,A,C,(0,a.Wm)(s,{text:"dev"})]),j,(0,a._)("p",null,[q,(0,a._)("a",D,[I,(0,a.Wm)(T)])]),F,(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a._)("a",H,[J,(0,a.Wm)(T)])])]),P,(0,a._)("p",null,[S,(0,a._)("a",N,[Q,(0,a.Wm)(T)]),R])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[s,a]of n)e[s]=a;return e}}}]);