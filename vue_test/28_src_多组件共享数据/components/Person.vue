<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: springgreen;">上面组件求和为{{num}}</h3>
        <input type="text" placeholder="请输入姓名" v-model="name">
        <button @click="add">点击添加</button>
        <ul>
            <li v-for="p in $store.state.personList" :key="p.id">{{p.name}}</li>
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
        ...mapState(['personList','num'])
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',personObj)
            this.name = ''
        }
    }
}
</script>
<style>
    
</style>