import { defineStore } from 'pinia' 
import { computed, ref } from 'vue' 
import type { Client } from '@/clients/interfaces/client'


export const useClientStore = defineStore('Client', () => {


    // state
    const currentPage = ref<number>(1)
    const totalPages = ref<number>(5)
    const clients = ref<Client[]>([])


    return {
        currentPage,
        totalPages,
        clients,
        // actions 
        setClients( newCLients: Client[] ) {
            clients.value = newCLients
        },
        setPage( page: number) {
            if (currentPage.value === page) return
            currentPage.value = page
        }
        // // getters
        // getState: computed(() => {
        //     return state.value
        // })
    }
})