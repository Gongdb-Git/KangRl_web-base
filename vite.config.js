import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver({
        importStyle: false, // css in js
      })],
    })],
  resolve: {
    alias: ({
      '@/': '/src/',
      '@/components': '/src/components/',
      '@/assets': '/src/assets/',
    })
  },
  server: {
    port: 8000,
    open: true,
  }
})
