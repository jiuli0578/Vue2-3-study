<template>
    <div>
        <button @click="getStudents">点击获取学生信息</button>
        <button @click="getCars">点击获取汽车信息</button>
    </div>
</template>
<!-- 
    Vue脚手架配置代理
        方法一：在Vue.config.js中添加如下配置：
                devServer:{
                    proxy:'http://localhost:5000'
                }
            说明：
                1.优点：配置简单，请求资源时直接发给前端（8080）即可
                2.缺点：不能配置多个代理，不能灵活控制请求是否走代理
                3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，
                            那么该请求会转发给服务器（优先匹配前端资源）
        方法二：编写Vue.config.js配置具体代理规则
                devServer:{
                    proxy:{
                        '/api1':{
                            target:'http://localhost:5000',
                            pathRewrite:{'^/api1':''},
                            // 用于支持websocket
                            ws:true,
                            // 用于控制请求头中的host值
                            changeOrigin:true
                        },
                        '/api2':{
                            target:'http://localhost:5001',
                            pathRewrite:{'^/api2':''},
                            // 用于支持websocket
                            ws:true,
                            // 用于控制请求头中的host值
                            changeOrigin:true
                        }
                    }
                }
            注意：
                changeOrigin设置为true时，服务器收到的请求头中的host为localhost：5000
                changeOrigin设置为false时，服务器收到的请求头中的host为localhost：8080
                changeOrigin默认值为true
            说明：
                1.优点：可以配置多个代理，且可以灵活控制请求是否走代理
                2.缺点：配置略微繁琐，请求资源时必须加前缀
 -->
<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods:{
            getStudents(){
                axios.get('http://localhost:8080/api1/students').then(
                    response => {
                        console.log('请求成功了',response.data);
                    },
                    error => {
                        console.log('请求失败了',error.message);
                    }
                )
            },
            getCars(){
                axios.get('http://localhost:8080/api2/cars').then(
                    response => {
                        console.log('请求成功了',response.data);
                    },
                    error => {
                        console.log('请求失败了',error.message);
                    }
                )
            }
        }
    }
</script>