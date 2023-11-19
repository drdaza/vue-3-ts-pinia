
<script setup lang="ts">
import { useRouter } from 'vue-router';
import useClients from '../composables/useClients';
import { idText } from 'typescript';

const router = useRouter()
const { clients } = useClients()

const goToClientDetail = (id: number) => {
    router.push({name: 'clientById', params: { id }})
}
</script>
<template>
    <div>
        <ul>
            <li v-for="client of clients" @click="goToClientDetail(client.id)">
                {{ client.name }}
            </li>
        </ul>
    </div>
</template>
<style scoped>

</style>