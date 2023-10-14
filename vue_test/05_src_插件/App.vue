<template>
    <div>
        <Student></Student>
        <hr>
        <School></School>
    </div>
</template>
<!-- 
    插件
        功能:用于增强Vue
        本质:包含install方法的一个对象,install的第一个参数是Vue
                第二个以后的参数是插件使用者传递的数据
        定义插件:
            对象.install = function (Vue,options){
                ...
            }
        使用插件:Vue.use()
 -->
<script>
    // 引入Student组件
    import Student from './components/Student'
    import School from './components/School'
    export default {
        name:'App',
        components:{Student,School},
    }
</script>