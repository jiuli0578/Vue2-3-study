<!-- 快捷键：输入vueInit一键生成 -->
<template lang="">
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>
<script>
    // 引入组件
    import School from './School.Vue'
    import Student from './Student.Vue'
    
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>
<style lang="">
    
</style>