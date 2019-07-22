<template>
<!--  -->
    <router-link 
        class="grid-item-container"
        :to="{ name: 'tour', 
            params: { tourname: makeurl, content: itm, type: heading }
        }"
        :style="{ background: 'linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url(' + require('../assets/' + itm.content.imgs[0]) + ')'}">
            <div class="grid-item-text-container">
                <div class="grid-item-title">{{ itm.title }}</div>
                <div class="grid-item-description">{{ builddes }}</div>
            </div>
    </router-link>
</template>

<script>
export default {
    props: {
        itm: Object,
        heading: String
    },
    data () {
        return {
            image: './9.jpg'
        }
    },
    computed: {
        makeurl() {
            return this.itm.title.toLowerCase().replace(' ', '-')
        },
        builddes() {
            return this.itm.description
            .replace('/', ' / ')
        },
        buildbackgroundlink() {
            return '../assets/' + this.itm.content.imgs[0]
        }
    }
}
</script>

<style lang="sass">
.grid-item-container
    margin: 5px
    border: 1px solid $primary
    width: 28%
    height: 150px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    background-size: cover
.grid-item-title
    text-align: center
    color: white
.grid-item-text-container
    padding: 10px
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    flex-direction: column
    height: 150px
.grid-item-description
    color: white
    font-style: italic
</style>

