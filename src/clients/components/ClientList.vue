
<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { Client } from '@/clients/interfaces/client'

const router = useRouter()

interface Props {
    clients: Client[]
}

const props = defineProps<Props>()

const goToClientDetail = (id: number) => {
    router.push({name: 'clientById', params: { id }})
}
</script>
<template>
    <div>
        <ul>
            <li v-for="client of props.clients" @click="goToClientDetail(client.id)">
                {{ client.name }}
            </li>
        </ul>
    </div>
</template>
<style scoped>

</style>