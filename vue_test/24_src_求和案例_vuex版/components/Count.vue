<template>
    <div>
        <h1>当前值为:{{$store.state.num}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前值为奇数再加</button>
        <button @click="incrementWait">等一会再加</button>
    </div>
</template>
<script>
export default {
    name:'Count',
    data(){
        return{
            n:1,
        }
    },
    methods:{
        increment(){
            // this.$store.dispatch('add',this.n)
            this.$store.commit('ADD',this.n)
        },
        decrement(){
            // this.$store.dispatch('subtract',this.n)
            this.$store.commit('SUBTRACT',this.n)
        },
        incrementOdd(){
            /* if(this.$store.state.num % 2){
                this.$store.dispatch('add',this.n)
            } */
            this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
            /* setTimeout(() => {
                this.$store.dispatch('add',this.n)
            },500) */
            this.$store.dispatch('addWait',this.n)
        },
    }
}
</script>
<style>
    button{
        margin-left: 10px;
    }
</style>