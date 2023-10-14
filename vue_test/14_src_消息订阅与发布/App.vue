<template>
    <div class="app">
        <School></School>
        <Student></Student>
    </div>
</template>
<script>
    // 引入Student组件
    import Student from './components/Student'
    import School from './components/School'
    export default {
        name:'App',
        components:{Student,School},
    }
</script>
<style>
    .app{
        background-color: violet;
        padding: 5px;
    }
</style>