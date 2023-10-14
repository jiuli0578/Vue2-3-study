<template>
    <div>
        <h1>当前值为:{{num}}</h1>
        <h2>当前值放大十倍后为:{{bigNum}}</h2>
        <h3>我在{{school}},学习{{subject}}</h3>
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
import { mapState,mapGetters } from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1,
        }
    },
    computed:{
        // 手动编写计算属性
        /* num(){
            return this.$store.state.num
        },
        school(){
            return this.$store.state.school
        },
        subject(){
            return this.$store.state.subject
        },*/
        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({num:'num',school:'school',subject:'subject'}),
        
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['num','school','subject']),
        /* **************************************** */
        /* bigNum(){
            return this.$store.getters.bigNum
        }  */
        
        // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
        // ...mapGetters({bigNum:'bigNum'}),
        // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
         ...mapGetters(['bigNum']),
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