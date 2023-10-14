<template>
    <div class="app">
        <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>
        <hr>
        <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据(第一种写法:使用@或v-on) -->
        <Student @getStudentName="getStudentName" @demo="m1"></Student>
        <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据(第二种写法:使用ref) -->
        <!-- <Student ref="studnet"></Student> -->
    </div>
</template>
<!-- 
    组件的自定义事件
        1.一种组件间的通信方式,适用于子组件==>父组件
        2.使用场景:A是父组件,B是子组件,B想向A传递数据
            那么就要在A中给B绑定自定义事件(事件的回调在A中)
        3.绑定自定义事件:
            (1)第一种,在父组件中:
                <Demo @xxx='yyy/> 或 >Demo v-on:xxx="yyy"/>
            (2)第二种,在父组件中:
                <Demo ref="xxx"/>
                ...
                mounted(){
                    this.$refs.xxx.$on('xxx',this.yyy)
                }
            (3)若想让自定义事件自能触发一次,可以使用once修饰符或$once方法
        4.触发自定义事件:
            this.$emit('xxx',数据)
        5.解绑自定义事件:
            this.$off('xxx')
        6.组件上也可以绑定原生DOM事件,需要使用native修饰符
        7.注意:通过 this.$refs.xxx.$on('xxx')绑定自定义事件时,
            回调要么配置在methods中,要么用箭头函数
                否则this的指向会出问题
 -->
<script>
    // 引入Student组件
    import Student from './components/Student'
    import School from './components/School'
    export default {
        name:'App',
        components:{Student,School},
        methods:{
            getSchoolName(name){
                console.log('App收到学校名',name);
            },
            getStudentName(name){
                console.log('App收到学生名',name);
            },
            m1(){
                console.log('demo被触发了');
            }
        },
        mounted() {
            // 绑定自定义事件
            // this.$refs.studnet.$on('getStudentName',this.getStudentName)
            // 绑定自定义事件(一次性)
            // this.$refs.studnet.$once('getStudentName',this.getStudentName)
        },
    }
</script>
<style>
    .app{
        background-color: violet;
        padding: 5px;
    }
</style>