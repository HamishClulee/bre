<template>
    <div class="img-grid-container">
        <div v-for="(img, ind) in imgs" :key="ind" class="img-container" v-show="ind < 6">
            <img :src="require('../assets/' + String(img))" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'tourimggrid',
    props: {
        imgs: Array
    },
    methods: {
        buildlink() {
            return ''
        }
    }
}
</script>

<style lang="sass" scoped>
.img-grid-container
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    flex-wrap: wrap
    padding: 15px
.img-container
    margin: 5px
    img
        max-width: 400px
</style>

