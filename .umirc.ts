import { defineConfig } from 'dumi';
let BaseUrl = '/cf-hooks'; // 仓库的路径
export default defineConfig({
  title: 'hooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // 打包路径配置
  base: BaseUrl,
  publicPath: BaseUrl + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  // more config: https://d.umijs.org/config
});
