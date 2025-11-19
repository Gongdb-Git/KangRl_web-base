import { defineStore } from 'pinia'
const useCacheStore = defineStore('cache', {
    state: () => ({
        menus: null,
        currentRoute: null,

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
export default useCacheStore;   