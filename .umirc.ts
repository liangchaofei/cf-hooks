/*
 * @Author: your name
 * @Date: 2021-03-30 16:09:05
 * @LastEditTime: 2021-04-06 11:49:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chooks/.umirc.ts
 */
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
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'UI组件',
      path: 'https://liangchaofei.github.io/cdesign/',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/liangchaofei',
    },
    {
      title: '博客',
      path: 'https://liangchaofei.github.io/',
    },
    {
      title: '语雀',
      path: 'https://www.yuque.com/hyqwan/',
    },
  ],
  publicPath: BaseUrl + '/', // 打包文件时，引入地址生成 publicPath/xxx.js
  // more config: https://d.umijs.org/config
});
