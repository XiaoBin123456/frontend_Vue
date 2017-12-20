//导入第三方包 vue文件
import Vue from 'vue';

//导入根组件
import AppComponent from './component/App.vue';

/* 创建vue实例 */
new Vue({
  el:"#app",
  render: c => c(AppComponent)
});