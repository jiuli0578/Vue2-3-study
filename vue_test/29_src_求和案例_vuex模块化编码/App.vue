<template>
    <div class="container">
        <Count></Count>
        <Person></Person>
    </div>
</template>
<!-- 
    模块化+命名空间
        1.目的：让代码更好维护，昂多种数据分类更加明确
        2.修改store.js
            const countOptions = {
                namespaced:true,
                actions:{...},
                mutations:{...},
                state:{...},
                getters:{...}
                }
            }
            
            export default new Vuex.Store({
                modules:{
                    count:countOptions,
                    person:personOptions,
                }
            })
        3.开启命名空间后，组件中读取state数据
            // 方式一：自己直接读取
            this.$store.state.person.list
            // 方式二：借助mapState读取
            ...mapState('count',['num','school','subject']),
        4.开启命名空间后，组件中读取getters数据
            // 方式一：自己直接读取
            this.$store.getters['person/firstPersonName']
            // 方式二：借助mapState读取
            ...mapGetters('count',['bigNum']),
        5.开启命名空间后，组件中调用dispatch
            // 方式一：自己直接dispatch
            this.$store.dispatch('person/addPersonTang',personObj)
            // 方式二：借助mapActions
            ...mapActions('count',{incrementOdd:'addOdd',incrementWait:'addWait'})
        6.开启命名空间后，组件中调用commit
            // 方式一：自己直接commit
            this.$store.commit('person/ADD_PERSON',personObj)
            // 方式二：借助mapMutations
            ...mapMutations('count',{increment:'ADD',decrement:'SUBTRACT'}),
 -->
<script>
    import Count from './components/Count'
    import Person from './components/Person';
    export default {
        name:'App',
        components:{Count,Person}
    }
</script>
<style>