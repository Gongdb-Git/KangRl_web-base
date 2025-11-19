import { defineStore } from 'pinia'
const useCacheStore = defineStore('cache', {
    state: () => ({
        menus:null,
        currentRoute:null,
        
    }),
    actions: {
        act(key, value) {
            this[key] = value;
        },
    },
})
export default useCacheStore;   