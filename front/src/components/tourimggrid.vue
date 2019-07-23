<template>
    <div class="img-grid-container">
        <!-- <div v-for="(img, ind) in imgs" :key="ind" class="img-container">
            
        </div> -->
        <div v-masonry origin-left="false" transition-duration="1s" item-selector=".item">
            <div v-masonry-tile class="item" v-for="(img, index) in imgs" :key="index">
                <img :src="require('../assets/' + img)" />
            </div>
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
    flex-wrap: wrap
.img-container
    width: 45%
    margin: 5px
</style>

