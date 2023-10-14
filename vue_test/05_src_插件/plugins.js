export default  {
    install(Vue){
        // 添加一个全局过滤器
        Vue.filter("mySlice",function(value){
            return value.slice(0,4)
        })
        // 添加全局指令
        Vue.directive('fbind',{
            // 指令与元素成功绑定时调用
            bind(element,binding){
                element.value = binding.value
            },
            // 指令所在元素被插入页面时调用
            inserted(element,binding){
                // 获取焦点
                element.focus()
            },
            // 指令所在模板被重新解析时调用
            update(element,binding){
                element.value = binding.value
            }
        })
        // 添加混入
        Vue.mixin({
            data(){
                return{
                    a:100,
                    b:200
                }
            }
        })
        // 给Vue原型上添加一个方法(vm和vc都能用)
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}