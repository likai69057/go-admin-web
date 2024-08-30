import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from "path"

function resolve(dir){
  return path.join(__dirname, '.', dir)
}


// https://vitejs.dev/config/
export default defineConfig({
  envDir: './viteenv',   //这里设置的相对路径
  plugins: [vue(),
    createSvgIconsPlugin({
      //指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  //设置../的别名
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
})
