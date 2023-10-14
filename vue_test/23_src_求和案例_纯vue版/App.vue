<template>
    <div class="container">
        <Count></Count>
    </div>
</template>
<script>
    import Count from './components/Count'
    export default {
        name:'App',
        components:{Count}
    }
</script>
<style>
    .container,.footer{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>