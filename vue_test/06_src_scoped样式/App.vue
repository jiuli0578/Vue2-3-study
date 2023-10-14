<template>
    <div>
        <Student></Student>
        <hr>
        <School></School>
    </div>
</template>
<!-- 
    scoped样式
        作用:让样式在局部生效,防止冲突
        写法:<style scoped>
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