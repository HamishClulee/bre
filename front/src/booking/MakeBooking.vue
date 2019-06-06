<template>
    <div class="make-booking-container" v-if="!course_load_in_progress">

        <progress-bar class="custom-progress-bar"></progress-bar>

        <router-view></router-view>
    </div>
</template>

<script>
import BookingDetailsForm from './BookingDetailsForm.vue'
import ProgressBar from './ProgressBar.vue'
import BookingCourseDetails from './BookingCourseDetails.vue'
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
export default {
    name: 'MakeBooking',
    components: {
        BookingCourseDetails,
        ProgressBar,
        BookingDetailsForm
    },
    data () {
        return {}
    },
    mounted () {
        this.CHECK_BOOKING_STATUS(this.$route.params.id)
    },
    methods: {
        ...mapMutations(['SET_ACTIVE_COURSE']),
        ...mapActions(['CHECK_BOOKING_STATUS'])
    },
    computed: {
        ...mapGetters(['getActiveCourse', 'getUserFromSession', 'getBookingStatus']),
        ...mapState(['course_load_in_progress'])
    },
    watch: {
        course_load_in_progress: function () {
            if (!this.course_load_in_progress) {
                this.SET_ACTIVE_COURSE(this.$route.params.id)
            }
        }
    }
}
</script>
<style lang="sass" scoped>
    .vue-map-container
        margin: 40px 0px
    .container 
        max-width: 98%
    .custom-progress-bar
        margin-top: 6em
    .make-booking-container
        min-height: 70vh
</style>
