<template>
    <div class="container">
        <Category title="美食">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(item, index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
    .container{
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