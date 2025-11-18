import { defineStore } from 'pinia'
const useCacheStore = defineStore('cache', {
    state: () => ({
            
    }),
    actions: {
        act(key, value) {
            this[key] = value;
        },
    },
})
export default useCacheStore;   