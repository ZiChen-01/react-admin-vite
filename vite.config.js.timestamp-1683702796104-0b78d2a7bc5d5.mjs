// vite.config.js
import { defineConfig } from "file:///D:/%E6%B1%9F%E5%AD%90%E8%BE%B0/my-react-vite/node_modules/.store/vite@4.3.5/node_modules/vite/dist/node/index.js";
import react from "file:///D:/%E6%B1%9F%E5%AD%90%E8%BE%B0/my-react-vite/node_modules/.store/@vitejs+plugin-react@4.0.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { fileURLToPath } from "url";
import topLevelAwait from "file:///D:/%E6%B1%9F%E5%AD%90%E8%BE%B0/my-react-vite/node_modules/.store/vite-plugin-top-level-await@1.3.0/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/%E6%B1%9F%E5%AD%90%E8%BE%B0/my-react-vite/vite.config.js";
var __filenameNew = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirnameNew = path.dirname(__filenameNew);
var vite_config_default = defineConfig({
  plugins: [
    react()
    // topLevelAwait({
    //   promiseExportName: '__tla',
    //   promiseImportName: i => `__tla_${i}`
    // })
  ],
  server: {
    host: "0.0.0.0",
    // 监听所有地址
    port: 8081,
    // 默认端口
    https: false,
    // 是否开启 https
    open: true,
    // 项目启动时是否打开浏览器
    cors: true,
    // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
    base: "/",
    //用于代理 Vite 作为子文件夹时使用。
    headers: {},
    //指定服务端响应的headers信息
    strictPort: true
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    // proxy: { //使用代理
    //   '/adpi': { //当有 /api开头的地址是，代理到target地址
    //     target: 'https://zhihuitest.wzbank.cn/yinqihui/mutualfund-manager', // 需要跨域代理的本地路径
    //     changeOrigin: true, //是否改变请求源头
    //     rewrite: (path) => path.replace(/^\/api/, ''), // 路径重写
    //   }
    // }
  },
  build: {
    outDir: "web-view",
    // 打包文件 默认dist
    minify: "terser",
    // 打包清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    // 路径别名
    alias: {
      "@": path.resolve(__dirnameNew, "./src")
    }
  },
  // css配置
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          //全局样式  用法：color: @primary-color;
          // "primary-color": "#EAA516",
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTZDNUZcdTVCNTBcdThGQjBcXFxcbXktcmVhY3Qtdml0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU2QzVGXHU1QjUwXHU4RkIwXFxcXG15LXJlYWN0LXZpdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNiVCMSU5RiVFNSVBRCU5MCVFOCVCRSVCMC9teS1yZWFjdC12aXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCdcclxuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSAndml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0J1xyXG5cclxuY29uc3QgX19maWxlbmFtZU5ldyA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKVxyXG5jb25zdCBfX2Rpcm5hbWVOZXcgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZU5ldylcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgLy8gdG9wTGV2ZWxBd2FpdCh7XHJcbiAgICAvLyAgIHByb21pc2VFeHBvcnROYW1lOiAnX190bGEnLFxyXG4gICAgLy8gICBwcm9taXNlSW1wb3J0TmFtZTogaSA9PiBgX190bGFfJHtpfWBcclxuICAgIC8vIH0pXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6ICcwLjAuMC4wJywvLyBcdTc2RDFcdTU0MkNcdTYyNDBcdTY3MDlcdTU3MzBcdTU3NDBcclxuICAgIHBvcnQ6IDgwODEsLy8gXHU5RUQ4XHU4QkE0XHU3QUVGXHU1M0UzXHJcbiAgICBodHRwczogZmFsc2UsLy8gXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGIGh0dHBzXHJcbiAgICBvcGVuOiB0cnVlLC8vIFx1OTg3OVx1NzZFRVx1NTQyRlx1NTJBOFx1NjVGNlx1NjYyRlx1NTQyNlx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxyXG4gICAgY29yczogdHJ1ZSwvLyBcdTRFM0FcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcdTU2NjhcdTkxNERcdTdGNkUgQ09SU1x1MzAwMlx1OUVEOFx1OEJBNFx1NTQyRlx1NzUyOFx1NUU3Nlx1NTE0MVx1OEJCOFx1NEVGQlx1NEY1NVx1NkU5MFx1RkYwQ1x1NEYyMFx1OTAxMlx1NEUwMFx1NEUyQSBcdTkwMDlcdTk4NzlcdTVCRjlcdThDNjEgXHU2NzY1XHU4QzAzXHU2NTc0XHU4ODRDXHU0RTNBXHU2MjE2XHU4QkJFXHU0RTNBIGZhbHNlIFx1ODg2OFx1NzkzQVx1Nzk4MVx1NzUyOFx1MzAwMlxyXG4gICAgYmFzZTogJy8nLC8vXHU3NTI4XHU0RThFXHU0RUUzXHU3NDA2IFZpdGUgXHU0RjVDXHU0RTNBXHU1QjUwXHU2NTg3XHU0RUY2XHU1OTM5XHU2NUY2XHU0RjdGXHU3NTI4XHUzMDAyXHJcbiAgICBoZWFkZXJzOiB7fSwvL1x1NjMwN1x1NUI5QVx1NjcwRFx1NTJBMVx1N0FFRlx1NTRDRFx1NUU5NFx1NzY4NGhlYWRlcnNcdTRGRTFcdTYwNkZcclxuICAgIHN0cmljdFBvcnQ6IHRydWUsLy9cdThCQkVcdTRFM0EgdHJ1ZSBcdTY1RjZcdTgyRTVcdTdBRUZcdTUzRTNcdTVERjJcdTg4QUJcdTUzNjBcdTc1MjhcdTUyMTlcdTRGMUFcdTc2RjRcdTYzQTVcdTkwMDBcdTUxRkFcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTVDMURcdThCRDVcdTRFMEJcdTRFMDBcdTRFMkFcdTUzRUZcdTc1MjhcdTdBRUZcdTUzRTNcdTMwMDJcclxuICAgIC8vIHByb3h5OiB7IC8vXHU0RjdGXHU3NTI4XHU0RUUzXHU3NDA2XHJcbiAgICAvLyAgICcvYWRwaSc6IHsgLy9cdTVGNTNcdTY3MDkgL2FwaVx1NUYwMFx1NTkzNFx1NzY4NFx1NTczMFx1NTc0MFx1NjYyRlx1RkYwQ1x1NEVFM1x1NzQwNlx1NTIzMHRhcmdldFx1NTczMFx1NTc0MFxyXG4gICAgLy8gICAgIHRhcmdldDogJ2h0dHBzOi8vemhpaHVpdGVzdC53emJhbmsuY24veWlucWlodWkvbXV0dWFsZnVuZC1tYW5hZ2VyJywgLy8gXHU5NzAwXHU4OTgxXHU4REU4XHU1N0RGXHU0RUUzXHU3NDA2XHU3Njg0XHU2NzJDXHU1NzMwXHU4REVGXHU1Rjg0XHJcbiAgICAvLyAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAvL1x1NjYyRlx1NTQyNlx1NjUzOVx1NTNEOFx1OEJGN1x1NkM0Mlx1NkU5MFx1NTkzNFxyXG4gICAgLy8gICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksIC8vIFx1OERFRlx1NUY4NFx1OTFDRFx1NTE5OVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiBcIndlYi12aWV3XCIsIC8vIFx1NjI1M1x1NTMwNVx1NjU4N1x1NEVGNiBcdTlFRDhcdThCQTRkaXN0XHJcbiAgICBtaW5pZnk6IFwidGVyc2VyXCIsXHJcbiAgICAvLyBcdTYyNTNcdTUzMDVcdTZFMDVcdTk2NjRjb25zb2xlXHU1NDhDZGVidWdnZXJcclxuICAgIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgLy8gXHU4REVGXHU1Rjg0XHU1MjJCXHU1NDBEXHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWVOZXcsICcuL3NyYycpXHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyBjc3NcdTkxNERcdTdGNkVcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgbGVzczoge1xyXG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIG1vZGlmeVZhcnM6IHsgLy9cdTUxNjhcdTVDNDBcdTY4MzdcdTVGMEYgIFx1NzUyOFx1NkNENVx1RkYxQWNvbG9yOiBAcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIC8vIFwicHJpbWFyeS1jb2xvclwiOiBcIiNFQUE1MTZcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLFNBQVMsb0JBQW9CO0FBQ3pTLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxtQkFBbUI7QUFKMkgsSUFBTSwyQ0FBMkM7QUFNdE0sSUFBTSxnQkFBZ0IsY0FBYyx3Q0FBZTtBQUNuRCxJQUFNLGVBQWUsS0FBSyxRQUFRLGFBQWE7QUFFL0MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sU0FBUyxDQUFDO0FBQUE7QUFBQSxJQUNWLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixRQUFRO0FBQUE7QUFBQSxJQUVSLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFBQSxJQUVQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGNBQWMsT0FBTztBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixtQkFBbUI7QUFBQSxRQUNuQixZQUFZO0FBQUE7QUFBQTtBQUFBLFFBRVo7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
