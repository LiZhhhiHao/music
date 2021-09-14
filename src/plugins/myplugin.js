import Vue from 'vue'

let myPlugin = function () {};

myPlugin.install = function(Vue){
    console.log("myplugin运行");
    Vue.hello=function () {
        console.log("Vue 全局插件");
    }
    Vue.prototype.$hello=function(){
        console.log("Vue 实力方法 $hello");
    }
}
Vue.use(myPlugin);
export default myPlugin;