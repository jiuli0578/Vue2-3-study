<template>
    <div>
        <Student></Student>
        <hr>
        <School></School>
    </div>
</template>
<!-- 
    mixin(混入)
        功能:
            可以把多个组件共用的配置提取成一个混入对象
        使用方式:
            第一步第一混合,例如:
                {
                    data(){...},
                    methods:{...},
                    ...
                }
            第二步使用混合,例如:
                (1)全局混入:
                    Vue.mixin(xxx)
                (2)局部混入:
                    mixins:['xxx']
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