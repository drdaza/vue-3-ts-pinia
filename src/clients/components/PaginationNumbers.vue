
<script setup lang="ts">
import { computed, toRef} from 'vue';
import useClients from '../composables/useClients';

// const { changePage, totalPagesNumber, currentPage, totalPages } = useClients()

interface Props {
    currentPage: number,
    totalPagesNumber?: Array<number>,
    totalPages: number
}

const props = defineProps<Props>()

const currentPage= toRef(props, 'currentPage')
const totalPages = toRef(props, 'totalPages')

interface Emits {
    (e: 'emitChangePage', numberPage: number): void
}

const emit = defineEmits<Emits>()


const emitChangePage = (numberPage: number) => {
    emit('emitChangePage', numberPage)
}
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
            @click="emitChangePage(currentPage - 1)"
        >Back</button>
        <button 
            v-for="pageNumber in totalPages"
            :class="{'active-page': currentPage === pageNumber}"
            @click="emitChangePage(pageNumber)"
        >
            {{ pageNumber }}
        </button>
        <button
            :disabled="disableNextkNavigation"
            @click="emitChangePage(currentPage + 1 )"
        >next</button>
    </div>
</template>
<style lang="scss" scoped>
    .active-page {
        background-color: beige;
    }
</style>