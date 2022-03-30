> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [sspai.com](https://sspai.com/post/68459)

> 集 Roam Research、Workflowy、TiddlyWiki 优点于一身的开源笔记软件 Logseq 值得你来一试。

前言
--

作为一个学生，记笔记是我每天都会做的事情。从孩提时代的练习簿，到中学时的笔记本和活页夹，再到现在使用的电子系统，笔记的功能没有改变，但载体一直在变。使用电子系统的好处之一就是较低的迁移成本，从一个软件导出所有的笔记，再导入另一个软件，简单排版后就可以有全新的体验。就这样，我一直在寻找最适合我的笔记软件。

2020 年的年中，Roam Research （下称 Roam）的发布在「笔记圈」掀起一阵 Zettelkasten 的风潮。尼克拉斯 · 卢曼教授的传奇故事口口相传，印象笔记和 Notion 这样的老牌笔记应用都纷纷添加了双向链接功能，而新产品更是如雨后春笋一般。Obsidian、RemNote、Athens、思源…… 以卡片盒笔记法和知识图谱为主打功能的软件一只手都数不过来，而 Logseq 就是其中之一。

相比于其他的笔记软件，Roam 有许多的优势。关于 Roam 的介绍少数派上已经有非常多的优秀文章，在这里就不再赘述了。不过对于我来说，Roam 有两个美中不足的地方。第一，Roam 将所有笔记文件都存储在云上，通过浏览器访问非常方便，但在安全性和隐私性上有一定的妥协。第二，Roam 采取的是订阅制的收费方式，价格也不算便宜。在对 Roam 进行了初步的了解和对比之后，我还是选择了持币观望。但 Logseq 的出现，解决了这两个问题。

![](https://cdn.sspai.com/2021/08/25/cef2cb6b3e301b2d78ed3b41ef69f590.png)Logseq 官网

Logseq 是什么？
-----------

在 Logseq 的 [Github](https://github.com/logseq/logseq) 页面上，它的开发者画了这样一张图。

![](https://cdn.sspai.com/2021/08/25/f17894039a7bc1620505510d30ca2bf8.png)

从图中可以清楚的看到，Logseq 从 Roam、列表应用 Workflowy、个人维基软件 TiddlyWiki 以及标注语言 Org-Mode 借鉴了许多功能和设计，比如 Roam 的双向链接和知识图表，还有 Workflowy 的列表制作。而这些功能的载体是一个基于本地文件的开源客户端，保障了笔记数据的安全和隐私。

价格方面，目前 Logseq 的客户端是完全免费的，开发者表示之后。如果想要支持开发者，可以在 [Open Collective](https://opencollective.com/logseq) 上向他们捐助，开发者也会在上面公示捐助金的使用情况。如果每月捐助 5 美元以上，就可以获得测试版本的提前使用资格。

![](https://cdn.sspai.com/2021/08/25/ecd16bd981bb1a89bcfb30a880c61f43.png)Open Collective 上的 Logseq

安装和设置
-----

Logseq 的本地客户端目前支持 macOS、Windows 和 Linux，可以在它的 [官网](https://logseq.com) 上下载。如果想将 Logseq 部署在 Github 中来同步数据的话，可以查看开发者提供的 [这篇教程](https://logseq.com/blog/about)。

安装完应用，先看图标。Logseq 的图标非常的简单。在和 Fission 的 [采访](https://fission.codes/blog/overview-of-logseq-by-tienson-qin/) 中，Logseq 的开发者说图标的灵感来自脚印，因为不管是知识的收集还是分享，都是在你的生命中留下印记。

![](https://cdn.sspai.com/2021/08/25/7cf6408a67cae8216871aaf2cb1769ea.png)大家觉得 Logseq 的图标像脚印吗 xD

Logseq 的设计非常简洁美观。除了页面顶部的工具栏之外，其他空间都留给了文字编辑。工具栏包括了返回主页、前进后退、切换内容库和功能菜单。点击右上角的三条杠按钮，右侧会有一个侧边栏弹出。在侧边栏里可以调出「收藏」、「最近」、「页面图谱」和「帮助」。在界面的左上方隐藏了一个文字输入框，通过鼠标悬浮或者键盘快捷键调出，可以用它来搜索内容和新建页面。

Logseq 中每一篇笔记顶端都有一个标题栏。通过标题栏右侧的按钮，可以选择搜索页面内的内容或者对页面进行收藏，删除等操作。在页面的最底部，会显示所有链接到这篇笔记的页面，以及还没有链接的提及。

![](https://cdn.sspai.com/2021/08/25/856fcf3d1c563f988aaec84330204305.png)Logseq 的界面设计

前往功能菜单里的「设置」，Logseq 提供了一些简单的偏好设置，比如说日期格式、每日笔记、拼写检查、是否显示括号等等。其中有一个「逻辑退格」(Logical Outdenting) 功能很有意思，开启之后，如果通过 Shift + Tab 取消缩进，Logseq 会将这一个 bullet 移动到列表底部，不会与其他 bullet 合并。

![](https://cdn.sspai.com/2021/08/25/0f5ad18248e68f7bbed205137e58d73f.gif) ![](https://cdn.sspai.com/2021/08/25/8e981b4e6e9613448440e69b5d869638.gif) 左为开启逻辑退格，右为关闭逻辑退格

Logseq 提供了使用第三方主题和插件的功能。在设置中打开「开发者模式」，然后将下载的主题和插件导入 Logseq 即可。我安装了一个名为 [Bonofix](https://github.com/Sansui233/logseq-bonofix-theme) 的第三方主题，作者模仿的是 Notion 的界面配色。目前 Logseq 并没有官方的主题或者插件库，需要用户自己到论坛或者 Github 上去寻找。这里列出了 Logseq 目前拥有的一些 [自定义主题](https://github.com/logseq/awesome-logseq#css-themes)。Logseq 的开发者也提供了几个 [插件样本](https://github.com/logseq/logseq-plugin-samples) 供用户参考。相信随着用户群体的增大，一定会有更多的第三方主题和插件出现。

![](https://cdn.sspai.com/2021/08/25/d1cbb294848112188f2cea8e7ad1caa4.png)Logseq 的 Bonofix 主题

使用
--

首次打开 Logseq，系统会让你选择使用 Markdown 还是 Org-Mode 作为标记语言。这个设置在初始化之后也是可以更改的。因为我比较熟悉 Markdown 语言，而且大部分的笔记都是由 Markdown 写就的，所以自然而然就选择了 Markdown 模式。Logseq 的编辑器以块（block）为最小单元。除了正在编辑的块会显示标记语言外，其他块都会渲染成 WYSIWYG

所见即所得

。使用「[[」可以链接到页面，使用「((」则可以链接到块。如果不熟悉标注语言和指令的话，输入「/」可以调出指令菜单，也可以自动补全指令。卡片盒笔记法里常用到的模版和别名（alias）功能，Logseq 都可以轻松实现。

![](https://cdn.sspai.com/2021/08/25/0bae50747d77f6c4632e74336d68509c.png)编辑器和双向链接功能

相比于 Roam 和 Obsidian 的知识图谱，Logseq 的图谱功能比较简单。「全局图谱」可以直观地显示全部笔记之间的关系，选择一个节点可以高亮所有与它链接的页面，但并不能像 Obsidian 一样使用颜色分类或者通过搜索进行过滤。「页面图谱」则能显示一篇笔记和与它链接的页面。

![](https://cdn.sspai.com/2021/08/25/98454d884b76641f0eaa9a76f6c463bd.png)全局图谱功能

除了双向链接和知识图谱之外，Logseq 还内置了许多锦上添花的功能，让它在记笔记之外，还能满足许多学习和生活上的需求。

### Todo 系统

许多用户在使用卡片盒笔记法时，都会将每日笔记页面作为笔记的源头，记录自己在这一天里阅读的文章，了解到的知识，完成的任务等等，再将这些内容与之前积攒的笔记进行链接。Logseq 内置了一套专门用于记录 Todo 的标记语言，通过 LATER, NOW, DONE 等关键词来表示一项任务的状态和优先级，还可以通过指令为任务安排时间，死线，定期重复等等。

![](https://cdn.sspai.com/2021/08/25/b905d7bc86d87084a071d4ae0046bf50.png)Logseq 支持的 Todo 标记语法

### 闪卡

Logseq 内置的闪卡（flashcard）制作功能，可以很方便地将已有的笔记转化成闪卡，帮助记忆内容。目前 Logseq 支持制作问答和填空格式的闪卡。制作问答格式的闪卡，只需要用 #card 来标记一个内容块就可以了。问答格式的闪卡将默认把这一块的第一行作为问题，其他内容作为答案。制作填空格式的闪卡，则需要用到 /cloze 指令。

![](https://cdn.sspai.com/2021/08/25/0d9179fc6f4a6e87fa2dbd6d242586c7.png)制作闪卡

制作完闪卡之后，在功能菜单里选择「所有卡片」就可以开始学习了。

![](https://cdn.sspai.com/2021/08/25/eefc91bda264769f226b4f7aa303051b.png)学习闪卡

### PDF 高亮

Logseq 支持通过拖拽或者 /upload an asset 指令来导入 PDF 文件，并且可以通过内置的 PDF 阅读器来浏览文件和高亮内容。高亮的内容可以直接在笔记里引用。点击一条引用，Logseq 还会自动打开对应的 PDF 文件并且跳转到相应的位置。

![](https://cdn.sspai.com/2021/08/25/3fbf36233ba2835a6378bdff8c684000.png)PDF 阅读器和高亮引用

### 更多

除了上面提到的这些功能以外，Logseq 还内置了基于 reveal.js 的幻灯片制作、基于 Excalidraw 的绘画功能、还有与 Zotero 的整合，可以将 Zotero 里收集的文献导入到 Logseq 里方便链接。在 Logseq 的 roadmap 上可以看到，开发者计划在将来提供功能更完善的图谱，Anki 闪卡导入，白板，端对端加密同步等功能，如果你对这些功能感兴趣，可以持续关注这款产品。

总结
--

**Logseq 的优点**

*   块结构，双向链接，排版指令等基础功能都很完善
*   拥有本地客户端，离线也能使用
*   笔记储存在本地，安全和隐私性更强
*   内置闪卡，PDF 高亮，Zotero 整合等功能
*   目前全功能免费使用

**Logseq 的不足**

*   第三方主题和插件数量较少
*   软件细节还需要打磨，比如中文的翻译就有很多缺失
*   目前只有桌面版客户端（开发者表示移动端应用正在开发）

就目前来看，Logseq 距离一个功能齐全，生态丰富的笔记软件还有一定的距离，但是不管是从它的设计还是功能，都能看出开发者对于做笔记这件事的思考，这也是一款非常有潜力的产品。

Bonus: Logseq 和 Obsidian 搭配使用
-----------------------------

因为 Roam 的一些不足，在发现 Logseq 之前我最终选择了 Obsidian 作为我的日常笔记应用。同样是标榜笔记本地化的笔记应用，乍看之下 Logseq 和 Obsidian 应该是竞争对手的关系，对吗？

为了避免数据迁移的麻烦，我在安装完成之后，直接将 Logseq 的本地文件库指向了我储存在 iCloud 上的 Obsidian 库。在读取和建立索引之后，在 Logseq 里就能直接访问我用 Obsidian 记录的笔记。本来只是为了方便体验 Logseq，但因为两个软件都只是读取和编辑储存在本地的文件，同时使用两个笔记软件也完全可行。

![](https://cdn.sspai.com/2021/08/25/a3fb817aaaa2a456bff725a086bfbf54.png)Logseq 自动创建的文件夹，与 Obsidian 不会互相干扰

经过一段时间的使用之后，我发现 Logseq 和 Obsidian 的搭配居然是一个非常不错的工作流。Obsidian 较为复杂的块引用操作，Logseq 可以轻松搞定。而 Logseq 缺失的移动版客户端和附加功能，又可以从 Obsidian 和它成熟的第三方插件生态取长补短。

在学校里，我使用一台轻便的 iPad 和 Obsidian 移动端来记录课堂笔记。下课回家后，我可以在电脑上打开 Logseq 编辑笔记，链接内容，创建闪卡，顺带复习这一天所学到的内容。用英文讲，这就是 the best of both worlds。 而用中文，大概就是「我全都要」吧。

![](https://cdn.sspai.com/2021/08/25/cc72a08fc6d91a06e76a343b8cba705a.jpg)Obsidian Mobile + Logseq

最近在少数派上，看到有些不友好的声音，喜欢对别人的「折腾」指指点点。我想，自己对笔记软件的体验大概也是一种折腾。而 Logseq 配合 Obsidian 是我现在折腾出的一套系统。不过，这是一套完美的系统吗？我相信答案一定是「不」。除了我之外，可能没有人适合使用这套系统，但也可能会有人能从我的折腾经历中获得一点灵感，以此改进了 Ta 所用的系统。分享经验，拓宽视野，这难道不就是我们社会得以进步的方法吗？

> 下载 [少数派 2.0 客户端](https://sspai.com/page/client)、关注 [少数派公众号](https://sspai.com/s/J71e)，解锁全新阅读体验 📰

> 实用、好用的 [正版软件](https://sspai.com/mall)，少数派为你呈现 🚀