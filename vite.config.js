import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import postCssPxToRem from 'postcss-pxtorem'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
    // 配置前端服务地址和端口
    server: {
        host: '0.0.0.0',
        port: 4000,
        // 是否开启 https
        https: false,
        fs: {
            strict: false,
        },
    },
    resolve: {
        // https://vitejs.dev/config/#resolve-alias
        alias: {
            '@': '/src',
        },
    },
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'vant',
                    esModule: true,
                    resolveStyle: (name) => `vant/es/${name}/style`,
                },
            ],
        }),
    ],
    // 全局css
    css: {
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 37.5,
                    propList: ['*'],
                }),
            ],
        },
        preprocessorOptions: {
            scss: {
                // 全局的scss ，跨域放多个，例如：主题的变量，和一些混合等
                additionalData: `@import "./src/assets/styles/common.scss";`,
            },
        },
        sourceMap: false,
        loaderOptions: {
            css: {},
            postcss: {},
        },
    },
})
