<template lang="">
    <div>
        <button @click="isShow = !isShow">点击显示/隐藏</button>
        <transition-group name="show" appear>
            <h1 v-show="isShow" key='1'>路漫漫其修远兮</h1>
            <h1 v-show="!isShow" key='2'>吾将上下而求索</h1>
        </transition-group>
    </div>
</template>
<script>
export default {
    name:"Test2",
    data(){
        return{
            isShow:true
        }
    }
}
</script>
<style scoped>
    h1{
        background-color: rgb(25, 188, 248);
        /* transition: 1s linear; */
    }
    /* 进入的起点,离开的终点 */
    .show-enter,.show-leave-to{
        transform: translateX(-100%);
    }
    .show-enter-active,.show-leave-active{
        transition: 1s linear;
    }
    /* 进入的终点,离开的起点 */
    .show-enter-to,.show-leave{
        transform: translateX(0);
    }
</style>