import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin, type QueryObserverOptions } from '@tanstack/vue-query'

const app = createApp(App)

app.use(createPinia())
app.use(router)

type CustomQueryObserverOptions = QueryObserverOptions & { cacheTime: number };

const vueQueryoptions: CustomQueryObserverOptions = {
    cacheTime: 1000 * 1,
    refetchOnReconnect: 'always',
    refetchInterval: 1000 * 240
}

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                ...vueQueryoptions
            }
        }
    }
})

app.mount('#app')
