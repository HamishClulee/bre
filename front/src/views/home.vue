<template>
    <div class="home-con">
        <div class="text-section">
            <h1>Welcome to Bali Hao Tours!</h1>
            <h5>Experienced guides, unforgetable memories.</h5>
            <p>
                Connecting travelers to the island's hidden gems, unique local tours, nightlife tours, 
                and personalized experiences. We are here to help you experience something new and create memories 
                that will last a lifetime!
            </p>
            <h2>About Us</h2>
            <p>
                Bali Hao is a tour and travel agency based in Bali, Indonesia. 
                We were officially established in 2010. The goal is connecting travelers to the 
                best things-to-do and all scenic spots in Bali, the island of incredible cultural and artistic richness!
            </p>
            <p>
                In addition, we also provide reliable and knowledgeable tour guide. They are the best to 
                take you to the island's hidden gems, unique local tours, nightlife tours, and personalized experiences. 
                We are here to help you experience something new and create memories that will last a lifetime!.
            </p>
            <h4>Get in touch via whatsapp</h4>
            <h5>WhatsApp : +62 812 37362707</h5>
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
