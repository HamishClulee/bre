<template>
<!--  -->
    <router-link 
        class="grid-item-container"
        :to="{ name: 'tour', 
            params: { tourname: makeurl, type: type, index: index }
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
    name: 'fpgriditem',
    props: {
        itm: Object,
        heading: String,
        type: String,
        index: String,
    },
    computed: {
        makeurl() {
            return this.itm.title.toLowerCase()
        },
        builddes() {
            return this.formatnum(this.itm.price) + "rp per " + this.itm.charged
        },
        buildbackgroundlink() {
            return '../assets/' + this.itm.content.imgs[0]
        },
    },
    methods: {
        formatnum(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

