<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import LoadingModal from '@/shared/components/LoadingModal.vue'
import useClients from '../composables/useClients';

const router = useRouter()
// const id = ref(1)

const { isLoading, clients, changePage, currentPage, totalPages } = useClients()

const navigateDetail = (id:string) => {
    router.push({name:'clientById', params: {id}})
}

</script>
<template>
    <div>
        <h1>all clients</h1>
        <!-- clientList -->
        <ClientList :clients="clients"/>
        <!-- PaginationNumber -->

        <PaginationNumbers 
            :currentPage="currentPage"
            :totalPages="totalPages"
            @emitChangePage="changePage"/>
        <!-- loadingModal -->
        <!-- <h1 v-if="isLoading">loading....</h1> -->
        <LoadingModal v-if="isLoading"/>
        
    </div>
</template>

<style style="scss" scoped>

button:disabled{
    cursor: not-allowed;
}

</style>