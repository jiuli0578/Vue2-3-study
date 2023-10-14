<template>
    <div class="container">
        <Category title="美食">
            <img slot="demo1" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="demo2" href="http://localhost:8080">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="demo1">
                <li v-for="(item, index) in games" :key="index">{{item}}</li>
            </ul>
            <div slot="demo2" class="footer">
                <a href="http://localhost:8080">单机游戏</a>
                <a href="http://localhost:8080">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="demo1" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template v-slot:demo2>
                <div class="footer">
                    <a href="http://localhost:8080">经典</a>
                    <a href="http://localhost:8080">热门</a>
                    <a href="http://localhost:8080">推荐</a>
                    <a href="http://localhost:8080">好评</a>
                </div>
            </template>
        </Category>
    </div>
</template>
<script>
    import Category from './components/Category'
    export default {
        name:'App',
        components:{Category},
        data(){
            return{
                foods:['烧烤','火锅','炸鸡','水煮'],
                games:['CS:GO','原神','部落冲突','都市：天际线'],
                films:['《流浪地球》','《绿皮书》','《地球最后一个夜晚》','《斗破苍穹》']
            }
        }
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