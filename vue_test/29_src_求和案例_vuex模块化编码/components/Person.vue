<template>
    <div>
        <h1>人员列表</h1>
        <h2 style="color: springgreen;">上面组件求和为{{num}}</h2>
        <h3>列表中第一个人的名字是{{firstPersonName}}</h3>
        <input type="text" placeholder="请输入姓名" v-model="name">
        <button @click="add">点击添加</button>
        <button @click="addTang">点击添加一个姓唐的人</button>
        <button @click="addYL">点击添加一条语录</button>
        <ul>
            <li v-for="p in $store.state.person.personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid';

export default {
    name:'Person',
    data(){
        return{
            name:''
        }
    },
    computed:{
        // ...mapState('person',['personList']),
        // ...mapState('count',['num'])
        num(){
            return this.$store.state.count.num
        },
        personList(){
            return this.$store.state.person.personList
        },
        firstPersonName(){
            return this.$store.getters['person/firstPersonName']
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('person/ADD_PERSON',personObj)
            this.name = ''
        },
        addTang(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('person/addPersonTang',personObj)
            this.name = ''
        },
        addYL(){
            this.$store.dispatch('person/addYLServer')
        }
    }
}
</script>
<style>
    
</style>