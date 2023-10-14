<template>
    <div class="container">
        <Count></Count>
    </div>
</template>
<!-- 
    1.mapState方法：用于帮助我们映射state中的数据为计算属性
        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({num:'num',school:'school',subject:'subject'}),
        
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['num','school','subject']),

    2.mapGetters方法：用于帮助我们映射getters中的数据为计算属性
        // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
        // ...mapGetters({bigNum:'bigNum'}),
        
        // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
         ...mapGetters(['bigNum']),
 -->
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