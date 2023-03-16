---
title: 'Electron 循环自定义打包'
keywords: '一朵大呲花,IT博客,技术博客,区块链博客'
description: 'Electron 循环自定义打包'

summary:
  title: 'Electron 循环自定义打包'
  type: 'Electron Loop Build'
  icon: '🥝'
  desc: 'Electron 循环自定义打包'
  tags: 'Electron 自定义打包'
  createtime: '2023-01-31'
  pic: ''
---

# Electron 自定义循环打多个包

接到 SEO 需求，需要打 N 多个渠道包，用于统计各个渠道用户的日活，并且生成不同的配置项文件，用于区别统计用户日活

- 思路：自定义 package 打包脚本，实现自定义打包的需求

### 方式一：通过 Google github 开源 [zx](https://github.com/google/zx){:target="\_blank"} 脚本工具实现

```json
// package.json
{
  "scripts": {
    "dev": "chcp 65001 && vite",
    "build-all": "esno .electron-vite/build.ts"
  }
}
```

```ts
// .electron-vite/build.ts
import fs from 'fs'
import { join, resolve } from 'path'
import { $ } from 'zx'
import { colorLog, runnerLog } from './patternLog' // 自定义控制台 log 输出

const platformList = [
  { name: 'test1', code: 001 },
  { name: 'test2', code: 002 },
  { name: 'test3', code: 003 },
  { name: 'test4', code: 004 },
  { name: 'test5', code: 005 },
]
const unionBuild = async (pf) => {
  const allLog = colorLog('build')
  console.time(allLog.timeKey('命令行执行'))
  // 写入配置项文件
  fs.writeFileSync(
    resolve(`platform.json`),
    JSON.stringify({
      name: pf.name,
      baseData: pf.baseData,
    })
  )

  // zx 脚本工具 通过 $ 可进行执行 Bash 命令
  await runnerLog(() => $`electron-icon-builder --input=./public/icon.png --output=build --flatten`, {
    name: 'electron-icon-builder',
    info: '完成图标生成',
    timeKey: '构建',
  })
  await runnerLog(() => $`vue-tsc --noEmit`, {
    name: 'vue-tsc',
    info: '完成ts类型检查',
    timeKey: 'ts类型检查',
  })
  await runnerLog(() => $`vite build`, {
    name: 'vite build',
    info: '完成vite渲染进程代码构建',
    timeKey: '构建',
  })
  await runnerLog(() => $`electron-builder --config.productName='${pf.name}'`, {
    name: 'electron-builder',
    info: '输出可执行程序成功',
    timeKey: '安装包',
  })
  // 循环执行打包命令进行打包
  ;(async function () {
    for (let i = 1; i < platformList.length; i++) {
      await unionBuild(platformList[i])
    }
  })()
}
```

```ts
// patternLog.ts
import { chalk } from 'zx'

interface LogInfo {
  name: string
  info: string
  timeKey: string
}

export function colorLog(name: string) {
  const logo = `  ${name}  `
  // eslint-disable-next-line no-console
  const doneLog = (info: string) => console.log(`\n${chalk.bgGreen.white(logo)} ${info}`)

  // eslint-disable-next-line no-console
  const errorLog = (info: string) => console.log(`\n${chalk.bgRed.white(logo)} ${info}`)

  // eslint-disable-next-line no-console
  const okayLog = (info: string) => console.log(`\n${chalk.bgBlue.white(logo)} ${info}`)

  const timeKey = (info: string) => `\n${chalk.bgBlue.white(logo)} 本次 ${info} 用时为`

  return {
    logo,
    doneLog,
    errorLog,
    okayLog,
    timeKey,
  }
}

export async function runnerLog(promiseCli: () => Promise<unknown>, logInfo: LogInfo) {
  const loger = colorLog(logInfo.name)
  console.time(loger.timeKey(logInfo.timeKey))
  await promiseCli().catch((error) => {
    loger.errorLog(JSON.stringify(error))
    process.exit(1)
  })
  loger.doneLog(logInfo.info)
  console.timeEnd(loger.timeKey(logInfo.timeKey))
}
```

### 方式二：通过 rollup 自定义 rollupOptions 配置项进行打包

```ts
import { $, path } from 'zx'
import { config as getEnv } from 'dotenv'
import type { OutputOptions } from 'rollup'
import { rollup } from 'rollup'
import { build } from 'electron-builder'
import getRollupConfig from './rollup.config' // @rollup 打包的配置文件
import getBuilderConfig from './builder.config' // electron-builder 的一些配置文件
import { colorLog, runnerLog } from './patternLog'
const defaultBuildCli = async () => {
  const allLog = colorLog('build')
  console.time(allLog.timeKey('命令行执行'))

  await runnerLog(() => $`rimraf out`, {
    name: 'rimraf',
    info: '清除 dist & out 目录 成功',
    timeKey: '清除',
  })

  await runnerLog(() => $`vue-tsc --noEmit --skipLibCheck`, {
    name: 'vue-tsc',
    info: '完成ts类型检查',
    timeKey: 'ts类型检查',
  })

  await runnerLog(() => $`vite build --config .electron-vite/vite.config.ts`, {
    name: 'vite',
    info: '完成渲染进程代码构建',
    timeKey: '构建',
  })

  // 启动环境变量
  const { parsed: globalEnv } = getEnv({ path: path.resolve(process.cwd(), '.env') })
  const { parsed: env } = getEnv({ path: path.resolve(process.cwd(), '.env.production') })
  const rollupConfig = getRollupConfig({ ...globalEnv, ...env } as NodeJS.ProcessEnv)
  const rollupBuild = await rollup(rollupConfig)

  await runnerLog(() => rollupBuild.write(rollupConfig.output as OutputOptions), {
    name: 'rollup',
    info: '完成主进程代码构建',
    timeKey: '构建',
  })

  const builderConfig = getBuilderConfig(true)
  await runnerLog(() => build(builderConfig), {
    name: 'electron-build',
    info: '输出可执行程序成功',
    timeKey: '安装包',
  })

  console.timeEnd(allLog.timeKey('命令行执行'))
}

defaultBuildCli()
```
