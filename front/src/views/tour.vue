<template>
    <div class="tour-container">
        <div class="tour-heading"><h1>{{ content.title }}</h1></div>
        <div class="tour-price">{{ content.description }}</div>
        <!-- <tourimggrid :imgs="content.content.imgs"></tourimggrid> -->
        <div>
            <p v-for="(i, ind) in content.content.description" :key="ind">{{ i }}</p>
        </div>
    </div>
</template>

<script>
// import TourImgGrid from '../components/tourimggrid.vue'
import C from '../content.js'
export default {
    name: 'tour',
    // components: {
    //     tourimggrid: TourImgGrid
    // },
    data() {
        return {
            c: C,
            content: {}
        }
    },
    created() {
        this.content = this.c.C[this.$route.params.type][this.$route.params.index]
    }
}
</script>

<style lang="sass" scoped>

</style>

