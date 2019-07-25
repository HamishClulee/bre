<template>
    <div class="home-con">
        <div class="text-section">
            <h1>Welcome to Bali Hao Tours!</h1>
            <h5>Experienced guides, unforgetable memories.</h5>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <fpsection heading="Full Day Tours">
            <fpgrid heading="Full Day Tours" type="fullday" :content="c.C.fullday"></fpgrid>
        </fpsection>
        <fpsection heading="Half Day Tours">
            <fpgrid heading="Half Day Tours" type="halfday" :content="c.C.halfday"></fpgrid>
        </fpsection>
        <fpsection heading="Trekking">
            <fpgrid heading="Trekking" type="trekking" :content="c.C.trekking"></fpgrid>
        </fpsection>
        <fpsection heading="Activities">
            <fpgrid heading="Activities" type="activities" :content="c.C.activities"></fpgrid>
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
    .text-section
        padding: 10px 20px
        h1
            margin-bottom: 8px
        h5
            margin-bottom: 30px
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
