<template>
    <div class="home-con">
        <hero></hero>
        <div class="hero-overlay-con">
            <div class="nav-item">
                <h6>Modern Villa Living</h6>
                <router-link tag="h5" :to="{ name: 'rayasemat' }">Pom Pom's - Raya Semat</router-link>
            </div>
            <div class="nav-item">
                <h6>Co-work, Co-live, enjoy!</h6>
                <router-link tag="h5" :to="{ name: 'rayacanggu' }">Pom Pom's - Raya Canggu</router-link>
            </div>
            <div class="nav-item">
                <h6>Cut out the middle men</h6>
                <router-link tag="h5" :to="{ name: 'book' }">Book Now</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import hero from '../components/hero'
export default {
    components: {
        hero,
    },
    name: 'home',
    data () {
        return {
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
