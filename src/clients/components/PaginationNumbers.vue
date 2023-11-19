
<script setup lang="ts">
import { computed } from 'vue';
import useClients from '../composables/useClients';

const { changePage, totalPagesNumber, currentPage, totalPages } = useClients()

const disableBackNavigation = computed( () => 
    currentPage.value === 1
)
const disableNextkNavigation = computed( () => 
    currentPage.value === totalPages.value 
)

</script>

<template>
    <div>
        <button
            :disabled="disableBackNavigation"
            @click="changePage(currentPage - 1 )"
        >Back</button>
        <button 
            v-for="pageNumber of totalPagesNumber"
            :class="{'active-page': currentPage === pageNumber}"
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </button>
        <button
            :disabled="disableNextkNavigation"
            @click="changePage(currentPage + 1 )"
        >next</button>
    </div>
</template>
<style lang="scss" scoped>
    .active-page {
        background-color: beige;
    }
</style>