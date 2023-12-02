import { computed, reactive, ref, watch } from "vue"
import type { Client } from "../interfaces/client"
// import { 
//     useMutation
// } from "@tanstack/vue-query"
// import {useMutation as  mutationUse} from "@tanstack/vue-query"

import  *  as vueQuery from "@tanstack/vue-query"
import clientsApi from "@/api/clients-api"

const updateClient = async (client: Client):Promise<Client> => {
    const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client)

    return data
}


const useEditClient = () => {


    const options = reactive({
    mutationFn: (client: Client) => updateClient(client)
    })
    // console.log(tankstack);
    
    const client = ref<Client>()
    
    // const clientMutation = useMutation(options)
    const clientMutation = vueQuery.useMutation(options)
    watch( clientMutation.isSuccess, () => {
        setTimeout(() => {
            clientMutation.reset();
        },2000)
    });

    return {
        clientMutation,


        updateClient:      clientMutation.mutate,
        isUpdating:        computed( () => clientMutation.isPending.value ),
        isUpdatingSuccess: computed( () => clientMutation.isSuccess.value ),
        isErrorUpdating:   computed( () => clientMutation.isError.value ),
    }
}
export default useEditClient