import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url'
import topLevelAwait from 'vite-plugin-top-level-await'
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // topLevelAwait({
    //   promiseExportName: '__tla',
    //   promiseImportName: i => `__tla_${i}`
    // })
  ],
  // base: "https://jiangsihan-1303111066.cos.ap-nanjing.myqcloud.com/react-admin/",
  base:"./",
  server: {
    host: '0.0.0.0',// 监听所有地址
    port: 8081,// 默认端口
    https: false,// 是否开启 https
    open: true,// 项目启动时是否打开浏览器
    cors: true,// 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
    base: '/',//用于代理 Vite 作为子文件夹时使用。
    headers: {},//指定服务端响应的headers信息
    strictPort: true,//设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    proxy: {
      //当有 /api开头的地址是，代理到target地址
      '/api': {
        target: 'https://jiangsihan.cn/', // 开发环境代理的目标地址
        changeOrigin: true,//是否改变请求源头
        rewrite: (path) => path.replace(/^\/api/, ''), // 路径重写,
      },
    },
  },
  build: {
    outDir: "manager-admin", // 打包文件 默认dist
    minify: "terser",
    // 打包清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  },
  resolve: {
    // 路径别名
    alias: {
      '@': path.resolve(__dirnameNew, './src')
    }
  },
  // css配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { //全局样式  用法：color: @primary-color;
          // "primary-color": "#EAA516",
        },
      }
    }
  }
})
