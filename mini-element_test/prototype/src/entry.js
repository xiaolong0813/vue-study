// 打包统一的入口
import MyButton from './MyButton'
import SfcButton from './SfcButton.vue'

// 添加插件install方法，即注册。使用app.use 就是调用该插件的install方法，并传入
// app 这个类作为参数
MyButton.install = app => app.component("MyButton", MyButton)
SfcButton.install = app => app.component("SfcButton", SfcButton)

// 形成组件库，可以同时安装库中的n多个插件
const Element = {
    MyButton,
    SfcButton,
    install: app => {
        app.use(MyButton).use(SfcButton)
    }
}

export default Element


//  使用rollup安装以下库
//     "@babel/core": "^7.13.16",
//     "@rollup/plugin-babel": "^5.3.0",
//     "@vue/compiler-sfc": "^3.0.11",    #vue 单文件组件 sfc-single file component
//     "rollup-plugin-terser": "^7.0.2",  # 压缩
//     "rollup-pluginutils": "^2.8.2",