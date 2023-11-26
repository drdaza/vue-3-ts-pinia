import clientsApi from "@/api/clients-api"
import type { Client } from "../interfaces/client"
import { useQuery } from "@tanstack/vue-query"
import { useClientStore } from "@/stores/clients"
import { storeToRefs } from "pinia"
import { computed, watch } from "vue"

const getClient = async (page: number):Promise<Client[]> => {

    // await new Promise((resolve)=>{
    //     setTimeout(()=> resolve(true), 1500)
    // })

    const {data} = await clientsApi.get<Client[]>(`/clients?_page=${page}`)
    return data
}


const useClients = () => {

    const clientStore = useClientStore()
    const {currentPage, clients, totalPages} = storeToRefs( clientStore )

    const {isLoading, data} = useQuery({
        queryKey: ['clients?page=', currentPage],
        queryFn: () => getClient( currentPage.value ),
        // staleTime: 1000 * 30,
        // select(newClients) {
        //     clientStore.setClients(newClients)
        // },
    })

    watch(data, clients=> {
        if (clients) clientStore.setClients(clients)
    })

    return {
        clients,
        currentPage,
        isLoading,
        totalPages,

        changePage (page:number) {
            clientStore.setPage(page)
        },
        // getters

        // totalPagesNumber: computed(
        //         ()=>[...new Array(totalPages.value)].map((value, index) => index + 1)
        //     )
    }
}
export default useClients