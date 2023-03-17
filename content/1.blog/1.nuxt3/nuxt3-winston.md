---
title: 'Nuxt winston 收集自定义日志'
keywords: '一朵大呲花,IT博客,技术博客,区块链博客'
description: 'Nuxt winston 收集自定义日志'

summary:
  title: 'Nuxt winston 收集自定义日志'
  type: 'Nuxt winston'
  icon: '🍉'
  desc: 'Nuxt - 收集自定义日志'
  tags: 'Nuxt'
  createtime: '2023-01-28'
  pic: ''
---

# 🍇 Winston 收集自定义日志

---

## 🍈 在 nuxt.config.js 引入 winston

```ts
// nuxt.config.js
import { resolve } from 'path'
import moment from 'moment'
import { format, transports } from 'winston'
```

## 🍊 自定义日志格式

```ts
// nuxt.config.js
const { combine, timestamp, label, printf } = format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})
```

## 🍋 自定义日志存放路径

```ts
// nuxt.config.js
// 日志存放路径
const winstonErrorLogPath = resolve('/var/applogs', './', `error_${moment().format('YYYY-MM-DD')}.log`)
const winstonInfoLogPath = resolve('/var/applogs', './', `info_${moment().format('YYYY-MM-DD')}.log`)
const jsLogPath = resolve('/var/applogs', './', `js_${moment().format('YYYY-MM-DD')}.log`)
const winstonLog =
  process.env.NODE_ENV == 'production'
    ? {
        useDefaultLogger: false,
        loggerOptions: {
          transports: [
            new transports.File({
              format: myFormat,
              level: 'error',
              filename: winstonErrorLogPath,
              maxsize: 5 * 1024 * 1024,
              json: false,
            }),
            new transports.File({
              format: myFormat,
              level: 'info',
              filename: winstonInfoLogPath,
              maxsize: 5 * 1024 * 1024, // 这个是限制日志文件的大小
              json: false,
            }),
            new transports.File({
              format: myFormat,
              level: 'silly',
              filename: jsLogPath,
              maxsize: 5 * 1024 * 1024,
              json: false,
            }),
          ],
        },
      }
    : {}
```

## 🍍 在 nuxt.config.js 中注册

```ts
// nuxt.config.js
export default {
  modules: ['nuxt-winston-log'],
  winstonLog,
}
```

## 🥭 在 axios 请求封装模块中使用

```ts
  // plugins/interceptor.js
  export default function ({ store, route, redirect, $axios, $winstonLog }) {
    $axios.onResponse(response => {
      // 打印日志 先判断是否有$winstonLog，因为该变量只在服务端存在
      if ($winstonLog) {
        $winstonLog.info(`[${response.status}] ${response.request.path}`)
      }
    }
    $axios.onError(error => {
        // 打印日志 先判断是否有$winstonLog，因为该变量只在服务端存在
        if ($winstonLog) {
          $winstonLog.error(`[${error.status}] | ${error.request.path} | ${error.message}`)
          $winstonLog.error(error.response && error.response.data)
      }
    }
  }
```
