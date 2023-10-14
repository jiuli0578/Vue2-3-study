// 人员管理相关的配置
import axios from "axios";
import { nanoid } from "nanoid";
const personOptions = {
    namespaced:true,
    actions:{
        addPersonTang(context,value){
            if(value.name.indexOf('唐') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人要姓唐')
            }
        },
        addYLServer(context){
            axios.get('https://v1.hitokoto.cn/?c=f&encode=text').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    console.log(error.message);
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了');
            if(value.name === ''){
                alert('输入不能为空')
            }else{
                state.personList.unshift(value)
            }
        }
    },
    state:{
        personList:[
            {id:'001',name:'孙悟空'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}
export default personOptions