# React-admin-vite
 

> 本项目使用前端新型构建工具vite ， 更换了以往的webpack。开箱即用，使其开发效率提高，编译速度更快，减少复杂配置。在正式启动项目前，请检查本地环境版本。如若启动失败，请升级node。

## 前端技术栈

- react@18
- antd@4.24
- react-dom@18
- react-router-dom@6.3
- react-scripts@5.0
- react-Hooks
- redux
- vite
- axios
- less
- echarts
- eslint
- antv

## 文档

- react：https://react.docschina.org/
- vite：https://cn.vitejs.dev/guide/
- antd：https://4x.ant.design/components/button-cn/
- antv：http://antv.antfin.com/zh-cn/g2/3.x/demo/index.htm

## 环境版本
- node：v16.16.0   
- npm：v8.11.0
- react-scripts：v5.0.1
- vite：v4.1.0

## 目录说明

```
react-admin-vite 
│
└── public 
│
└── src
│   ├── api  ： 请求与接口配置文件
│   ├── assets ： 静态资源文件
│   ├── components  ： 公共组件存放文件
│   └───pages  ： view视图组件文件
│       ├── Commonview  
│   	   
│   ├── router  ： 路由菜单
│   ├── styles  ： 公共样式
│   ├── utils   ： 工具库
│   
└── web-dataview  ：打包文件夹
│
└── vite.config.ts  ： vite配置
```

## 运行打包

- git仓库

  ```
  https://gitee.com/jiangsihan/react-admin-vite.git
  ```

- 安装依赖包

  ```
  npm i  |  cnpm i 
  ```

- 项目启动

  ```
  npm run dev
  ```

- 项目打包

  ```
  npm run build
  ```

## 全局环境配置

- 根目录

    ` .env`   全局默认配置文件，无论什么环境都会加载合并。 

    `.env.development`   开发环境的配置文件 

    `.env.test`  测试环境的配置文件 

    `.env.production`  生产环境的配置文件







项目构建日期：2023/03/15

18307106535@163.com

ZiChen-Jiang 江子辰