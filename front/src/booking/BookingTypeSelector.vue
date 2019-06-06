<style lang="scss" scoped>
    .your-details-subheading {
        border-bottom: 1px solid $main-orange;
    }

    .multiselect {
        z-index: 100;
        width: 70%;
    }

    .multi-select-container {
        margin-bottom: 30px;
    }

    .booking-type-subtext {
        margin-bottom: 30px;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>
    <div>
        <div class="booking-type-selector-container container content">
            <h1 class="title is-3 your-details-subheading">Who is coming?</h1>
        </div>
        <div class="multi-select-container container">
            <multiselect v-model="bookingType" :options="typeOptions"></multiselect>
        </div>
        <p class="booking-type-subtext container content">
            <em>
                <strong>Note:</strong>
                If you want to make a booking for a group which doesn't fit into the options above, please
                <router-link to="/contact" tag="a">Contact Us</router-link> to arrange.
            </em>
        </p>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import { mapGetters, mapMutations } from 'vuex'
    import { SINGLE_PERSON, COUPLE, COUPLE_W_BABY } from '@/constants/courseTypes.js'
    export default {
        name: 'BookingTypeSelector',
        components: {
            Multiselect
        },
        data () {
            return {
                typeOptions: [
                    SINGLE_PERSON,
                    COUPLE,
                    COUPLE_W_BABY
                ]
            }
        },
        mounted () {

        },
        methods: {
            ...mapMutations(['SET_BOOKING_TYPE'])
        },
        computed: {
            ...mapGetters(['getPendingBooking']),
            bookingType: {
                get () {
                    return this.getPendingBooking.type
                },
                set (type) {
                    this.SET_BOOKING_TYPE(type)
                }
            }
        }
    }
</script>
