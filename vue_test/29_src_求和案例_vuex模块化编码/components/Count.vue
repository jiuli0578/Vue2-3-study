<template>
    <div>
        <h1>当前值为:{{num}}</h1>
        <h2>当前值放大十倍后为:{{bigNum}}</h2>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3 style="color: palevioletred;">下面组件的总人数为{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前值为奇数再加</button>
        <button @click="incrementWait(n)">等一会再加</button>
    </div>
</template>
<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1,
        }
    },
    computed:{
        ...mapState('count',['num','school','subject']),
        ...mapState('person',['personList']),
        ...mapGetters('count',['bigNum']),
    },
    methods:{
        ...mapMutations('count',{increment:'ADD',decrement:'SUBTRACT'}),
        ...mapActions('count',{incrementOdd:'addOdd',incrementWait:'addWait'})
    }
}
</script>
<style>
    button{
        margin-left: 10px;
    }
</style>