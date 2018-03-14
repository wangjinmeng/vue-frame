'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  pages:[
    {name: 'index'},
    {name: 'details'},
    {name: 'about-us'}
  ],
  getEntries:function () {
    let res = {};
    this.pages.forEach((item)=>{
      res[item.name]=`./src/module/${item.name}/main.js`
    });
    return res
  },
  getDevOutput:function() {
    let res = [];
    this.pages.forEach((item)=>{
      let name = item.name;
      res.push(new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: `./src/module/${name}/index.html`,
        inject: true,
        chunks: [name]
      }))
    });
    return res
  },
  getProOutput:function () {
    let res = [];
    this.pages.forEach((item)=>{
      let name = item.name;
      res.push( new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: `./src/module/${name}/index.html`,
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency',
        chunks:['vendor','manifest',name]
      }))
    });
    return res
  }
};
