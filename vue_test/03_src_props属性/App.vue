<template>
    <div>
        <Student name="孙悟空" :age="18" gender="男"></Student>
    </div>
</template>
<!-- 
    配置项props
        功能:让组件接受外部传过来的数据
        (1)传递数据:
            <Demo name='xxx'></Demo>
        (2)接收数据:
            第一种方式(只接收)
                props:['name']
            第二种方式(限制接收类型)
                props:{
                    name:Number
                }
            第三种方式(限制类型、限制必要性、指定默认值)
                props:{
                    name:{
                        type:String //类型
                        required:true //必要性
                        default:'xxx' //默认值
                    }
                }
        备注:props是只读的,Vue底层会监测你对props的修改
                如果进行了修改,就会发出警告,若需要修改
                    要先将props中的内容复制到data中
                        然后修改data中的数据
 -->
<script>
    // 引入Student组件
    import Student from './components/Student'
    export default {
        name:'App',
        components:{Student},
    }
</script>