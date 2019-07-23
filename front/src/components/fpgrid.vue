<template>
    <div class="grid-container">
        <fpgriditem :index="String(i)" :type="type" v-for="(itm, i) in content" :key="i" :itm="itm"></fpgriditem>
    </div>
</template>

<script>
import FPGridItem from './fpgriditem.vue'
export default {
    name: 'fpgrid',
    components: {
        fpgriditem: FPGridItem
    },
    props: {
        content: Array,
        type: String
    }
}
</script>

<style lang="sass" scoped>
.grid-container
    padding: 10px
    display: flex
    flex-direction: row
    flex-wrap: wrap
    align-items: center
    justify-content: center
</style>

