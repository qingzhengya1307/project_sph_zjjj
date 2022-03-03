module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 按需加载 elementUI借助babel-plugin引入需要的组件
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
}
