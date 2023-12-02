import { ref, watch } from "vue"

import type { Client } from "@/clients/interfaces/client"
import { useQuery } from "@tanstack/vue-query"
import clientsApi from "@/api/clients-api"


const getClient = async (id: number):Promise<Client> => {
    const { data } = await clientsApi.get(`/clients/${id}`)
    return data
}

const updateClient = async (client: Client):Promise<Client> => {
    const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client)
    return data
}

const useClient = (id: number) => {

    const client = ref<Client>()

    const { isLoading, data, isError } = useQuery({
        queryKey: ['client', id],
        queryFn: () => getClient(id),
        retry: false
    })


    watch(data, ()=>{
        if(data.value) {
            client.value = { ...data.value }
        }
    }, { immediate: true })



    return {
        isLoading,
        isError,
        client,

    }
}
export default useClient