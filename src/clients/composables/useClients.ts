import clientsApi from "@/api/clients-api"
import type { Client } from "../interfaces/client"
import { useQuery } from "@tanstack/vue-query"

const getClient = async ():Promise<Client[]> => {
    const {data} = await clientsApi.get<Client[]>('/clients?_page=1')
    return data
}


const useClients = () => {

    const {isLoading, data} = useQuery({
        queryKey: ['clients?page=', 1],
        queryFn: () => getClient()
    })

    return {
        isLoading
    }
}
export default useClients