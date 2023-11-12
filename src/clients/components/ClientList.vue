
<script setup lang="ts">
import useClients from '../composables/useClients';

const {isLoading} = useClients()
</script>
<template>
    <div>
        <ul>
            <li>
                client 1
            </li>
        </ul>
    </div>
</template>
<style scoped>

</style>