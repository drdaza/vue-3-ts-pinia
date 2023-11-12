<script setup lang="ts">
import { ref } from 'vue';
import ClientList from '../components/ClientList.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
// const id = ref(1)

const navigateDetail = (id:string) => {
    router.push({name:'clientById', params: {id}})
}

</script>
<template>
    <div>
        <h1>all clients</h1>
        <!-- clientList -->
        <!-- PaginationNumber -->
        <!-- loadingModal -->
        <ClientList/>
    </div>
</template>

<style scoped>

</style>