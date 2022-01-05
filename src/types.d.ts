// 在没用用到需要具体定义的内容的时候，可以只声明一下'*.vue'就可以
// src/main.d.ts
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
declare module "*.png" {
    const value: any;
    export = value;
}