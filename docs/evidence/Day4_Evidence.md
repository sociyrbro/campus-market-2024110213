# Day4 Evidence - 发布表单与数据新增

## 1. 今日完成内容

今日完成了校园集市项目的发布表单开发、表单校验逻辑和数据新增功能。具体包括：
- 在四个业务 API 模块（trade.ts、lostFound.ts、groupBuy.ts、errand.ts）中补充了 `create*` 新增方法
- 创建了通用表单字段组件 `FormField.vue`，支持标签、必填标记、错误提示等功能
- 开发了 `PublishView.vue` 发布页面，实现了根据发布类型动态显示不同表单字段的功能
- 编写了完整的表单校验规则，覆盖所有业务类型的必填字段和格式校验
- 实现了表单提交逻辑，通过调用对应业务的 API 完成数据新增
- 修复了 API 创建函数参数类型问题，使用 `Omit<T, 'id'>` 排除自动生成的 id 字段

## 2. 发布类型与字段设计

| 发布类型 | 对应数据集合 | 关键字段 | 设计理由 |
|---|---|---|---|
| 二手交易 | trades | title、category、price、condition、location、description | 需要展示商品基本信息和交易条件，category 帮助用户分类浏览，price 和 condition 是二手交易的核心属性 |
| 失物招领 | lostFounds | title、type、itemName、location、eventTime、description | type 区分寻物和招领两种场景，itemName 明确物品名称便于识别，eventTime 记录事件发生时间 |
| 拼单搭子 | groupBuys | title、type、targetCount、deadline、location、description | targetCount 表示目标人数，deadline 表示截止时间，这两个字段是拼单活动的关键信息 |
| 跑腿委托 | errands | title、taskType、reward、from、to、deadline、description | from/to 明确任务路线，reward 表示酬劳金额，这些是跑腿任务的核心要素 |

## 3. 表单校验规则

本次为发布表单设置了完整的校验规则，确保数据新增的完整性和合理性：

**通用校验（所有发布类型）：**
- 标题不能为空
- 地点不能为空
- 描述不能为空

**二手交易专属校验：**
- 商品分类不能为空
- 价格必须大于 0（防止输入负数或零价格）
- 成色必须选择（提供全新、九成新、八成新、正常使用痕迹等选项）

**失物招领专属校验：**
- 物品名称不能为空
- 发生时间必须选择

**拼单搭子专属校验：**
- 拼单类型不能为空
- 目标人数不能少于 2 人（拼单至少需要两人参与）
- 截止时间必须选择

**跑腿委托专属校验：**
- 任务类型不能为空
- 酬劳不能为负数
- 取件地点不能为空
- 送达地点不能为空
- 截止时间必须选择

## 4. AI 协作记录

**使用的 AI 工具：**
- Trae AI 代码助手

**核心提示词：**
- "仿照 TradeView.vue，完成发布表单页面，支持四种发布类型动态切换"
- "为四个业务 API 添加 create 方法，使用 Omit 类型排除 id 字段"

**AI 生成的内容：**
- 创建了 `FormField.vue` 通用表单字段组件，包含标签、必填标记和错误提示功能
- 在四个 API 文件中添加了 `createTrade`、`createLostFound`、`createGroupBuy`、`createErrand` 方法
- 生成了 `PublishView.vue` 的基础结构，包含发布类型选择、动态字段显示逻辑
- 生成了表单校验函数 `validateForm` 和错误提示机制
- 生成了表单提交函数 `handleSubmit`，调用对应 API 完成数据新增
- 将四个 API 创建函数的参数类型修改为 `Omit<T, 'id'>`，解决了 TypeScript 类型错误

**AI 生成内容的不合理之处：**
- 初始生成的表单布局使用简单的垂直排列，没有考虑表单的视觉层次和间距
- 表单字段的默认值设置不够合理，例如 price 默认值为 0，可能导致用户误解
- 部分字段的校验提示信息不够友好，需要人工调整为更清晰的中文提示

## 5. 人工调整内容

在 AI 生成的基础上，我进行了以下调整和优化：

- **表单样式优化**：添加了 `publish-form` 类，使用 grid 布局和适当的间距，让表单看起来更加整洁美观
- **按钮样式调整**：设计了 primary 和 secondary 两种按钮样式，primary 按钮使用蓝色背景突出显示
- **提交按钮状态**：添加了 `submitting` 状态，提交过程中禁用按钮并显示"提交中..."提示
- **错误清除逻辑**：实现了 `clearErrors` 函数，在校验前和重置时清除所有错误提示
- **时间格式化**：添加了 `getCurrentTime` 函数，用于生成二手交易的发布时间
- **路由跳转**：发布成功后使用 `router.push` 跳转到对应业务页面，提供更好的用户体验
- **异常处理**：添加了 try-catch-finally 块，捕获 API 请求失败的情况并提示用户检查 Mock 服务

## 6. 测试记录

**测试场景：发布二手交易信息**

1. 启动项目：运行 `pnpm dev` 启动前端和 Mock 服务
2. 访问发布页面：在浏览器中打开 http://localhost:5173/publish
3. 选择发布类型：选择"二手交易"
4. 填写表单信息：
   - 标题："闲置笔记本电脑"
   - 地点："西区宿舍"
   - 描述："大一入学购买，使用两年，配置良好"
   - 商品分类："数码配件"
   - 价格：800
   - 成色："八成新"
5. 点击发布按钮：表单校验通过，弹出"二手商品发布成功"提示
6. 验证跳转：自动跳转到 http://localhost:5173/trade 二手交易列表页
7. 验证数据：在列表中看到新增的"闲置笔记本电脑"记录
8. 检查 db.json：打开 db.json 文件，确认 trades 数组中新增了一条 id 为 3 的记录，包含所有填写的字段

## 7. 遇到的问题与解决方法

**问题：TypeScript 报错"Property 'id' is missing"**

**原因：** 四个 API 模块的 `create*` 函数参数类型直接使用了完整的接口类型（如 `TradeItem`），其中 `id` 字段被定义为必填项。但在创建新数据时，`id` 应该由 JSON Server 自动生成，前端不应该传递 `id`。

**解决方法：** 将四个 API 创建函数的参数类型修改为 `Omit<T, 'id'>`，即从完整类型中排除 `id` 字段：
- `createTrade(data: Omit<TradeItem, 'id'>)`
- `createLostFound(data: Omit<LostFoundItem, 'id'>)`
- `createGroupBuy(data: Omit<GroupBuyItem, 'id'>)`
- `createErrand(data: Omit<ErrandItem, 'id'>)`

修改后，前端在调用创建接口时就不需要传递 `id`，符合 RESTful API 的设计规范，TypeScript 类型检查也顺利通过。

## 8. 今日反思

发布表单、表单校验和数据新增是完整 Web 应用不可或缺的核心功能。发布表单是用户输入数据的入口，合理的字段设计能够引导用户提供完整的信息；表单校验则是保障数据质量的第一道防线，通过验证必填字段和数据格式，可以有效防止无效数据进入系统；数据新增则是将用户输入的信息持久化存储的关键步骤，实现了从用户输入到数据存储的完整链路。这三个环节紧密配合，共同构成了 Web 应用的数据录入功能，为后续的数据展示和业务处理提供了基础。同时，通用组件（如 FormField）的提取和 API 封装的规范化，提高了代码的复用性和可维护性，为项目的持续扩展打下了良好基础。