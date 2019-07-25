<template>
    <div class="tour-container">
        <div class="tour-heading"><h1>{{ content.title }}</h1></div>
        <h3 class="tour-price">{{ content.description }}</h3>
        <tourimggrid :imgs="content.content.imgs"></tourimggrid>
        <div>
            <p v-for="(i, ind) in content.content.description" :key="ind">{{ i }}</p>
        </div>
        <enquire></enquire>
    </div>
</template>

<script>
import TourImgGrid from '../components/tourimggrid.vue'
import Enquire from '../components/enquire.vue'
import C from '../content.js'
export default {
    name: 'tour',
    components: {
        tourimggrid: TourImgGrid,
        enquire: Enquire
    },
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
.tour-container
    padding: 20px 10px
</style>

