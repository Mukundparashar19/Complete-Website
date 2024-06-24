import {defineStore} from "pinia";
export const useTaskStore = defineStore({
    id:'taskStore',
    state: () => ({
    book: [],
        details:[],
        formInfo:[],

    }),
    getters:{

    },
    actions:{
        async formData(obj){
            this.formInfo.push({...obj})
            console.log(this.formInfo)
        }

    }
})