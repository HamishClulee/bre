<style lang="scss" scoped>
    .add-top-margin {
        padding-top: 2.5em;
    }

    .img-container {
        position: relative;
        text-align: center;
        color: white;
    }

    .overlay-text {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .top-right-button-container {
        position: absolute;
        top: 5%;
        right: -4%;
        transform: translate(-50%, -50%);
    }

    .button {
        padding: 0 4em;
        font-weight: 800;
        letter-spacing: 2px;
    }
</style>

<template>
    <section 
        class="hero"
        v-bind:class="{ 'add-top-margin': !isConstructionPage, 'is-fullheight': isConstructionPage }">
        <div class="img-container">
            <img :src="imgLink" class="hero-baby-img" v-if="!isMobile"/>
            <img src="/static/images/slider1Mobile.jpeg" class="hero-baby-img" v-if="isMobile && caroselIndex === 0"/>
            <img src="/static/images/slider2Mobile.jpeg" class="hero-baby-img" v-if="isMobile && caroselIndex === 1"/>
            <img src="/static/images/slider3Mobile.jpeg" class="hero-baby-img" v-if="isMobile && caroselIndex === 2"/>
            <div class="top-right-button-container">
                <button class="button is-info is-small" v-if="hasButtonTopRight" @click="handleLoginClick">LOGIN</button>
            </div>
            <overlay-text
                :details="textDetails[0]"
                v-if="isCarosel && caroselIndex === 0"
                :isRight="true">
            </overlay-text>
            <overlay-text
                v-if="isCarosel && caroselIndex === 1"
                :details="textDetails[1]"
                :isRight="false">
            </overlay-text>
            <overlay-text 
                v-if="isCarosel && caroselIndex === 2"
                :details="textDetails[2]"
                :isRight="true">        
            </overlay-text>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import OverlayText from '@/components/util/OverlayText.vue'
export default {
    name: 'ViewHero',
    props: {
        'imgLink': {
            type: String,
            required: true
        },
        'hasButtonCenter': {
            type: Boolean,
            default: true
        },
        'hasButtonTopRight': {
            type: Boolean,
            default: false
        },
        'isConstructionPage': {
            type: Boolean,
            default: false
        },
        'caroselIndex': {
            type: Number,
            default: 0
        },
        'isCarosel': {
            type: Boolean,
            default: false
        }
    },
    components: {
        OverlayText
    },
    data () {
        return {
            textDetails: [
                {
                    title: 'Rewarding',
                    text: 'Baby Aid courses empower you to respond to a wide range of paediatric emergencies.'
                },
                {
                    title: 'Informed',
                    text: 'Experienced paramedics teach you to respond confidently to emergency situations'
                },
                {
                    title: 'Essential',
                    text: 'Accidents and emergencies do happen. Be prepared, be confident, be ready.'
                }
            ]
        }
    },
    mounted () {
    },
    methods: {
        handleLoginClick () {
            if (process.env.NODE_ENV === 'development' || window.location.protocol === 'http:') {
                location.replace('http://localhost:5000/login')
            } else {
                location.replace('https://babyaid.co.nz/login')
            }
        },
        handleBookCourse () {
            this.$router.push({ path: '/course-dates' })
        }
    },
    computed: {
        ...mapGetters(['getWindowWidth']),
        isLarge () {
            return this.getWindowWidth > 980
        },
        isMobile () {
            return this.getWindowWidth < 480
        }
    }
}
</script>
