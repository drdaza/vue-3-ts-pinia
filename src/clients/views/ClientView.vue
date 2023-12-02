<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '../composables/useClient';
import { useRoute, useRouter } from 'vue-router';
import useEditClient from '../composables/useEditClient';
import { watch } from 'vue';

const route = useRoute()
const router = useRouter()
const { 
    client, 
    isLoading, 
    
    isError 
} = useClient( +route.params.id)

const { 
    clientMutation, 
    isUpdating, 
    isErrorUpdating, 
    isUpdatingSuccess, 
    updateClient,  
} = useEditClient()


watch(isError, ()=>{
    if(isError.value) {
        router.replace('/clients')
    }
})




</script>
<template>
    <div>


        <h3 v-if="isUpdating">saving...</h3>
        <h3 v-if="isUpdatingSuccess">saved</h3>

        <LoadingModal v-if="isLoading"/>

        <form 
            v-if="client"
            @submit.prevent="updateClient(client)">
            <input 
                type="text" 
                placeholder="name" 
                v-model="client.name">
            <br>
            <input 
                type="text" 
                placeholder="address"
                v-model="client.address"
            >
            <br>
            <button :disabled="isUpdating" type="submit">save</button>
        </form>
    </div>


    <code>
        {{ client }}
    </code>
</template>

<style lang="scss" scoped>
    input {
        width: 100%;
        height: 1vh;
        margin-bottom: 1vh;
    }

</style>