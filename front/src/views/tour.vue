<template>
    <div class="tour-container">
        <div class="tour-heading"><h1>{{ content.title }}</h1></div>
        <h3 class="tour-price">{{ content.price }}</h3>
        <tourimggrid :imgs="content.content.imgs"></tourimggrid>
        <div class="content-con">
            <div>
                <p v-for="(i, ind) in content.content.description" :key="ind">{{ i }}</p>
            </div>
            <div class="short-con">
                <h5>Location:</h5>
                <p>{{ content.content.location }}</p>
            </div>
            <div class="short-con">
                <h5>Tour Start:</h5>
                <p>{{ content.content.tourstart }}</p>
            </div>
            <div class="short-con">
                <h5>Duration:</h5>
                <p>{{ content.content.duration }}</p>
            </div>        
        
            <div class="short-con itin">
                <h5>Iternary:</h5>
                <div class="itin-content" v-for="(i, ind) in content.content.itinerary" :key="ind">
                    <div class="time">{{ i.time }}</div>
                    <div class="des">{{ i.text }}</div>
                </div>
            </div>
            <div class="short-con">
                <h5>Included:</h5>
                <p>{{ content.content.included }}</p>
            </div>
            <div class="short-con">
                <h5>Not Included:</h5>
                <p>{{ content.content.notincluded }}</p>
            </div>
            <div class="short-con">
                <h5>Note:</h5>
                <p>{{ content.content.note }}</p>
            </div>
            <div class="short-con itin">
                <h5>What to bring:</h5>
                <p v-for="(i, ind) in content.content.bring" :key="ind">{{ i }}</p>
            </div>
        </div>
        <enquire></enquire>
    </div>
</template>

<script>

//     "itinerary": [], // [{"" : ""}, {"" : ""}]
//     "bring": [], // ["", ""]

import TourImgGrid from '../components/tourimggrid.vue'
import Enquire from '../components/enquire.vue'
export default {
    name: 'tour',
    components: {
        tourimggrid: TourImgGrid,
        enquire: Enquire
    },
    data() {
        return {
            content: this.$content[this.$route.params.type][this.$route.params.index]
        }
    }
}
</script>

<style lang="sass" scoped>
.tour-container
    padding: 20px 10px
.short-con
    display: flex
    flex-direction: row
    align-items: center
    margin: 1em
    p
        margin: 0
h5
    font-weight: bold
    margin: 0
    width: 180px
.short-con.itin
    display: flex
    flex-direction: column
    align-items: flex-start
.itin-content
    display: flex
    flex-direction: row
    margin: 10px
    .des
        margin-left: 20px
</style>

