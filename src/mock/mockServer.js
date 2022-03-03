// 先引入mock模块 是个插件
import Mock from 'mockjs';
// 把jsons数据格式引进来[json数据没有对外暴露，但是可以引入]
// webpack默认对外暴露的：图片，json数据格式
import banner from './banner.json'
import floor from './floor.json';


// mock数据
Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })
