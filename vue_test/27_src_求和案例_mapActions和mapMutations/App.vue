<template>
    <div class="container">
        <Count></Count>
    </div>
</template>
<!-- 
    mapActions方法：用于帮助我们生成与actions对话的方法，
                    即：包含$store.dispatch(xxx)的函数
        // 借助mapMutations生成对应的方法，方法中会调用commit方法去联系mutations（对象写法）
        ...mapMutations({increment:'ADD',decrement:'SUBTRACT'}),

        // 借助mapMutations生成对应的方法，方法中会调用commit方法去联系mutations（数组写法）
        // ...mapMutations(['ADD','SUBTRACT']),
    mapMutations方法：用于帮助我们生成与mutations对话的方法，
                    即：包含$store.commit(xxx)的函数
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
        ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'})

        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
        // ...mapActions(['addOdd','addWait'])
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