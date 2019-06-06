<template>
    <div class="hero-con">
        <transition name="fade" mode="in-out">
            <img src="../assets/cover.webp" :key="ind"/>
        </transition>
        <!-- <transition name="fade" mode="out-in">
            <img v-if="ind === 1" src="../assets/hero1.jpg" />
        </transition> -->
        <div class="overlay-text">
            <h1>Holiday like you live here</h1>
            <h3>Let us do the hard work</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hero',
    data() {
        return {
            src: "../assets/hero.jpg",
            imgs: ["../assets/hero.jpg", "../assets/hero1.jpg"],
            ind: 0,
            int: null,
        }
    },
    mounted () {
        // this.int = setInterval(() => {
        //     this.ind++
        //     if (this.ind > this.imgs.length) {
        //         this.ind = 0
        //     }
        //     this.src = this.imgs[ind]
        // }, 3000)
    }
}
</script>

<style lang="sass" scoped>

.hero-con
    margin-top: -10px
    img
        max-width: 100%
        max-height: 100%
    .overlay-text
        position: absolute
        top: 15vw
        left: 7.5%
        h1, h3
            color: white
        h1
            font-size: 4.5em
</style>
