<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">点击获取上方DOM元素</button>
        <School ref="sch"></School>
    </div>
</template>
<!-- 
    ref属性
        1.被用来给元素或子组件注册引用信息(id的替代者)
        2.应用在html标签上获取的是真实的DOM元素
            应用在组件标签上是组件实例对象(vc)
        3.使用方式:
            打标识:<h1 ref='xxx'>...</h1>
                    或<School ref='xxx'>...</School>
            获取:this.$refs.xxx
 -->
<script>
    // 引入School组件
    import School from './components/School'
    export default {
        name:'App',
        components:{School},
        data(){
            return{
                msg:"欢迎来到东华理工大学"
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title);
                console.log(this.$refs.btn);
                console.log(this.$refs.sch);
                // console.log(this.$refs.sch.name);
            }
        }
    }
</script>