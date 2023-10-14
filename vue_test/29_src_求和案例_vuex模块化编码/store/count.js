// 求和相关的配置
const countOptions = {
    namespaced:true,
    actions:{
        addOdd(context,value){
            console.log('actions中的addOdd被调用了');
            if(context.state.num % 2){
                context.commit('ADD',value)
            }
        },
        addWait(context,value){
            console.log('actions中的addWait被调用了');
            setTimeout(() => {
                context.commit('ADD',value)
            },500)
        },
    },
    mutations:{
        ADD(state,value){
            console.log('mutations中的ADD被调用了');
            state.num += value
        },
        SUBTRACT(state,value){
            console.log('mutations中的SUBTRACT被调用了');
            state.num -= value
        },
    },
    state:{
        num:0,
        school:'东华理工大学',
        subject:'Vue',
    },
    getters:{
        bigNum(state){
            return state.num * 10
        }
    }
}
export default countOptions