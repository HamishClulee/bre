<style lang="scss" scoped>
    .stripe-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .box {
        width: 420px;
        height: 400px;
        text-align: left !important;
    }
    .success-icon {
        margin: 30px;
    }
</style>

<template>
    <div>
        <div v-if="!booking_status_check_in_progress">
            <div class="stripe-container container content box" v-if="getPendingBooking.status === 'complete'">
                <span class="icon success-icon has-text-success">
                    <i class="hooray-icon mdi mdi-checkbox-marked-circle-outline mdi-48px"></i>
                </span>
                <h4 class="title is-3">Payment Successful!</h4>
                <p>An email with confirmation details is on its way.</p>
                <p>Thanks!</p>
                <router-link to="/" tag="h1" class="title is-6"><a>Go Home</a></router-link>
            </div>
            <div v-else>
                <booking-course-details></booking-course-details>
                <booking-type-selector></booking-type-selector>
                <booking-details-form></booking-details-form>
            </div>

        </div>
        <div v-else>
            <loading-spinner></loading-spinner>
        </div>
    </div>
</template>

<script>
    import BookingDetailsForm from '@/components/bookingUtil/BookingDetailsForm.vue'
    import BookingCourseDetails from '@/components/bookingUtil/BookingCourseDetails.vue'
    import LoadingSpinner from '../util/LoadingSpinner'
    import { mapState, mapGetters } from 'vuex'
    import BookingTypeSelector from './BookingTypeSelector'
    export default {
        name: 'BookingConfirmDetails',
        components: {
            BookingTypeSelector,
            LoadingSpinner,
            BookingDetailsForm,
            BookingCourseDetails
        },
        data () {
            return {}
        },
        mounted () {

        },
        methods: {
        },
        computed: {
            ...mapState(['booking_status_check_in_progress']),
            ...mapGetters(['getPendingBooking'])
        }
    }
</script>
