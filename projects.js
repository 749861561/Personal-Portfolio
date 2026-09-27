/* 每个作品各自维护内容，共用 project.html 和 project.css。
 * title.lines: 标题分行；title.style: clean / condensed / outline。
 * title.image: 可选的标题设计图片 { src, alt }，设置后替代文字标题。
 * theme: 可单独覆盖 background / text / accent / glow。
 * hero: 可独立替换图片，mode 为 cutout（透明图）、cover（裁切横幅）或 document（完整展示）。
 * gallery: 按顺序添加图片，layout 为 full / half；图片保持原始比例。
 * 当前文案与素材用于详情模板预览，正式作品内容可逐项替换。
 */
window.FOLIO_PROJECTS = [
  {
    "id": "afterlight-archive",
    "card": {
      "category": "智能硬件",
      "order": 0,
      "meta": "暖通设备集中控制",
      "summary": "智能硬件，生活空间",
      "cover": {
        "src": "featured-assets/ten-inch-cover.web.avif",
        "width": 1136,
        "height": 1385,
        "alt": "十寸中控屏：智能硬件，生活空间",
        "position": "50% 50%",
        "listFit": "contain"
      },
      "title": "十寸中控屏",
      "tag": "Campaign Visuals",
      "preserveCase": false
    },
    "name": "十寸中控屏",
    "category": "智能硬件",
    "layout": "focused",
    "contentMode": "image",
    "returnTo": "index.html#selected-work",
    "title": {
      "lines": [
        "十寸中控屏"
      ],
      "style": "compact"
    },
    "hero": {
      "src": "assets/ctl-10-inch/full-case-study-20260925.web.avif",
      "width": 3150,
      "height": 32768,
      "alt": "十寸中控屏15页完整案例：暖通设备集中控制、界面设计与核心界面总览",
      "mode": "document"
    },
    "description": "智能硬件，生活空间",
    "gallery": []
  },
  {
    "id": "southbank-signals",
    "card": {
      "category": "UI 界面",
      "order": 1,
      "meta": "家庭能源 / App 设计",
      "summary": "家庭设备 · 生活空间",
      "cover": {
        "src": "featured-assets/sunpower-portrait-cover.web.avif",
        "width": 1136,
        "height": 1385,
        "alt": "家庭设备 · 生活空间",
        "position": "50% 50%",
        "scale": 1.015,
        "listFit": "contain"
      },
      "title": "Sunpower App",
      "tag": "Smart Home",
      "preserveCase": false
    },
    "name": "Sunpower App",
    "category": "App design",
    "layout": "focused",
    "contentMode": "image",
    "title": {
      "lines": [
        "Sunpower App"
      ],
      "style": "home-scale"
    },
    "hero": {
      "src": "assets/sunpower-app/confirmed-full-20260924.web.avif",
      "width": 2524,
      "height": 32768,
      "alt": "Sunpower App 完整项目展示：家庭能源管理、设计流程、策略、视觉规范与界面设计",
      "mode": "document"
    },
    "description": "让家庭能源，看得见，也管得好。",
    "gallery": []
  },
  {
    "id": "fieldwork-studio",
    "card": {
      "category": "UI 界面",
      "order": 5,
      "meta": "金融服务 / App 设计",
      "summary": "智能条件单 · 工具运营视觉",
      "cover": {
        "src": "featured-assets/yitaojin-international-cover.web.avif",
        "width": 1136,
        "height": 1385,
        "alt": "广发易淘金国际版封面：全球视野，投资尽在掌握",
        "position": "50% 50%",
        "listFit": "contain"
      },
      "title": "广发易淘金国际版",
      "tag": "Campaign Visuals",
      "preserveCase": false
    },
    "name": "广发易淘金国际版",
    "category": "App design",
    "layout": "focused",
    "title": {
      "lines": [
        "广发易淘金国际版"
      ],
      "style": "compact"
    },
    "hero": {
      "src": "assets/yitaojin-international/01_卡片标题黑色-v7.web.avif",
      "width": 1672,
      "height": 941,
      "alt": "广发易淘金国际版：01 项目封面",
      "mode": "document"
    },
    "description": "围绕产品购买、订单追踪与持仓查看，梳理连续清晰的理财体验。",
    "gallery": [
      {
        "src": "assets/yitaojin-international/02_项目概览-bold-v1.lossless.webp",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：02 项目概览",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/03_设计切入点-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：03 设计切入点",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/04_理财任务路径-bold-v1.lossless.webp",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：04 理财任务路径",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/05_视觉与组件-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：05 视觉与组件",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/06_首页与理财入口-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：06 首页与理财入口",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/07_列表与产品详情-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：07 列表与产品详情",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/08_购买金额与确认-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：08 购买金额与确认",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/09_输入边界状态-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：09 输入边界状态",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/10_提交结果与订单-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：10 提交结果与订单",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/11_持仓与交易记录-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：11 持仓与交易记录",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/12_资产与状态关系-bold-v1.lossless.webp",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：12 资产与状态关系",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/13_跨境理财服务-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：13 跨境理财服务",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/14_开户与办理状态-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：14 开户与办理状态",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/15_资金与服务引导-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：15 资金与服务引导",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/16_风险与信息校验-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：16 风险与信息校验",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/17_空状态体系-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：17 空状态体系",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/18_工具与活动引导-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：18 工具与活动引导",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/19_全局界面阵列-bold-v1.web.avif",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：19 全局界面阵列",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-international/20_设计总结-bold-v1.lossless.webp",
        "width": 1920,
        "height": 1080,
        "alt": "广发易淘金国际版：20 设计总结",
        "layout": "full"
      }
    ]
  },
  {
    "id": "neon-companion",
    "hidden": true,
    "card": {
      "category": "UI 界面",
      "order": 6,
      "meta": "金融服务 / 网页设计",
      "summary": "从开户到交易，构建连贯的桌面端理财体验。",
      "cover": {
        "src": "assets/yitaojin-pc/uniform-spacing/01_项目封面.web.avif",
        "alt": "广发易淘金 PC 端作品封面",
        "position": "center"
      }
    },
    "name": "广发易淘金 PC 端",
    "category": "Web design",
    "layout": "focused",
    "title": {
      "lines": [
        "广发易淘金",
        "PC 端开户系统"
      ],
      "style": "compact"
    },
    "hero": {
      "src": "assets/yitaojin-pc/uniform-spacing/01_项目封面.web.avif",
      "width": 3840,
      "height": 2160,
      "alt": "广发易淘金 PC 端：01 项目封面",
      "mode": "document"
    },
    "description": "PC 端开户与理财体验重设计，从开户准备、资料验证与签署，到资产总览、基金交易和账户安全。",
    "gallery": [
      {
        "src": "assets/yitaojin-pc/uniform-spacing/02_项目概览.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：02 项目概览",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/03_问题与设计策略.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：03 问题与设计策略",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/04_完整体验路径.lossless.webp",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：04 完整体验路径",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/05_企业开户首页.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：05 企业开户首页",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/06_身份与账户验证.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：06 身份与账户验证",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/07_企业资料上传.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：07 企业资料上传",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/08_签署与信息确认.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：08 签署与信息确认",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/09_开户进度与结果.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：09 开户进度与结果",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/10_理财入口与资产总览.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：10 理财入口与资产总览",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/11_基金详情.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：11 基金详情",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/12_风险测评.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：12 风险测评",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/13_基金签约.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：13 基金签约",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/14_转入与交易记录.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：14 转入与交易记录",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/15_账户安全.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：15 账户安全",
        "layout": "full"
      },
      {
        "src": "assets/yitaojin-pc/uniform-spacing/16_设计系统与总结.web.avif",
        "width": 3840,
        "height": 2160,
        "alt": "广发易淘金 PC 端：16 设计系统与总结",
        "layout": "full"
      }
    ]
  },
  {
    "id": "signal-studies",
    "card": {
      "category": "角色设计",
      "order": 7,
      "meta": "角色设定 / 视觉探索",
      "summary": "冷酷外表，自由内核。探索角色造型与动作表达。",
      "cover": {
        "src": "assets/nutu-cover-closing.web.avif",
        "alt": "怒兔作品封面",
        "position": "center 30%"
      }
    },
    "name": "怒兔",
    "category": "Character design",
    "layout": "focused",
    "title": {
      "lines": [
        "怒兔"
      ],
      "style": "compact"
    },
    "hero": {
      "src": "assets/nutu/01-cover.web.avif",
      "width": 2400,
      "height": 6002,
      "alt": "怒兔：项目封面",
      "mode": "document"
    },
    "description": "冷酷外表，自由内核。以「王、怒、酷、逆」四种主题，展示怒兔的角色设定、造型与动作。",
    "gallery": [
      {
        "src": "assets/nutu/02-three-views.web.avif",
        "width": 2400,
        "height": 3600,
        "alt": "怒兔：角色三视图",
        "layout": "full"
      },
      {
        "src": "assets/nutu/03-actions.web.avif",
        "width": 2400,
        "height": 5400,
        "alt": "怒兔：角色动作",
        "layout": "full"
      },
      {
        "src": "assets/nutu/04-theme-lineup.web.avif",
        "width": 2400,
        "height": 5400,
        "alt": "怒兔：主题阵列",
        "layout": "full"
      },
      {
        "src": "assets/nutu/05-king.web.avif",
        "width": 2400,
        "height": 6722,
        "alt": "怒兔：王",
        "layout": "full"
      },
      {
        "src": "assets/nutu/06-indignation.web.avif",
        "width": 2400,
        "height": 6722,
        "alt": "怒兔：怒",
        "layout": "full"
      },
      {
        "src": "assets/nutu/07-cool.web.avif",
        "width": 2400,
        "height": 6722,
        "alt": "怒兔：酷",
        "layout": "full"
      },
      {
        "src": "assets/nutu/08-rebellion.web.avif",
        "width": 2400,
        "height": 6714,
        "alt": "怒兔：逆",
        "layout": "full"
      },
      {
        "src": "assets/nutu/09-closing.web.avif",
        "width": 2400,
        "height": 2998,
        "alt": "怒兔：结尾展示",
        "layout": "full"
      }
    ]
  },
  {
    "id": "folio-in-motion",
    "name": "MK-PaaS",
    "category": "企业协同 / OA 系统",
    "layout": "focused",
    "contentMode": "image",
    "card": {
      "title": "MK-PaaS",
      "category": "UI 界面",
      "order": 8,
      "meta": "企业协同 / OA 系统",
      "summary": "整合待办、审批与企业应用，让协同办公更高效。",
      "tag": "UI / UX",
      "preserveCase": true,
      "cover": {
        "src": "featured-assets/mk-paas-cover.web.avif",
        "width": 1136,
        "height": 1385,
        "alt": "MK-PaaS 企业协同办公系统封面",
        "position": "50% 50%",
        "listFit": "contain"
      }
    },
    "title": {
      "lines": [
        "MK-PaaS"
      ],
      "style": "home-scale"
    },
    "hero": {
      "src": "assets/mk-paas/full-case-study.web.avif",
      "width": 2128,
      "height": 32768,
      "alt": "MK-PaaS OA 系统完整设计案例：工作台、日程、审批、费用报销与企业应用",
      "mode": "document"
    },
    "description": "整合待办、审批与企业应用，让协同办公更高效。",
    "gallery": []
  },
  {
    "id": "t-home-app",
    "card": {
      "category": "UI 界面",
      "order": 2,
      "meta": "智能家居 / App 设计",
      "summary": "家庭设备，生活空间",
      "cover": {
        "src": "featured-assets/t-home-app-cover-v3.web.avif",
        "width": 1135,
        "height": 1386,
        "alt": "T home APP：家庭设备，生活空间",
        "position": "50% 50%",
        "listFit": "contain"
      },
      "title": "T home APP",
      "tag": "Campaign Visuals",
      "preserveCase": true
    },
    "name": "T home APP",
    "category": "App design",
    "layout": "focused",
    "contentMode": "image",
    "returnTo": "index.html#selected-work",
    "title": {
      "lines": [
        "T home APP"
      ],
      "style": "home-scale"
    },
    "hero": {
      "src": "assets/t-home-app/full-case-study.png",
      "width": 1600,
      "height": 24050,
      "alt": "T home APP 完整项目展示：家庭设备、生活空间、设计流程、视觉规范与界面设计",
      "mode": "document"
    },
    "description": "家庭设备，生活空间",
    "gallery": []
  },
  {
    "id": "oa-comics",
    "card": {
      "category": "运营与插画",
      "order": 3,
      "meta": "办公日常 / 场景插画",
      "summary": "办公日常 · 手绘插画",
      "cover": {
        "src": "featured-assets/oa-comics-cover.web.avif",
        "width": 1136,
        "height": 1385,
        "alt": "办公日常 · 手绘插画",
        "position": "50% 50%",
        "listFit": "contain"
      },
      "title": "OA COMICS",
      "tag": "手绘插画",
      "preserveCase": false
    },
    "name": "OA COMICS",
    "category": "手绘插画",
    "layout": "focused",
    "contentMode": "image",
    "returnTo": "index.html#selected-work",
    "title": {
      "lines": [
        "OA COMICS"
      ],
      "style": "home-scale"
    },
    "hero": {
      "src": "assets/oa-comics/00-封面.web.avif",
      "width": 1920,
      "height": 1249,
      "alt": "OA 手绘插画：封面",
      "mode": "document"
    },
    "description": "办公日常 · 手绘插画",
    "gallery": [
      {
        "src": "assets/oa-comics/01-审批更省心.web.avif",
        "width": 1536,
        "height": 1024,
        "alt": "OA 手绘插画：审批更省心",
        "layout": "full",
        "heading": "审批更省心",
        "description": "围绕请假找人签字、审批进度不透明和出差难处理三种情境，用上下对照的漫画呈现手机提交、进度查询与移动审批，让流程变化一目了然。"
      },
      {
        "src": "assets/oa-comics/02-报销更轻松.web.avif",
        "width": 1536,
        "height": 1024,
        "alt": "OA 手绘插画：报销更轻松",
        "layout": "full",
        "heading": "报销更轻松",
        "description": "从票据堆积、手动核算到反复追问进度，以夸张的表情和场景对比，展示票据上传、费用汇总与报销状态查询带来的便利。"
      },
      {
        "src": "assets/oa-comics/03-文件更好找.web.avif",
        "width": 1536,
        "height": 1024,
        "alt": "OA 手绘插画：文件更好找",
        "layout": "full",
        "heading": "文件更好找",
        "description": "针对合同难找、版本混乱和入职流程不熟悉的问题，通过文件检索、版本记录与知识库三个场景，把分散的信息整理成清晰的查找路径。"
      },
      {
        "src": "assets/oa-comics/04-协作更清晰.web.avif",
        "width": 1536,
        "height": 1024,
        "alt": "OA 手绘插画：协作更清晰",
        "layout": "full",
        "heading": "协作更清晰",
        "description": "用消息堆积、任务分散和截止日期临近的日常片段，呈现任务列表、项目看板与到期提醒，让分工、进度和时间安排更直观。"
      },
      {
        "src": "assets/oa-comics/05-日常事务更便捷.web.avif",
        "width": 1536,
        "height": 1024,
        "alt": "OA 手绘插画：日常事务更便捷",
        "layout": "full",
        "heading": "日常事务更便捷",
        "description": "围绕设备预约、用品申领和外出填报，将线下询问与奔波转化为线上查看、申请和提交，用轻松的漫画表达日常办公中的细小改善。"
      }
    ]
  },
  {
    "id": "gf-smart-data",
    "card": {
      "category": "UI 界面",
      "order": 4,
      "meta": "金融服务 / 数据可视化",
      "summary": "金融数据 · 行业研究平台",
      "cover": {
        "src": "featured-assets/gf-smart-data-cover.web.avif",
        "width": 1137,
        "height": 1383,
        "alt": "广发智慧数：金融数据与行业研究平台",
        "position": "50% 50%",
        "listFit": "contain"
      },
      "title": "广发智慧数",
      "tag": "UI / UX",
      "preserveCase": false
    },
    "name": "广发智慧数",
    "category": "UI / UX",
    "layout": "focused",
    "contentMode": "image",
    "returnTo": "index.html#selected-work",
    "title": {
      "lines": [
        "广发智慧数"
      ],
      "style": "compact"
    },
    "hero": {
      "src": "assets/gf-smart-data/full-case-study-corrected.png",
      "width": 2293,
      "height": 32768,
      "alt": "广发智慧数完整项目展示",
      "mode": "document"
    },
    "description": "金融数据 · 行业研究平台",
    "gallery": []
  },
  {
    "id": "campaign-2025",
    "card": {
      "order": 9,
      "category": "运营与插画",
      "meta": "活动视觉 / 运营设计",
      "title": "运营作品集",
      "summary": "2025 · 活动视觉与运营设计",
      "tag": "Campaign Visuals",
      "preserveCase": false,
      "cover": {
        "src": "featured-assets/campaign-2025-cover-54.web.avif",
        "width": 820,
        "height": 1000,
        "alt": "运营作品集封面：活动视觉拼贴与运营设计插画",
        "position": "50% 50%",
        "listFit": "contain"
      }
    },
    "name": "运营 2025 年作品集",
    "category": "运营设计 / 活动视觉",
    "layout": "focused",
    "contentMode": "image",
    "returnTo": "index.html#selected-work",
    "title": {
      "lines": [
        "运营 2025 年作品集"
      ],
      "style": "compact"
    },
    "hero": {
      "src": "assets/campaign-2025/01-cover.web.avif",
      "width": 3840,
      "height": 2448,
      "alt": "运营 2025 年作品集：运营设计作品集封面",
      "mode": "document"
    },
    "description": "2025 年运营作品集，包含活动视觉、南向通设计流程、运营页面、节日日历与功能引导页。",
    "gallery": [
      {
        "src": "assets/campaign-2025/05-southbound-process.web.avif",
        "width": 1086,
        "height": 1448,
        "alt": "运营 2025 年作品集：南向通活动页设计流程：需求、草图、模型、配色与定稿",
        "layout": "full"
      },
      {
        "src": "assets/campaign-2025/09-feature-onboarding.web.avif",
        "width": 1440,
        "height": 1374,
        "alt": "运营 2025 年作品集：易淘金国际版功能引导页设计",
        "layout": "full"
      },
      {
        "src": "assets/campaign-2025/02-trading-campaign.web.avif",
        "width": 3840,
        "height": 2448,
        "alt": "运营 2025 年作品集：港股行情免费领活动视觉",
        "layout": "full"
      },
      {
        "src": "assets/campaign-2025/03-may-campaign.web.avif",
        "width": 3840,
        "height": 2448,
        "alt": "运营 2025 年作品集：五月融资活动视觉",
        "layout": "full"
      },
      {
        "src": "assets/campaign-2025/04-christmas-campaign.web.avif",
        "width": 3840,
        "height": 2448,
        "alt": "运营 2025 年作品集：圣诞嘉年华活动视觉",
        "layout": "full"
      },
      {
        "src": "assets/campaign-2025/06-southbound-campaign.web.avif",
        "width": 3840,
        "height": 2448,
        "alt": "运营 2025 年作品集：南向通客户活动视觉",
        "layout": "full"
      },
      {
        "src": "assets/campaign-2025/07-campaign-pages.web.avif",
        "width": 3840,
        "height": 3454,
        "alt": "运营 2025 年作品集：海外基金、ETF与运营活动页面展示",
        "layout": "full"
      },
      {
        "src": "assets/campaign-2025/08-calendar-design-v2.web.avif",
        "width": 3840,
        "height": 6610,
        "alt": "运营 2025 年作品集：节日主题休市日历设计",
        "layout": "full"
      }
    ]
  },
  {
    "id": "jyquants",
    "card": {
      "title": "JYQuants",
      "category": "UI 界面",
      "order": 10,
      "summary": "量化交易 · 网站体验",
      "meta": "金融科技 / Web 设计",
      "preserveCase": true,
      "cover": {
        "src": "featured-assets/jyquants-cover-20260927.web.avif",
        "width": 1136,
        "height": 1385,
        "alt": "JYQuants 量化交易网站封面：绿色背景中的笔记本电脑与网站首页",
        "position": "50% 50%",
        "listFit": "contain"
      }
    },
    "name": "JYQuants",
    "category": "Web design",
    "layout": "focused",
    "contentMode": "image",
    "title": {
      "lines": [
        "JYQuants"
      ],
      "style": "compact"
    },
    "hero": {
      "src": "assets/jyquants/full-case-study-20260927.web.avif",
      "width": 2193,
      "height": 32768,
      "alt": "JYQuants 量化交易网站完整设计案例：项目介绍、视觉规范、网站首页、产品与文章页面、账户入口及设计总结",
      "mode": "document"
    },
    "description": "量化交易网站的 UX / UI 设计，包含视觉规范、网站首页、产品与文章页面及账户入口。",
    "gallery": []
  }
];
