<template>
    <ul>
        <li :style="{opacity}">欢迎来到{{school}}学习{{subject}}</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>
<script>
    export default {
        name:'News',
        data() {
            return {
                school:'东华理工大学',
                subject:'Vue',
                opacity:1
            }
        },
        activated(){
            console.log('News组件被激活了');
            this.timer = setInterval(() => {
                console.log('@');
                this.opacity -=0.01
                if(this.opacity < 0){
                    this.opacity = 1
                }
            }, 20);
        },
        deactivated(){
            console.log('News组件失活了');
            clearInterval(this.timer)
        }
    }
</script>
<style>
    
</style>