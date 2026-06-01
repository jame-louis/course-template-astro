---
title: "课程介绍与开发环境搭建"
lectureNumber: 1
week: 1
module: "基础入门"
description: "课程概述、教学目标、开发环境配置、工具链介绍"
duration: "90分钟"
difficulty: beginner
prerequisites: []
tags: ["课程介绍", "开发环境", "工具链"]
hasSlides: false
hasAssignment: true
draft: false
selfCheckQuestions:
  - id: "env-check"
    question: "如何验证 Node.js 是否安装成功？"
    answer: "在终端运行 `node --version` 命令，如果显示版本号则表示安装成功。"
    hint: "使用命令行工具，输入 node 加上两个短横线"
  - id: "html-structure"
    question: "HTML 文件的基本结构包含哪些必要标签？"
    answer: "<!DOCTYPE html>、<html>、<head>、<body> 是构成 HTML 文档的必要标签。"
    hint: "文档类型声明和三个主要结构标签"
  - id: "vs-code-ext"
    question: "VS Code 中推荐安装哪些前端开发扩展？"
    answer: "Live Server（实时预览）、Prettier（代码格式化）、ESLint（代码检查）等。"
---

## 学习目标

- 了解课程的整体结构和教学目标
- 掌握开发环境的搭建方法
- 熟悉常用的开发工具和调试技巧

---

## 一、课程概述

### 1.1 课程定位

本课程旨在帮助学生掌握现代前端开发的核心技术，培养独立构建 Web 应用的能力。

### 1.2 学习路径

```
基础入门 → 核心概念 → 框架应用 → 项目实战
```

---

## 二、开发环境搭建

### 2.1 必备工具

| 工具 | 用途 | 下载地址 |
|------|------|----------|
| VS Code | 代码编辑器 | code.visualstudio.com |
| Node.js | 运行时环境 | nodejs.org |
| Git | 版本控制 | git-scm.com |

### 2.2 安装验证

```bash
node --version
npm --version
git --version
```

---

## 三、第一个示例

创建一个简单的 HTML 文件：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的第一个页面</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

---

## 小结

- 了解课程结构和学习目标
- 完成开发环境搭建
- 运行第一个示例程序
