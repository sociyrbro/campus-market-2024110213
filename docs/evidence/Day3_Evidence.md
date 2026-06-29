# Day3 Evidence - Mock 数据建模与列表渲染

## 1. 今日完成内容

今日完成了校园集市项目的 Mock 数据建模、接口封装和页面列表渲染工作，具体包括：
- 在 `package.json` 中配置了 JSON Server 依赖和启动脚本
- 创建了 `db.json` 文件，包含 trades、lostFounds、groupBuys、errands 四个数据集合
- 创建了统一的 HTTP 封装模块 `src/api/http.ts`
- 创建了四个业务 API 模块：`trade.ts`、`lostFound.ts`、`groupBuy.ts`、`errand.ts`
- 创建了通用列表卡片组件 `ItemCard.vue` 和空状态组件 `EmptyState.vue`
- 完成了四个核心业务页面的数据列表渲染：TradeView、LostFoundView、GroupBuyView、ErrandView

## 2. Mock 数据结构说明

| 数据集合 | 对应业务 | 主要字段 | 页面用途 |
|---|---|---|---|
| trades | 二手交易 | title、price、category、location、status | 展示二手商品列表 |
| lostFounds | 失物招领 | title、type、itemName、location、eventTime、status | 展示失物和招领信息 |
| groupBuys | 拼单搭子 | title、type、targetCount、currentCount、deadline | 展示拼单和搭子信息 |
| errands | 跑腿委托 | title、taskType、reward、from、to、deadline | 展示跑腿任务列表 |

## 3. 我的设计

**二手交易 (trades)：**
- `price` 字段：二手商品核心属性，用户最关心的信息之一，需要在列表中突出展示
- `condition` 字段：描述商品新旧程度（九成新、八成新等），帮助买家判断商品价值
- `category` 字段：用于商品分类，便于用户筛选浏览

**失物招领 (lostFounds)：**
- `type` 字段：区分"寻物"和"招领"两种类型，决定卡片标签显示内容
- `itemName` 字段：明确物品名称，便于失主识别
- `eventTime` 字段：记录丢失或拾到时间，帮助确认是否为自己的物品

**拼单搭子 (groupBuys)：**
- `targetCount` 和 `currentCount` 字段：展示拼单进度，用户可以直观了解还差多少人成团
- `deadline` 字段：拼单截止时间，营造紧迫感，促进用户尽快参与

**跑腿委托 (errands)：**
- `from` 和 `to` 字段：明确任务起点和终点，跑腿者需要知道具体路线
- `reward` 字段：跑腿报酬，是吸引用户接单的关键信息

## 4. AI 设计

AI 工具协助生成了以下内容：

- **API 模块**：AI 生成了 `src/api/http.ts` 基础封装和四个业务 API 模块，包括类型定义和接口函数
- **页面列表代码**：AI 根据 TradeView.vue 的模板，生成了 LostFoundView.vue、GroupBuyView.vue、ErrandView.vue 的完整代码
- **EmptyState 组件**：AI 创建了 `src/components/EmptyState.vue` 通用空状态组件

**不合理之处：**
- GroupBuyView.vue 中 EmptyState 的位置被错误地放在了 `</section>` 闭合标签之后，需要手动调整到正确位置

## 5. 最终调整

- 修复了 GroupBuyView.vue 中 EmptyState 组件位置错误的问题，将其移动到 `<section>` 内部，与其他三个页面保持一致
- 为四个页面的 EmptyState 设置了不同的提示文本，使其更贴合各自业务场景：
  - TradeView："暂无交易记录"
  - LostFoundView："暂无失物招领记录"
  - GroupBuyView："暂无团购记录"
  - ErrandView："暂无代跑代办记录"

## 6. 遇到的问题与解决方法

**问题：TypeScript 报错"找不到模块 axios 或其相应的类型声明"**

**原因：** 项目的 `package.json` 中未安装 axios 依赖，但 `src/api/http.ts` 文件引用了 axios。

**解决方法：** 在终端中执行 `pnpm add axios` 安装 axios 依赖。安装完成后，axios 自带类型定义，无需额外安装 `@types/axios`。

## 7. 今日反思

Mock 数据建模、接口请求和列表渲染是项目开发的基础工作。通过提前定义好数据结构和接口，可以让前后端并行开发，前端可以在没有真实后端的情况下进行页面开发和测试。列表渲染的完成让四个核心业务页面具备了基础功能，用户可以浏览和查看各类信息，为后续的详情页、发布功能等高级特性打下了坚实基础。同时，通用组件的提取（ItemCard、EmptyState）提高了代码复用性，保持了页面风格的一致性。