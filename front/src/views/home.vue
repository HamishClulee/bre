<template>
    <div class="home-con">
        <fpsection heading="Full Day Tours">
            <fpgrid heading="Full Day Tours" :content="c.C.fullday"></fpgrid>
        </fpsection>
        <fpsection heading="Half Day Tours">
            <fpgrid heading="Half Day Tours" :content="c.C.halfday"></fpgrid>
        </fpsection>
        <fpsection heading="Trekking">
            <fpgrid heading="Trekking" :content="c.C.trekking"></fpgrid>
        </fpsection>
        <fpsection heading="Activities">
            <fpgrid heading="Activities" :content="c.C.activities"></fpgrid>
        </fpsection>
    </div>
    
</template>

<script>
import FPSection from '../components/fpsection.vue'
import FPGrid from '../components/fpgrid.vue'
import C from '../content.js'
export default {
    components: {
        fpsection: FPSection,
        fpgrid: FPGrid
    },
    name: 'home',
    data () {
        return {
            c: C
        }
    },
    mounted () {
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style lang="sass" scoped>
    .home-con

    .hero-overlay-con
        background-color: white
        height: 169px
        width: 75vw
        position: absolute
        top: 780px
        left: 0
        display: flex
        flex-direction: row
        justify-content: space-evenly
        padding-left: 50px
        padding-right: 100px
        border-radius: 0 5px 0 0
        opacity: 0.8
    .nav-item
        height: 100px
        display: flex
        flex-direction: column
        margin-top: 30px
        margin-left: 0
        margin-right: 20px
        h5
            color: $tertiary
            cursor: pointer
            &:hover
                text-decoration: underline
                opacity: 0.8
        h6
            color: $secondary
            text-transform: uppercase
            letter-spacing: 1.5px
            font-size: 0.9em
            margin-bottom: 5px
</style>
