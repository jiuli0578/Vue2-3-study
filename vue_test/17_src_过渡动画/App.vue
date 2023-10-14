<template>
    <div>
        <Test></Test>
        <hr>
        <Test2></Test2>
        <hr>
        <Test3></Test3>
    </div>
</template>
<!-- 
    Vue封装的过渡与动画
        1.作用:在插入、更新或移除DOM元素时,在合适的时候给元素添加样式类名
        2.过程:
                    enter                       leave
            v-enter ==> v-enter-to      v-leave ==> v-leave-to
            |                   |       |                   |
            ---v-enter-active----       ----v-leave-active---
        3.写法:
            (1)准备好样式:
                元素进入的样式:
                    1)v-enter:进入的起点
                    2)v-enter-active:进入过程中
                    3)v-enter-to:进入的终点
                元素离开的样式:
                    1)v-leave:离开的起点
                    2)v-leave-active:离开过程中
                    3)v-leave-to:离开的终点
            (2)使用<transition>包裹要过渡的元素,并配置name属性:
                <transition name="show">
                    <h1 v-show="isShow">路漫漫其修远兮</h1>
                </transition>
            (3)备注:若有多个元素需要过渡,则需要使用<transition-group>
                        且每个元素都要指定key值
 -->
<script>
    import Test from './components/Test.vue';
    import Test2 from './components/Test2.vue'
    import Test3 from './components/Test3.vue'
    export default {
        name:'App',
        components:{Test,Test2,Test3}
    }
</script>
<style>

</style>