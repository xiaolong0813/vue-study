// const vuePlugin = require("../../rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
import vuePlugin from "rollup-plugin-vue";

// 用rollup打包成不同的模块化类型(format)

// 打包成ES module
const es = {
  input: "src/entry.js",
  output: {
    file: "dist/index.bundle.js",
    name: "Element",
    format: "es",
    globals: {      // 单独抽出vue打包
      vue: "Vue",
    },
  },
  external: ["vue"],
  plugins: [
    babel(),         // sfc(单文件组件) 需要babel转译
    vuePlugin({      // 打包vue文件需要用到的插件，编译vue文件
      css: true,
    }),
  ],
};

// 打包成iife。立即执行函数，可以在浏览器用
const iife = {
    input: "src/entry.js",
    output: {
      file: "dist/index.js",
      name: "Element",
      format: "iife",
      globals: {
        vue: "Vue",
      },
    },
    external: ["vue"],
    plugins: [
      babel(),
      vuePlugin({
        css: true,
      }),
    ],
  };

// 打包成通用压缩版，可以在前端用 <script src="lib.min.js"></script> 的方式加载
// umd 指的是通用库，可以自己通过参数判断属于哪种环境
import { terser } from "rollup-plugin-terser"; 
const minEs = {
  input: "src/entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.min.js",
    name: "Element",
    format: "umd",
  },
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
    terser(),    // 压缩所需要的插件
  ],
};

// 打包成cjs模式。即CommonJS，只能在 NodeJS 上运行，使用 require("module") 读取并加载模块。
const cjs = {
  input: "src/entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.cjs.js",
    name: "Element",
    format: "cjs",
  },
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
  ],
};

// 用数组的方式同时打包成这几种格式
export default [es, iife, minEs, cjs];