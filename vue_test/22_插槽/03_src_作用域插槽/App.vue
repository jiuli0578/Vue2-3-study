<template>
    <div class="container">
        <Category title="游戏">
            <template scope="demo">
                <ul>
                    <li v-for="(item, index) in demo.games" :key="index">{{item}}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="{games}">
                <ol>
                    <li style="color: yellow;" v-for="(item, index) in games" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="{games}">
                <h4 v-for="(item, index) in games" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>
<!-- 
    插槽：
        1.作用：让父组件可以向子组件指定位置插入HTML结构
                也是一种组件间通信的方式，适用于父组件==>子组件
        2.分类：默认插槽、具名插槽、作用域插槽
        作用域插槽理解：数据在组件自身，但根据数据生成的结构需要组件的使用者决定
                    （games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
 -->
<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category}
    }
</script>
<style>
    .container,.footer{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>