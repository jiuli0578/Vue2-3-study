<template lang="">
    <div>
        <button @click="isShow = !isShow">点击显示/隐藏</button>
        <transition name="show" appear>
            <h1 v-show="isShow">路漫漫其修远兮</h1>
        </transition>
    </div>
</template>
<script>
export default {
    name:"Test",
    data(){
        return{
            isShow:true
        }
    }
}
</script>
<style scoped>
    h1{
        background-color: springgreen;
    }
    .show-enter-active{
        animation: show 1s;
    }
    .show-leave-active{
        animation: show 1s reverse;
    }
    @keyframes show{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>