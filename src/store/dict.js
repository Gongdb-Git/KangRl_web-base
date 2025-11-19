import { defineStore } from 'pinia'
const useDictStore = defineStore('dict', {
    state: () => ({

    }),
    actions: {
        act(key, value) {
            this[key] = value;
        },
    },
       persist: {
        enabled: true,
        strategies: [
            { storage: sessionStorage },
        ]
    }
})
export default useDictStore;