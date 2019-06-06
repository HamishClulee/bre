<style lang="scss" scoped>
    .progress-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        flex-direction: row;
        padding-bottom: 40px;
        width: 100%;
        transition: all ease 1s;
    }

    .progress-item {
        flex-grow: 1;
        text-align: center;
        align-items: center;
        flex-direction: column;
        z-index: 30;
        cursor: pointer;
        transition: all ease 1s;
    }

    .icon {
        background-color: white;
        margin: 15px;
        padding: 20px;
        border: 10px solid white;
        transition: all ease 1s;
    }

    .track-container {
        display: flex;
        flex-direction: row;
        width: 66%;
        position: relative;
        left: 17%;
        bottom: 110px;
        z-index: 20;
        transition: all ease 1s;
    }

    .track-item {
        border-top: 3px solid #adadad;
        height: 3px;
        flex-grow: 1;
        margin-left: 10px;
        transition: all ease 1s;
    }

    .track-green {
        border-top: 3px solid $main-orange;
        transition: all ease 1s;
    }

    .track-item:nth-child(0) {
        margin-left: 11px;
        margin-right: 13px;
        transition: all ease 1s;
    }

    .track-item:nth-child(1) {
        margin-left: 10px;
        margin-right: 13px;
        transition: all ease 1s;
    }

    .active {
        color: $main-orange;
        text-transform: uppercase;
        font-family: $heading-font;
        transition: all ease 1s;
    }

    .item-not-done {
        color: $main-blue;
        transition: all ease 1s;
    }

    .item-complete {
        color: $main-orange;
        transition: all ease 1s;
    }

    .item-label {
        transition: all ease 1s;
    }
</style>

<template>
    <div class="container">
        <div class="progress-container">
            <div class="progress-item">
                <span class="icon"
                      :class="{ 'item-not-done' : areDetailsComplete, 'item-complete': !areDetailsComplete }">
                    <router-link class="mdi mdi-48px"
                        :class="{ 'mdi-checkbox-marked-circle-outline' : areDetailsComplete, 'mdi-checkbox-blank-circle-outline': !areDetailsComplete}"
                        tag="i" :to="buildLink('details')">
                    </router-link>
                </span>
                <router-link :to="buildLink('details')" tag="p" class="item-label" :class="{ active : getActive('details') }">Details</router-link>
            </div>
            <div class="progress-item">
                <span class="icon"
                      :class="{ 'item-not-done' : isCheckoutComplete, 'item-complete': !isCheckoutComplete }">
                    <router-link class="mdi mdi-48px"
                       :class="{ 'mdi-checkbox-marked-circle-outline' : isCheckoutComplete, 'mdi-checkbox-blank-circle-outline': !isCheckoutComplete}"
                       tag="i" :to="buildLink('checkout')">
                    </router-link>
                </span>
                <router-link :to="buildLink('checkout')" tag="p" class="item-label" :class="{ active : getActive('checkout') }">Checkout</router-link>
            </div>
            <div class="progress-item">
                <span class="icon"
                      :class="{ 'item-not-done' : isPaymentComplete, 'item-complete': !isPaymentComplete }">
                    <router-link class="mdi mdi-48px"
                       :class="{ 'mdi-checkbox-marked-circle-outline' : isPaymentComplete, 'mdi-checkbox-blank-circle-outline': !isPaymentComplete}"
                       tag="i" :to="buildLink('payment')">
                    </router-link>
                </span>
                <router-link :to="buildLink('payment')" tag="p" class="item-label" :class="{ active : getActive('payment') }">Payment</router-link>
            </div>
        </div>
        <div class="track-container">
            <div class="track-item" :class="{ 'track-green' : areDetailsComplete }"></div>
            <div class="track-item" :class="{ 'track-green' : isCheckoutComplete }"></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'ProgressBar',
        data () {
            return {}
        },
        mounted () {

        },
        methods: {
            getActive (status) {
                return this.$route.path.split('/')[3] === status
            },
            buildLink (status) {
                return '/make-booking/' + this.$route.params.id + '/' + status
            },
            buildLiLink (status) {
                this.$router.push('/make-booking/' + this.$route.params.id + '/' + status)
            }
        },
        computed: {
            ...mapGetters(['isPaymentComplete', 'isCheckoutComplete', 'areDetailsComplete'])
        }
    }
</script>
