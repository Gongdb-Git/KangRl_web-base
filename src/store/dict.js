import { defineStore } from 'pinia'
const useDictStore = defineStore('dict', {
    state: () => ({

    }),
    actions: {
        act(key, value) {
            this[key] = value;
        },
    },
})
export default useDictStore;