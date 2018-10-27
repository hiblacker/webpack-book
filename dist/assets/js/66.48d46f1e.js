(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{142:function(t,s,n){t.exports=n.p+"assets/img/bundle_02.cc11f7e5.png"},217:function(t,s,n){"use strict";n.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"构建拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建拆分","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建拆分")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最好只下载更改的部分。如果供应商依赖项发生更改，则客户端应仅获取供应商依赖项。实际的应用程序代码也是如此。"),s("strong",[this._v("构建拆分")]),this._v("可以使用"),s("code",[this._v("optimization.splitChunks.cacheGroups")]),this._v("来实现。在生产模式下运行时，[webpack4可以开箱即可执行一系列拆分]（https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693）但在这种情况下，我们会手动执行某些操作。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("要要使bundle无效，必须将哈希附加到生成的bundle中，如："),s("em",[this._v("向文件名中注入hash")]),this._v("章节中所述。只有这样客户端才能识别请求内容是否改变，进而决定是否下载新的内容。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"构建拆分的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建拆分的原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建拆分的原理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("举个例子。你可以得到 "),s("em",[this._v("main.js")]),this._v("（10 kB）和 "),s("em",[this._v("vendor.js")]),this._v("（90 kB），而不是 "),s("em",[this._v("main.js")]),this._v("（100 kB）。现在，对于已经使用过该应用程序的客户端，对应用程序所做的更改，维护更为廉价。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为了实现分离，引入其它依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为了实现分离，引入其它依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 为了实现分离，引入其它依赖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" react react-dom --save\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("src/index.js")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('import "react";\nimport "react-dom";\n...\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("执行 "),s("code",[this._v("npm run build")]),this._v(" 脚本命令，然后会输出下面展示的内容：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("Hash: 80f9bb6fc04c54949644\nVersion: webpack 4.1.1\nTime: 3276ms\nBuilt at: 3/16/2018 4:59:25 PM\n       Asset       Size  Chunks             Chunk Names\n     main.js   97.5 KiB       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n    main.css   3.49 KiB       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n main.js.map    240 KiB       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\nmain.css.map   85 bytes       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n  index.html  220 bytes          "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nEntrypoint main "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" main.js main.css main.js.map main.css.map\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("正如你所看到的那样， "),s("em",[this._v("main.js")]),this._v(" 非常大。这就是接下来要解决的问题。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置-vendor-输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-vendor-输出","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 "),s("code",[this._v("vendor")]),this._v(" 输出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在webpack4.x之前，我们使用 "),s("code",[this._v("CommonsChunkPlugin")]),this._v(" 来实现构建拆分。现在该插件已被自动化和配置所取代。要从"),s("em",[this._v("node_modules")]),this._v(" 目录中提取供应商包，可按如下方式调整代码：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" productionConfig "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("merge")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    optimization"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      splitChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"initial"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("运行 "),s("code",[this._v("npm run build")]),this._v(" 脚本命令，你将看到如下的输出内容：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("Hash: 6c499f10237fdbb07378\nVersion: webpack 4.1.1\nTime: 3172ms\nBuilt at: 3/16/2018 5:00:03 PM\n               Asset       Size  Chunks             Chunk Names\n     vendors~main.js   96.8 KiB       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vendors~main\n             main.js   1.35 KiB       1  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n            main.css   1.27 KiB       1  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n    vendors~main.css   2.27 KiB       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vendors~main\n vendors~main.js.map    235 KiB       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vendors~main\nvendors~main.css.map   93 bytes       0  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  vendors~main\n         main.js.map   7.11 KiB       1  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n        main.css.map   85 bytes       1  "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n          index.html  329 bytes          "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nEntrypoint main "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vendors~main.js vendors~main.css "),n("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(142),alt:"应用配置后的主包和供应商包"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"构建拆分的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建拆分的操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建拆分的操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以针对 "),s("em",[this._v("node_modules")]),this._v(" 做明确的匹配，来重写上面的配置，如下所示：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("webpack.config.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" productionConfig "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("merge")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    optimization"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      splitChunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cacheGroups"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          commons"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/[\\\\/]node_modules[\\\\/]/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            name"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"vendor"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            chunks"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"initial"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"拆分和合并模块（chunks）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆分和合并模块（chunks）","aria-hidden":"true"}},[this._v("#")]),this._v(" 拆分和合并模块（Chunks）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webpack通过两个插件实现对生成的块的更多控制："),s("code",[this._v("AggressiveSplittingPlugin")]),this._v(" 和"),s("code",[this._v("AggressiveMergingPlugin")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以下是 "),s("code",[this._v("Aggressive")]),this._v(" 分离的基本思路：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimize"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AggressiveSplittingPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        minSize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("10000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        maxSize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("30000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而 "),s("code",[this._v("AggressiveMergingPlugin")]),this._v(" 插件以相反的方式工作，并允许你将小包组合成更大的：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("AggressiveMergingPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        minSizeReduce"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        moveToParents"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果使用webpack "),s("strong",[this._v("记录")]),this._v("，则可以使用这个插件获得良好的缓存行为。这个想法在"),s("em",[this._v("添加哈希到文件名")]),this._v("章节中详细介绍。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("webpack.optimize")]),this._v(" 还包含 "),s("code",[this._v("LimitChunkCountPlugin")]),this._v(" 和 "),s("code",[this._v("MinChunkSizePlugin")]),this._v("，它们可以进一步控制构建包大小。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack中的模块（chunk）类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack中的模块（chunk）类型","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack中的模块（Chunk）类型")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("Entry chunks")]),t._v(" - 它包含webpack运行时和它随后加载的模块。")]),n("li",[n("strong",[t._v("Normal chunks")]),t._v(" - 它不包含webpack运行时的模块。相反，是这些可以在应用程序运行时动态加载的模块。一个包装器（例如JSONP）生成这些模块。在下一章代码分割这个主题中，你将生成一个 "),n("code",[t._v("Normal chunks")]),t._v("。")]),n("li",[n("strong",[t._v("Initial chunks")]),t._v(" - 它是 "),n("code",[t._v("Normal chunks")]),t._v(" ，但它用来计算进入应用程序的初始加载时间。作为使用者，你不用关心这些。这是 "),n("code",[t._v("Initial chunks")]),t._v(" 和 "),n("code",[t._v("Normal chunks")]),t._v(" 之间的区别，这一点很重要。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("Webpack allows you to split bundles from configuration entries through the "),n("code",[t._v("optimization.splitChunks.cacheGroups")]),t._v(" field. It performs 构建拆分 by default in production mode as well.")]),n("li",[t._v("A vendor bundle contains the third party code of your project. The vendor dependencies can be detected by inspecting where the modules are imported.")]),n("li",[t._v("Webpack offers more control over chunking through specific plugins, such as "),n("code",[t._v("AggressiveSplittingPlugin")]),t._v(" and "),n("code",[t._v("AggressiveMergingPlugin")]),t._v(". Mainly the splitting plugin can be handy in HTTP/2 oriented setups.")]),n("li",[t._v("Internally webpack relies on three chunk types: entry, normal, and initial chunks.")])])}],e=n(0),i=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("目前，应用程序的生产版本是单个JavaScript文件。 如果应用程序已更改，则客户端也必须下载"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Vendor",target:"_blank",rel:"noopener noreferrer"}},[t._v("供应商（vendor）"),n("OutboundLink")],1),t._v("依赖内容。")]),t._m(1),t._m(2),t._m(3),n("p",[t._v("利用构建拆分，你可以将供应商依赖项推送到独立的构建包中，并从客户端级缓存中受益。该过程可以让应用程序在保持整个大小不变的情况下完成。虽然增加了请求的次数，产生了轻微的开销，但是客户端的缓存的弥补了这个成本。")]),t._m(4),n("p",[t._v("使用这种方式，就会面因临缓存而产生的问题。其中之一是缓存失效。解决方法会在 "),n("a",{attrs:{href:"https://lvzhenbang.github.io/webpack-book/dist/zh/optimizing/04_adding_hashes_to_filenames.html",target:"_blank",rel:"noopener noreferrer"}},[n("em",[t._v("在文件名中添加hash")]),n("OutboundLink")],1),t._v(" 章节中讨论。")]),n("p",[t._v("构建拆分不是唯一的出路。"),n("a",{attrs:{href:"https://lvzhenbang.github.io/webpack-book/dist/zh/building/03_code_splitting.html",target:"_blank",rel:"noopener noreferrer"}},[n("em",[t._v("代码分割")]),n("OutboundLink")],1),t._v(" 章节讨论了另一种更细粒度的方法。")]),t._m(5),n("p",[t._v("鉴于暂时没有什么东西可以拆分供应商（vendor）包，你应该在源文件中引入一些东西。")]),n("p",[t._v("在项目中添加React依赖：")]),t._m(6),n("p",[t._v("在项目引用它：")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),n("p",[t._v("现在构建生成看起来应该像下图说明的那样。")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),n("p",[t._v("如果你不希望依赖自动化，则使用这种配置可以更好地控制拆分过程。")]),t._m(23),t._m(24),n("p",[t._v("前者允许你分离出更多和更小的包。由于HTTP/2新标准的工作方式，让这种方式很容易实现。")]),t._m(25),t._m(26),n("p",[t._v("如果你分成多个小构建包，那么缓存会失效，这是需要做一个权衡。此外，你还会在HTTP/1环境中增加请求开销。目前，由于插件中的一个"),n("a",{attrs:{href:"https://github.com/ampedandwired/html-webpack-plugin/issues/446",target:"_blank",rel:"noopener noreferrer"}},[t._v("错误"),n("OutboundLink")],1),t._v("，启用"),n("code",[t._v("HtmlWebpackPlugin")]),t._v(" 该插件不起作用。")]),t._m(27),t._m(28),t._m(29),t._m(30),n("blockquote",[n("p",[t._v("Tobias Koppers 在他的官方博客中，详细的介绍了 "),n("a",{attrs:{href:"https://medium.com/webpack/webpack-http-2-7083ec3f3ce6",target:"_blank",rel:"noopener noreferrer"}},[t._v("aggressive merging"),n("OutboundLink")],1),t._v("。")])]),t._m(31),n("p",[t._v("在上面的示例中，你使用了不同类型的webpack块。Webpack处理三种类型的块：")]),t._m(32),t._m(33),n("p",[t._v("与之前相比，现在情况好转。要知道小 "),n("code",[t._v("main")]),t._v(" 包与 "),n("code",[t._v("vendor")]),t._v(" 包相比如何？如何从此拆分中受益？你需要在设置缓存，下一部分的 "),n("a",{attrs:{href:"https://lvzhenbang.github.io/webpack-book/dist/zh/optimizing/04_adding_hashes_to_filenames.html",target:"_blank",rel:"noopener noreferrer"}},[n("em",[t._v("在文件名中添加hash")]),n("OutboundLink")],1),t._v(" 一章将详细介绍。")]),n("p",[t._v("内容回顾：")]),t._m(34),n("p",[t._v("在下一章中，你将学习到代码分割和按需加载代码。")])])},a,!1,null,null,null);i.options.__file="02_bundle_splitting.md";s.default=i.exports}}]);